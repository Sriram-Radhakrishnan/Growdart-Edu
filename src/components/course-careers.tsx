import { Code2, Layers, Rocket } from "lucide-react";

// Statistics and source labels supplied in the design reference.
const statistics = [
  { value: "163%", text: "Growth in AI-related job postings between 2024 and 2025 — even as overall tech hiring fell", source: "LinkedIn, 365 Data Science, 2025" },
  { value: "#1", text: "“AI Engineer” ranked as the fastest-growing job title in the US on LinkedIn’s 2026 Jobs Report", source: "LinkedIn Jobs Report, 2026" },
  { value: "729%", text: "Year-over-year growth in forward-deployed engineer job postings (2025 → 2026).", source: "Source: Mint, TOI, Medium" },
  { value: "$206K", text: "Average AI engineer salary in 2025, a $50,000 jump in a single year, still climbing in 2026", source: "MRJ Recruitment, Second Talent, 2026" },
];

const roles = [
  { icon: Code2, title: "AI Front-end Engineer" },
  { icon: Layers, title: "AI Fullstack Engineer" },
  { icon: Rocket, title: "Forward Deployment Engineer" },
];

export function CourseCareers() {
  return <section aria-labelledby="course-careers-heading" className="relative isolate overflow-hidden border-t border-[#25734f] bg-[radial-gradient(ellipse_at_top_left,#14824e,transparent_60%),linear-gradient(135deg,#075c3c,#021c16)] px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
    <div aria-hidden="true" className="pointer-events-none absolute -top-20 -left-32 -z-10 h-96 w-96 rounded-full bg-[#74efaa]/15 blur-3xl" />
    <div className="mx-auto max-w-[1168px]">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold tracking-[.18em] text-[#a0f5bf]"><span className="size-1.5 shrink-0 rounded-full bg-[#74efaa]" /> WHERE AI-NATIVE ENGINEERING TAKES YOU</p>
          <h2 id="course-careers-heading" className="max-w-[620px] font-heading text-[clamp(2rem,3.4vw,3rem)] leading-[1.18] font-semibold tracking-[-.045em] text-white">AI didn&apos;t replace engineers.<br /><span className="text-[#a0f5bf]">It created new roles that pay more.</span></h2>
        </div>
        <ul aria-label="AI engineering career roles" className="space-y-4">{roles.map(({ icon: Icon, title }, index) => <li key={title} className={`flex items-center gap-4 rounded-2xl border px-5 py-4 ${index === 1 ? "border-[#74efaa]/40 bg-white/10 text-white" : "border-white/15 bg-white/5 text-[#d0e9dc]"}`}><Icon size={22} className="shrink-0 text-[#a0f5bf]" strokeWidth={1.5} aria-hidden="true" /><span className="font-heading text-lg leading-7 font-semibold tracking-tight sm:text-xl">{title}</span></li>)}</ul>
      </div>
      <div className="mt-12 grid overflow-hidden rounded-3xl border border-[#d7e6d4] bg-[#fbfffa] md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {statistics.map(({ value, text, source }, index) => <article key={value} className={`flex flex-col p-7 sm:p-8 ${index > 0 ? "border-t border-[#d7e6d4]" : ""} ${index === 1 ? "md:border-t-0 md:border-l" : ""} ${index === 2 ? "lg:border-t-0 lg:border-l" : ""} ${index === 3 ? "md:border-l lg:border-t-0" : ""}`}>
          <p className="text-5xl leading-tight font-medium tracking-[-.055em] text-[#133f34]">{value}</p>
          <p className="mt-4 text-sm leading-7 text-[#375b49]">{text}</p>
          <p className="mt-auto pt-8 text-[10px] leading-5 font-medium tracking-[.1em] text-[#5f7668] uppercase">{source}</p>
        </article>)}
      </div>
    </div>
  </section>;
}
