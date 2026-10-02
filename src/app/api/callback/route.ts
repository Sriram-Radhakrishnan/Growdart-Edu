import nodemailer from "nodemailer";
import { cohortCourses } from "@/lib/cohort-courses";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ error: "Please submit the form from our website." }, { status: 403 });
  }
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return Response.json({ error: "Invalid request format." }, { status: 415 });
  }
  let payload: unknown;
  try {
    const raw = await request.text();
    if (raw.length > 6000) return Response.json({ error: "Your request is too long." }, { status: 413 });
    payload = JSON.parse(raw);
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
  const fields = payload as Record<string, unknown>;
  const read = (key: string) => typeof fields[key] === "string" ? fields[key].trim() : "";
  const name = read("name"), email = read("email"), phone = read("phone"), course = read("course"), qualification = read("qualification"), description = read("description");
  const category = read("category") || "cohort";
  const isOrganization = category === "institution" || category === "corporate";
  if (!["cohort", "institution", "corporate"].includes(category) || !name || name.length > 100 || /[\r\n]/.test(name) || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !/^[+0-9() .-]{7,20}$/.test(phone) || phone.replace(/\D/g, "").length < 7 || (!isOrganization && (!cohortCourses.includes(course) || !["HSC", "UG", "PG"].includes(qualification))) || (isOrganization && !description) || description.length > 1500) {
    return Response.json({ error: "Please check your contact details and required fields." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;
  const port = Number(SMTP_PORT || "587");
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !SMTP_FROM || !Number.isInteger(port) || port < 1 || port > 65535) {
    return Response.json({ error: "Callback requests are temporarily unavailable. Please email hi@growdart.com." }, { status: 503 });
  }
  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    requireTLS: port !== 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    disableFileAccess: true,
    disableUrlAccess: true,
  });
  try {
    const result = await transport.sendMail({
      from: SMTP_FROM,
      to: "hi@growdart.com",
      replyTo: email,
      subject: `Grow Dart callback request — ${isOrganization ? category === "institution" ? "Institution Programs" : "Corporate Programs" : course}`,
      text: `New callback request\n\nCategory: ${category}\nName: ${name}\nEmail: ${email}\nContact number: ${phone}${isOrganization ? "" : `\nCourse: ${course}\nQualification: ${qualification}`}\n\n${isOrganization ? "Requirement description" : "Description"}:\n${description || "Not provided"}`,
    });
    if (!result.accepted?.length) throw new Error("Recipient not accepted");
    return Response.json({ message: "Your callback request has been sent. We look forward to helping you grow!" });
  } catch {
    return Response.json({ error: "We couldn’t send your request. Please try again or email hi@growdart.com." }, { status: 502 });
  } finally {
    transport.close();
  }
}
