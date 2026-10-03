import { Wrench, Rocket, Users, Code2, MessagesSquare, Award } from "lucide-react";

const highlights = [
  { icon: Wrench, title: "20+ In-Demand Tools", text: "Gain hands-on experience with tools used in modern web and AI development." },
  { icon: Rocket, title: "From Fundamentals to Production", text: "Learn to design, build, test, and deploy complete software applications from scratch." },
  { icon: Users, title: "Learn from Industry Practitioners", text: "Learn from professionals actively building software and AI products." },
  { icon: Code2, title: "Build Industry-Relevant Projects", text: "Apply your skills to real-world projects using modern technologies." },
  { icon: MessagesSquare, title: "1 Year of Community Support", text: "Stay connected with peers and mentors for guidance as you continue learning." },
  { icon: Award, title: "Earn Your Certificate", text: "Showcase your achievement with a certificate of course completion." },
];

export function CourseHighlights() {
  return <section aria-labelledby="course-highlights-heading" className="border-t border-[#d7e6d4] bg-[#fbfffa] px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
    <div className="mx-auto max-w-[1168px]">
      <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold tracking-[.2em] text-[#46855d]"><span className="size-1.5 rounded-full bg-[#42a365]" /> BUILT FOR YOUR GROWTH</p>
      <h2 id="course-highlights-heading" className="font-heading text-[clamp(2rem,3.4vw,3rem)] leading-[1.18] font-semibold tracking-[-.045em]">Course <span className="accent-text">Highlights</span></h2>
      <p className="mt-4 max-w-[650px] text-[15px] leading-7 text-[#5f7668]">Build practical skills, create real projects, and prepare for your career in software engineering.</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map(({icon: Icon, title, text}, index) => <article key={title} className="border border-[#d7e6d4] bg-[#f0f7ed] p-7 sm:p-8"><div className="mb-7 flex items-center justify-between"><div className="flex size-12 items-center justify-center border border-[#cee4c9] bg-[#fbfffa] text-[#28734a]"><Icon size={23} strokeWidth={1.5} aria-hidden="true" /></div><span aria-hidden="true" className="text-xs text-[#6e8d79]">0{index + 1}</span></div><h3 className="font-heading text-xl leading-7 font-semibold tracking-tight text-[#133f34]">{title}</h3><p className="mt-4 text-sm leading-7 text-[#5f7668]">{text}</p></article>)}
      </div>
    </div>
  </section>;
}
