import { ArrowUpRight, BookOpen, ClipboardCheck, Headphones, MessagesSquare, Mic, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  { icon: ClipboardCheck, title: "Weekly Assessments & Assignments", text: "Reinforce learning through consistent practice and progress tracking." },
  { icon: Mic, title: "Mock Interviews", text: "Practice real interview scenarios to build confidence and readiness." },
  { icon: BookOpen, title: "Interview Preparation", text: "Structured guidance to crack technical and HR interviews." },
  { icon: Users, title: "Lifetime Community Access", text: "Stay connected with a network of learners, mentors, and opportunities." },
];

export function CourseGrowth({ onApply }: { onApply: () => void }) {
  return <section aria-labelledby="course-growth-heading" className="border-t border-[#d7e6d4] bg-[#fbfffa] px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
    <div className="mx-auto max-w-[1168px]">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold tracking-[.2em] text-[#46855d]"><span className="size-1.5 rounded-full bg-[#42a365]" /> BEYOND THE CURRICULUM</p>
          <h2 id="course-growth-heading" className="font-heading text-[clamp(2rem,3.4vw,3rem)] leading-[1.18] font-semibold tracking-[-.045em] text-[#133f34]">More Than Just a Course.<br /><span className="accent-text">Complete Growth.</span></h2>
        </div>
        <div className="lg:pt-8">
          <h3 className="font-heading text-xl font-semibold tracking-tight text-[#133f34]">Stay consistent. Stay confident.</h3>
          <p className="mt-3 text-sm leading-7 text-[#5f7668]">Learning doesn&apos;t stop at classes. From daily mentor support and real interview practice to a strong community and placement guidance, we ensure you&apos;re supported at every step of your journey — until you achieve your goals.</p>
          <Button onClick={onApply} className="mt-6 h-12 gap-5 rounded-full bg-[#185b43] px-6 text-white hover:bg-[#237854]">Apply Now <ArrowUpRight size={18} aria-hidden="true" /></Button>
        </div>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <article className="relative isolate flex flex-col overflow-hidden rounded-3xl border border-[#25734f] bg-[radial-gradient(ellipse_at_top_right,#14824e,transparent_65%),linear-gradient(145deg,#075c3c,#021c16)] p-7 text-white sm:p-8 md:col-span-2 lg:col-span-1 lg:row-span-2">
          <div className="mb-7 flex size-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-[#a0f5bf]"><Headphones size={24} strokeWidth={1.5} aria-hidden="true" /></div>
          <p className="mb-3 text-[10px] font-semibold tracking-[.18em] text-[#a0f5bf]">GUIDANCE, EVERY DAY</p>
          <h3 className="font-heading text-2xl font-semibold tracking-tight">Co-Mentor Support</h3>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#d0e9dc]">Get continuous guidance and doubt-solving from dedicated mentors everyday (9 am to 9 pm).</p>
          <div aria-hidden="true" className="mt-10 flex flex-1 items-end">
            <div className="w-full rounded-2xl border border-[#73d39b]/25 bg-white/5 p-5">
              <div className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-full bg-[#5cdf94]/15 text-[#a0f5bf]"><MessagesSquare size={20} /></span><span className="text-sm font-medium">A mentor in your corner</span></div>
              <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4 text-xs text-[#d0e9dc]"><span className="flex items-center gap-2"><span className="size-2 rounded-full bg-[#74efaa]" /> Daily mentor support</span><span>9 am – 9 pm</span></div>
            </div>
          </div>
        </article>
        {benefits.map(({ icon: Icon, title, text }, index) => <article key={title} className={`rounded-3xl border border-[#d7e6d4] p-7 sm:p-8 ${index === 3 ? "bg-[#e4f2df]" : "bg-[#f0f7ed]"}`}>
          <div className="mb-6 flex size-12 items-center justify-center rounded-2xl border border-[#cce4c9] bg-[#fbfffa] text-[#28734a]"><Icon size={23} strokeWidth={1.5} aria-hidden="true" /></div>
          <h3 className="font-heading text-xl leading-7 font-semibold tracking-tight text-[#133f34]">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-[#5f7668]">{text}</p>
        </article>)}
      </div>
    </div>
  </section>;
}
