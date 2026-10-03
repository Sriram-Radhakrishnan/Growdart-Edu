import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const inclusions = [
  "6 months of intensive live training",
  "Mentor support and mock interviews",
  "Real-world projects and capstone",
  "AI-integrated learning workflow",
  "1 year dedicated community support",
];

export function CoursePricing({ onApply }: { onApply: () => void }) {
  return <section aria-labelledby="course-pricing-heading" className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_top_right,#14824e,transparent_65%),linear-gradient(145deg,#075c3c,#021c16)] px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
    <div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 -z-10 h-64 w-64 opacity-15 [background-image:linear-gradient(#8aefb7_1px,transparent_1px),linear-gradient(90deg,#8aefb7_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(135deg,black,transparent)]" />
    <div className="mx-auto grid max-w-[1168px] items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
      <div>
        <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold tracking-[.2em] text-[#a0f5bf]"><span className="size-1.5 rounded-full bg-[#74efaa]" /> INVEST IN YOUR NEXT CHAPTER</p>
        <h2 id="course-pricing-heading" className="font-heading text-[clamp(2rem,3.4vw,3rem)] leading-[1.18] font-semibold tracking-[-.045em] text-white">Your future.<br /><span className="text-[#a0f5bf]">A stronger start.</span></h2>
        <p className="mt-5 max-w-md text-[15px] leading-7 text-[#d0e9dc]">Build practical product and AI engineering skills with live training, real projects, and guidance throughout your journey.</p>
        <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-5 py-4 text-sm text-[#d0e9dc]"><Sparkles size={20} className="shrink-0 text-[#a0f5bf]" aria-hidden="true" /> Founding year. A special start for you.</div>
      </div>
      <div className="rounded-3xl bg-[#fbfffa] p-6 shadow-2xl shadow-black/20 sm:p-8">
        <div className="rounded-2xl border border-[#b9d9b2] bg-[#e4f2df] px-5 py-6 text-center sm:px-7">
          <p className="text-[11px] font-bold tracking-[.1em] text-[#185b43]">EARLY BID – FOUNDING YEAR OFFER</p>
          <p className="mt-4 text-xl text-[#637569]"><span className="sr-only">Regular program fee: </span><del>₹59,999</del></p>
          <p className="mt-1 font-heading text-[clamp(2.75rem,6vw,3.75rem)] leading-tight font-bold tracking-tight text-[#133f34]"><span className="sr-only">Early bid program fee: </span>₹39,999<span className="mt-2 block font-sans text-sm font-medium tracking-normal text-[#375b49]">+ GST</span></p>
          <p className="mt-3 inline-block rounded-full bg-[#185b43] px-4 py-1.5 text-xs font-semibold text-white">Save ₹20,000 on the program fee</p>
        </div>
        <div className="my-6 border-b border-[#d7e6d4] pb-6">
          <h3 className="font-heading text-lg font-semibold text-[#133f34]">What&apos;s included</h3>
          <ul className="mt-5 space-y-4">{inclusions.map(item => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#375b49]"><CheckCircle2 size={17} className="mt-1 shrink-0 text-[#28734a]" aria-hidden="true" /><span>{item}</span></li>)}</ul>
        </div>
        <Button onClick={onApply} className="h-13 w-full justify-between rounded-xl bg-[#185b43] px-5 text-sm text-white hover:bg-[#237854]">Apply for the Early Bid Offer <ArrowUpRight size={19} aria-hidden="true" /></Button>
      </div>
    </div>
  </section>;
}
