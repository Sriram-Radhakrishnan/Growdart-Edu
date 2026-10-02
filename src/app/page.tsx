"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ArrowRight, Sparkles, Menu, X, ChevronDown, Check, Code2, BrainCircuit, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Programs } from "@/components/programs";
import { HowItWorks } from "@/components/how-it-works";
import { FaqAndBanner, Footer } from "@/components/faq-and-footer";

import { CallbackForm } from "@/components/callback-form";

const links = ["Why Grow Dart", "Programs", "How Grow Dart Works", "FAQs"];
const features = [
  { icon: Code2, label: "Go deeper", text: "Build strong technical foundations." },
  { icon: BrainCircuit, label: "Think with AI", text: "Make AI part of your everyday work." },
  { icon: TrendingUp, label: "Keep growing", text: "Develop skills that compound over time." },
];
const differentiators = [
  { icon: BrainCircuit, title: "AI-integrated curriculum", eyebrow: "LEARN FOR WHAT’S NEXT", text: "Learn to approach technical problems with AI in the loop. Connect core concepts with practical AI workflows, from understanding a problem to building a thoughtful solution." },
  { icon: TrendingUp, title: "Career-based training", eyebrow: "BUILD SKILLS FOR YOUR NEXT ROLE", text: "Build practical technical skills aligned with the work you want to do. Explore industry workflows, strengthen your engineering judgment, and practice applying modern tools to the challenges you’ll face in real technology roles." },
  { icon: Code2, title: "Project-based learning", eyebrow: "TURN KNOWLEDGE INTO SKILL", text: "Move beyond theory by applying what you learn to hands-on projects. Practice solving problems, making technical decisions, and building work that demonstrates your skills." },
  { icon: TrendingUp, title: "Strong foundations", eyebrow: "BUILD DEPTH THAT LASTS", text: "Develop a solid understanding of programming, problem-solving, and software design. Tools will change. The ability to reason clearly and build reliable solutions stays with you." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [callbackCategory, setCallbackCategory] = useState("cohort");
  const [callbackCourse, setCallbackCourse] = useState("");
  const [panel, setPanel] = useState<string | null>(null);
  const openPanel = (name: string) => { setCallbackCourse(""); setCallbackCategory("cohort"); setPanel(name); setMenuOpen(false); };
  const showPrograms = () => {
    document.getElementById("programs")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    setMenuOpen(false);
  };
  const navigate = (name: string) => {
    if (name === "FAQs") {
      document.getElementById("faqs")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
      setMenuOpen(false);
      return;
    }
    if (name === "How Grow Dart Works") {
      document.getElementById("how-grow-dart-works")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
      setMenuOpen(false);
      return;
    }
    if (name === "Programs") { showPrograms(); return; }
    if (name === "Why Grow Dart") {
      document.getElementById("why-grow-dart")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
      setMenuOpen(false);
    } else openPanel(name);
  };
  return (
    <div className="min-h-screen bg-background">
      <header className="relative z-20 mx-auto flex h-24 max-w-[1280px] items-center justify-between gap-8 px-6 sm:px-10 lg:px-14">
        <Link href="/" aria-label="Grow Dart home" className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-emerald-700">
          <Image src="/logo/light-png.png" alt="Grow Dart" width={946} height={147} className="h-auto w-[168px] sm:w-[190px]" priority />
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => <button key={link} onClick={() => navigate(link)} className="nav-link flex items-center gap-1.5 text-[13px] font-medium text-[#446255]">{link}{link === "Programs" && <ChevronDown size={13} />}</button>)}
        </nav>
        <Button onClick={() => openPanel("Let’s talk")} className="hidden h-10 rounded-full bg-[#0a5533] px-5 text-[13px] text-white hover:bg-[#11784a] lg:inline-flex">Let’s talk <ArrowUpRight size={15} className="ml-2" /></Button>
        <Button variant="ghost" size="icon" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">{menuOpen ? <X /> : <Menu />}</Button>
        {menuOpen && <nav id="mobile-menu" aria-label="Mobile navigation" className="absolute top-20 right-6 left-6 flex flex-col gap-1 rounded-2xl border bg-white p-4 shadow-xl lg:hidden">{links.map((link) => <button key={link} onClick={() => navigate(link)} className="rounded-lg px-4 py-3 text-left text-sm hover:bg-emerald-50">{link}</button>)}<Button className="mt-2" onClick={() => openPanel("Let’s talk")}>Let’s talk <ArrowUpRight /></Button></nav>}
      </header>
      <main>
        <section aria-labelledby="hero-heading" className="hero relative isolate overflow-hidden px-6 pt-14 pb-12 text-center sm:pt-20 sm:pb-14">
          <div aria-hidden="true" className="hero-glow absolute inset-0 -z-20" />
          <svg aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 h-full w-full" viewBox="0 0 1440 850" preserveAspectRatio="xMidYMin slice" fill="none">
            {Array.from({ length: 23 }, (_, i) => { const end = -1600 + i * 210; return <path key={i} d={`M ${680 + i * 4} -220 C ${680 + i * 4} 190, ${720 + (end - 720) * .22} 390, ${end} 950`} stroke="#1a9c61" strokeOpacity=".09" strokeWidth="1" />; })}
            <path d="M 190 526 L 249 494 M 1191 491 L 1250 526 M 377 682 L 410 641 M 1040 675 L 1078 716" stroke="#42b86d" strokeOpacity=".3" strokeWidth="2" />
          </svg>
          <svg aria-hidden="true" className="hero-particles pointer-events-none absolute inset-0 -z-10 h-full w-full" viewBox="0 0 1440 850" preserveAspectRatio="xMidYMin slice" fill="none">
            {Array.from({ length: 23 }, (_, i) => {
              const end = -1600 + i * 210;
              return <path key={i} className="hero-particle" d={`M ${680 + i * 4} -220 C ${680 + i * 4} 190, ${720 + (end - 720) * .22} 390, ${end} 950`} pathLength="1000" stroke="#41ae69" strokeWidth={i % 3 === 0 ? 2 : 1.3} strokeLinecap="round" strokeDasharray={`${12 + i % 4 * 4} 1000`} style={{ animationDuration: `${5 + i % 5}s`, animationDelay: `${-i * .73}s` }} />;
            })}
          </svg>
          <div className="relative mx-auto max-w-[1100px]">
            <div className="hero-enter mb-8 inline-flex max-w-full items-center gap-2.5 rounded-full border border-[#cee4c9] bg-white/70 px-4 py-2 text-[9px] font-semibold tracking-[.12em] text-[#2c7956] sm:text-[11px] sm:tracking-[.16em]"><Sparkles size={13} strokeWidth={1.6} className="shrink-0" /> BUILT FOR A WORLD THAT’S MOVING FORWARD</div>
            <h1 id="hero-heading" className="hero-enter font-heading text-[clamp(2.65rem,6.1vw,5.45rem)] leading-[1.12] font-semibold tracking-[-.055em] text-[#0f432c] [animation-delay:80ms]">
              Become the Professional<br className="hidden sm:block" />
              <span className="relative mt-2 inline-block"><span className="relative z-10">the <span className="accent-text">AI Era</span> Demands.</span><svg aria-hidden="true" viewBox="0 0 340 16" className="absolute -bottom-3 left-[15%] h-4 w-[43%]" preserveAspectRatio="none"><path d="M3 12 Q150 -4 337 8" fill="none" stroke="#88d9a6" strokeWidth="5" strokeLinecap="round" /></svg></span>
            </h1>
            <p className="hero-enter mx-auto mt-10 max-w-[640px] text-[15px] leading-[1.85] text-[#5f7668] sm:text-[17px] [animation-delay:160ms]">Build deep technical expertise, integrate AI into how you think and work, and develop skills designed to compound throughout your career.</p>
            <div className="hero-enter mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row [animation-delay:240ms]">
              <Button onClick={showPrograms} className="h-13 w-full gap-6 rounded-full bg-[#12613d] px-7 text-sm text-white shadow-[0_6px_18px_#12613d18] hover:bg-[#1b8053] sm:w-auto">Explore programs <ArrowUpRight size={18} /></Button>
              <Button variant="outline" onClick={() => openPanel("Let’s talk")} className="h-13 w-full gap-4 rounded-full border-[#cbd7c8] bg-white/70 px-7 text-sm text-[#1f523b] hover:bg-[#ebf6e9] sm:w-auto">Request a callback <ArrowRight size={16} /></Button>
            </div>
            <div className="hero-enter mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-[#77887d] [animation-delay:300ms]"><span className="flex items-center gap-1.5"><Check size={13} className="text-[#479162]" /> Deep technical foundations</span><span className="h-1 w-1 rounded-full bg-[#b0c8b9]" aria-hidden="true" /><span className="flex items-center gap-1.5"><Check size={13} className="text-[#479162]" /> AI at every step</span></div>
            <div className="hero-enter mx-auto mt-16 grid max-w-[900px] gap-6 border-t border-[#d9e5d7] pt-8 text-left sm:mt-20 sm:grid-cols-3 sm:gap-8 [animation-delay:340ms]">
              {features.map(({ icon: Icon, label, text }) => <div key={label} className="flex items-start gap-3.5"><div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#d2e7ce] bg-[#eaf5e8]/80 text-[#46855d]"><Icon size={18} strokeWidth={1.5} /></div><div><h2 className="font-heading text-sm font-bold text-[#2e5644]">{label}</h2><p className="mt-1 text-xs leading-5 text-[#79897f]">{text}</p></div></div>)}
            </div>
          </div>
        </section>
        <section id="why-grow-dart" aria-labelledby="why-heading" className="relative isolate overflow-hidden border-t border-[#ddeadb] bg-[#f1f8ef] px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
          <div aria-hidden="true" className="pointer-events-none absolute -top-48 -right-48 -z-10 size-[600px] rounded-full bg-[#d3edce]/40 blur-3xl" />
          <div className="mx-auto max-w-[1168px]">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold tracking-[.2em] text-[#46855d]"><span className="size-1.5 rounded-full bg-[#42a365]" /> WHY GROW DART</p>
                <h2 id="why-heading" className="max-w-[720px] font-heading text-[clamp(2rem,3.4vw,3rem)] leading-[1.18] font-semibold tracking-[-.045em] text-[#0f432c]">Built different.<br className="sm:hidden" /> Designed to <span className="accent-text">grow.</span></h2>
                <p className="mt-4 text-[15px] leading-7 text-[#5f7668]">Four pillars. One purpose. A stronger professional you.</p>
              </div>
              <p className="max-w-[270px] border-l-2 border-[#97ceab] pl-4 text-[13px] leading-6 text-[#688372]">A learning experience that connects technical depth with the possibilities of AI.</p>
            </div>
            <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
              {differentiators.map(({ icon: Icon, title, eyebrow, text }, index) => (
                <article key={title} className="group flex flex-col rounded-2xl border border-[#d7e6d4] bg-[#fbfffa] p-6 shadow-[0_3px_10px_#23523d1f] transition duration-300 hover:-translate-y-1 hover:border-[#8dc4a1] hover:shadow-[0_12px_30px_#23523d14] motion-reduce:transform-none lg:p-7">
                  <div className="mb-9 flex items-center justify-between"><div className="flex size-12 items-center justify-center rounded-2xl border border-[#d5e9d1] bg-[#e9f5e7] text-[#3a7d5f]"><Icon size={23} strokeWidth={1.5} aria-hidden="true" /></div><span aria-hidden="true" className="font-heading text-xs font-medium text-[#90ac9a]">0{index + 1}</span></div>
                  <h3 className="font-heading text-[19px] leading-7 font-semibold tracking-[-.025em] text-[#1f4f39]">{title}</h3>
                  <p className="mt-4 flex-1 text-[13px] leading-[1.85] text-[#637d6d]">{text}</p>
                  <p className="mt-7 border-t border-[#e1edde] pt-4 text-[9px] leading-4 font-semibold tracking-[.12em] text-[#4a845f]">{eyebrow}</p>
                </article>
              ))}
            </div>
            <div className="mt-9 flex flex-col items-start justify-between gap-4 border-t border-[#d7e6d4] pt-6 sm:flex-row sm:items-center">
              <p className="flex items-center gap-2.5 text-[12px] text-[#5f7668]"><Sparkles size={15} className="text-[#478e61]" aria-hidden="true" /> Built around how you learn, think, and create.</p>
              <Button variant="link" onClick={showPrograms} className="h-auto gap-3 p-0 text-[12px] font-semibold text-[#2d5f48]">Find your next step <ArrowUpRight size={15} /></Button>
            </div>
          </div>
        </section>
        <Programs onEnquire={(course, category) => { openPanel("Let’s talk"); setCallbackCourse(course ?? ""); setCallbackCategory(category ?? "cohort"); }} />
        <HowItWorks onExplore={showPrograms} />
        <FaqAndBanner onExplore={showPrograms} />
      </main>
      <Footer />
      <Dialog open={panel !== null} onOpenChange={(open) => { if (!open) setPanel(null); }}>
        <DialogContent className="max-h-[90svh] overflow-y-auto rounded-none bg-[#fbfffa] p-6 sm:max-w-[560px] sm:p-8">
          {panel === "Let’s talk" ? <CallbackForm course={callbackCourse} category={callbackCategory} /> : <>
          <div className="mb-2 flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700"><Sparkles size={20} /></div>
          <DialogTitle className="font-heading text-2xl font-semibold leading-tight">{panel}</DialogTitle>
          <DialogDescription className="text-sm leading-7">{panel === "Programs" ? "Our learning programs are taking shape. Come back soon to explore pathways built around deep technical expertise and AI." : panel === "Blogs" ? "Fresh perspectives on technology, AI, and career growth are coming soon." : "A closer look at the Grow Dart learning experience is coming soon."}</DialogDescription>
          <Button onClick={() => setPanel(null)} className="mt-3 h-11 rounded-full">Back to exploring <ArrowRight className="ml-2" /></Button>
          </>}
        </DialogContent>
      </Dialog>
    </div>
  );
}
