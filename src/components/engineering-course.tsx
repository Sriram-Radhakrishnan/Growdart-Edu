"use client";

import { useState } from "react";
import Image from "next/image";
import { Download, Code2, Sparkles, Rocket, GraduationCap, BriefcaseBusiness, TrendingUp, PhoneCall } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/faq-and-footer";
import { CallbackForm } from "@/components/callback-form";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CourseRoadmap } from "@/components/course-roadmap";
import { CourseHighlights } from "@/components/course-highlights";
import { CourseProjects } from "@/components/course-projects";
import { CourseGrowth } from "@/components/course-growth";
import { CoursePricing } from "@/components/course-pricing";
import { CourseCareers } from "@/components/course-careers";

const course = "Product & AI Software Engineering";
const pillars = [
  { icon: Code2, title: "Design to development", text: "Turn product requirements and designs into functional applications using modern development practices." },
  { icon: Sparkles, title: "AI-assisted engineering", text: "Use AI to plan, write, debug, improve, and document your code throughout the development lifecycle." },
  { icon: Rocket, title: "Test, ship & iterate", text: "Learn testing, deployment, monitoring, and iteration to take products from development to real-world use." },
];

export function EngineeringCourse() {
  const [form, setForm] = useState<"brochure" | "callback" | null>(null);
  return <div className="min-h-screen bg-background">
    <SiteHeader onEnquire={() => setForm("callback")} />
    <main>
      <section aria-labelledby="course-heading" className="hero relative isolate overflow-hidden px-6 pt-14 pb-14 text-center sm:pt-20">
        <div aria-hidden="true" className="hero-glow absolute inset-0 -z-20" />
        <svg aria-hidden="true" className="hero-particles pointer-events-none absolute inset-0 -z-10 h-full w-full" viewBox="0 0 1440 850" preserveAspectRatio="xMidYMin slice" fill="none">
          {Array.from({length:23},(_,i)=>{const end=-1600+i*210;const d=`M ${680+i*4} -220 C ${680+i*4} 190, ${720+(end-720)*.22} 390, ${end} 950`;return <g key={i}><path d={d} stroke="#1a9c61" strokeOpacity=".09"/><path className="hero-particle" d={d} pathLength="1000" stroke="#42b86d" strokeWidth="1.5" strokeDasharray="18 1000" style={{animationDuration:`${5+i%5}s`,animationDelay:`${-i*.73}s`}} /></g>;})}
        </svg>
        <div className="relative mx-auto max-w-[1100px]">
          <div className="hero-enter mb-8 inline-flex items-center gap-3 rounded-full border border-[#cce4c9] bg-white/80 px-5 py-2.5"><Image src="/logo/light-png.png" alt="Grow Dart" width={946} height={147} className="h-auto w-[85px]"/><span className="h-4 w-px bg-[#cce4c9]"/><span className="text-[11px] font-semibold tracking-[.12em] text-[#28734a]">6 Month Program</span></div>
          <h1 id="course-heading" className="hero-enter font-heading text-[clamp(2.6rem,6.1vw,5.45rem)] leading-[1.12] font-semibold tracking-[-.055em] text-[#133f34]">Product & AI<br/><span className="accent-text">Software Engineering</span></h1>
          <p className="hero-enter mt-7 text-[11px] font-semibold tracking-[.18em] text-[#28734a]">BUILD FROM IDEA TO PRODUCTION</p>
          <p className="hero-enter mx-auto mt-5 max-w-[690px] text-[15px] leading-[1.85] text-[#5f7668] sm:text-[17px]">Learn the complete product engineering journey—from shaping an idea and designing the experience to building, testing, and deploying production-ready applications with AI in your workflow.</p>
          <Button onClick={() => setForm("brochure")} className="hero-enter mt-8 h-13 gap-4 rounded-full bg-[#185b43] px-8 text-sm text-white hover:bg-[#237854]">Download brochure <Download size={17}/></Button>
          <div className="hero-enter mx-auto mt-14 grid max-w-[960px] gap-6 border-t border-[#d7e6d4] pt-8 text-left sm:grid-cols-3">{pillars.map(({icon:Icon,title,text})=><div key={title} className="flex gap-3"><div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#cce4c9] bg-[#edf5e8] text-[#28734a]"><Icon size={18}/></div><div><h2 className="font-heading text-sm font-bold">{title}</h2><p className="mt-2 text-xs leading-6 text-[#5f7668]">{text}</p></div></div>)}</div>
        </div>
      </section>
      <section aria-labelledby="who-can-join-heading" className="border-t border-[#d7e6d4] bg-[#fbfffa] px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
        <div className="mx-auto max-w-[1168px]">
          <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold tracking-[.2em] text-[#46855d]"><span className="size-1.5 rounded-full bg-[#42a365]" /> YOUR NEXT STEP STARTS HERE</p>
          <h2 id="who-can-join-heading" className="font-heading text-[clamp(2rem,3.4vw,3rem)] leading-[1.18] font-semibold tracking-[-.045em]">Who Can <span className="accent-text">Join?</span></h2>
          <p className="mt-4 max-w-[660px] text-[15px] leading-7 text-[#5f7668]">Take the next step in your career—whether you’re studying, looking for a job, or ready to upskill.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { icon: GraduationCap, title: "College Students", text: "Build practical skills alongside your studies and prepare for internships and your first job." },
              { icon: BriefcaseBusiness, title: "Graduates & Job Seekers", text: "Strengthen your knowledge, develop job-ready skills, and approach career opportunities with confidence." },
              { icon: TrendingUp, title: "Working Professionals", text: "Upgrade your skills, stay current in your field, and prepare for new responsibilities and career growth." },
            ].map(({icon: Icon, title, text}, index) => <article key={title} className="border border-[#d7e6d4] bg-[#f0f7ed] p-7 sm:p-8"><div className="mb-7 flex items-center justify-between"><div className="flex size-12 items-center justify-center border border-[#cee4c9] bg-[#fbfffa] text-[#28734a]"><Icon size={23} strokeWidth={1.5} aria-hidden="true" /></div><span aria-hidden="true" className="text-xs text-[#6e8d79]">0{index + 1}</span></div><h3 className="font-heading text-xl leading-7 font-semibold tracking-tight text-[#133f34]">{title}</h3><p className="mt-4 text-sm leading-7 text-[#5f7668]">{text}</p></article>)}
          </div>
        </div>
      </section>
      <CourseRoadmap />
      <CourseHighlights />
      <CourseProjects />
      <CourseGrowth onApply={() => setForm("callback")} />
      <CoursePricing onApply={() => setForm("brochure")} />
      <CourseCareers />
    </main>
    <Footer />
    <Button onClick={() => setForm("callback")} aria-haspopup="dialog" className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 h-12 gap-2.5 rounded-full border border-[#74efaa]/40 bg-[#185b43] px-5 text-sm font-semibold text-white shadow-xl shadow-black/20 hover:bg-[#237854] sm:right-6 sm:bottom-6 sm:h-13 sm:px-6"><PhoneCall size={18} aria-hidden="true" />Request Callback</Button>
    <Dialog open={form !== null} onOpenChange={open => {if(!open)setForm(null);}}><DialogContent className="max-h-[90svh] overflow-y-auto rounded-none bg-[#fbfffa] p-6 sm:max-w-[560px] sm:p-8"><CallbackForm key={form} course={course} brochure={form === "brochure"}/></DialogContent></Dialog>
  </div>;
}
