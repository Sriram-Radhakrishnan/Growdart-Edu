"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";

import { cohortCourses } from "@/lib/cohort-courses";

export function CallbackForm({ course = "", category = "cohort", brochure = false }: { course?: string; category?: string; brochure?: boolean }) {
  const isOrganization = category === "institution" || category === "corporate";
  const copy = brochure ? { eyebrow: "YOUR COURSE GUIDE", title: "Take a closer look at your next chapter.", description: "Enter your details to download the Product & AI Software Engineering brochure and explore the 6 month program." } : category === "institution" ? {
    eyebrow: "GROW YOUR CAMPUS’S POTENTIAL",
    title: "Bring future-ready skills to your campus.",
    description: "Tell us about your institution’s goals. Let’s shape AI literacy, technical placement training, or credit courses around your learners and faculty.",
  } : category === "corporate" ? {
    eyebrow: "HELP YOUR TEAM GROW",
    title: "Build the skills your team needs next.",
    description: "Share your team’s training needs. Let’s create a customized learning program in AI software development, DevOps and cloud, agentic AI, or cybersecurity.",
  } : {
    eyebrow: "LET’S GROW TOGETHER",
    title: "Your next chapter starts here.",
    description: "Every great journey starts with one step. Tell us a little about yourself, and let’s find your path to growth.",
  };
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const field = "mt-2 w-full rounded-none border border-[#d2e2cf] bg-white px-3 py-2.5 text-sm text-[#1f4f39] outline-none focus:border-[#2a8b5f] focus:ring-2 focus:ring-[#2a8b5f]/15";
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending || sent) return;
    setSending(true);
    setError("");
    const data = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(data), category, course: brochure ? course : data.get("course"), intent: brochure ? "brochure" : "callback" }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We couldn’t send your request. Please try again.");
      setSent(true);
      if (brochure) { const link = document.createElement("a"); link.href = "/brochures/product-ai-software-engineering.pdf"; link.download = "Grow-Dart-Product-AI-Software-Engineering.pdf"; link.click(); }
    } catch (failure) {
      setError(failure instanceof Error ? failure.message : "We couldn’t send your request. Please try again.");
    } finally {
      setSending(false);
    }
  }
  return <>
    <Image src="/logo/light-png.png" alt="Grow Dart" width={946} height={147} className="mb-2 h-auto w-[170px]" />
    <div><p className="mb-2 text-[10px] font-semibold tracking-[.17em] text-[#488860]">{copy.eyebrow}</p><DialogTitle className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">{copy.title}</DialogTitle><DialogDescription className="mt-3 text-sm leading-6 text-[#5f7668]">{copy.description}</DialogDescription></div>
    <form onSubmit={submit} className="mt-1 grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-medium">Full name <span aria-hidden="true">*</span><input name="name" autoComplete="name" required maxLength={100} placeholder="Your name" className={field} /></label>
        <label className="text-xs font-medium">Email ID <span aria-hidden="true">*</span><input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" className={field} /></label>
      </div>
      <label className="text-xs font-medium">Contact number <span aria-hidden="true">*</span><input name="phone" type="tel" autoComplete="tel" required pattern="[+0-9() .-]{7,20}" maxLength={20} title="Enter a valid contact number with 7–20 characters." placeholder="Your contact number" className={field} /></label>
      {!isOrganization && !brochure && <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-medium">Cohort course <span aria-hidden="true">*</span><select name="course" required defaultValue={cohortCourses.includes(course) ? course : ""} className={field}><option value="" disabled>Select a course</option>{cohortCourses.map(name => <option key={name}>{name}</option>)}</select></label>
        <label className="text-xs font-medium">Qualification <span aria-hidden="true">*</span><select name="qualification" required defaultValue="" className={field}><option value="" disabled>Select qualification</option>{["HSC", "UG", "PG"].map(name => <option key={name}>{name}</option>)}</select></label>
      </div>}
      {!brochure && <label className="text-xs font-medium">{isOrganization ? "Requirement description" : "Description"} {isOrganization ? <span aria-hidden="true">*</span> : <span className="font-normal text-[#6e8d79]">(optional)</span>}<textarea name="description" required={isOrganization} maxLength={1500} rows={3} placeholder={isOrganization ? "Tell us about your training requirements and goals." : "Tell us about your learning goals or what you’d like help with."} className={`${field} resize-y`} /></label>}
      <Button type="submit" disabled={sending || sent} className="h-11 gap-3 rounded-none bg-[#12613d] text-white hover:bg-[#1b8053]">{sending ? "Sending your request…" : sent ? "Request sent" : brochure ? "Submit" : "Request a callback"} <ArrowUpRight size={16} /></Button>
      <p className="text-[11px] leading-5 text-[#688372]">We’ll use these details to contact you about your chosen program.</p>
      {sent && <p role="status" className="border border-[#d2e2cf] bg-[#e8f4e6] p-3 text-xs leading-6 text-[#2d5f48]">{brochure ? "Your brochure is ready. Your download will start automatically." : "Your callback request has been sent. We look forward to helping you grow!"}</p>}
      {error && <p role="alert" className="border border-red-200 bg-red-50 p-3 text-xs leading-6 text-red-800">{error}</p>}
    </form>
  </>;
}
