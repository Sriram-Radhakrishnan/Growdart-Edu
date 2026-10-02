"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  { question: "Who are Growdart programs for?", answer: "Our programs are designed for students, graduates, and professionals who want to build practical, industry-relevant skills." },
  { question: "Do I need prior experience?", answer: "Not always. Programs start with the fundamentals and progress toward advanced, real-world applications." },
  { question: "What will I learn?", answer: "You'll build strong technical foundations, practical skills, and learn how to use AI effectively in modern workflows." },
  { question: "Will I work on real projects?", answer: "Yes. Hands-on projects help you apply what you learn and build practical experience." },
  { question: "Can I stay connected after my program ends?", answer: "Yes. You’ll have lifelong community access to our dedicated Discord platform, where you can connect with fellow learners, exchange ideas, share projects, and keep growing together. This is community access; course content and learning resources follow the terms of your program." },
];

export function FaqAndBanner({ onExplore }: { onExplore: () => void }) {
  return <>
    <section id="faqs" aria-labelledby="faq-heading" className="border-t border-[#dbe8d9] bg-[#fbfffa] px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
      <div className="mx-auto grid max-w-[1168px] gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
        <div><p className="mb-4 flex items-center gap-2 text-[11px] font-semibold tracking-[.2em] text-[#46855d]"><span className="size-1.5 rounded-full bg-[#42a365]"/> A LITTLE MORE CLARITY</p><h2 id="faq-heading" className="font-heading text-[clamp(2rem,3.4vw,3rem)] leading-[1.18] font-semibold tracking-[-.045em]">Big ambitions.<br/><span className="accent-text">Good questions.</span></h2><p className="mt-5 max-w-xs text-[14px] leading-7 text-[#5f7668]">A few things you might want to know before taking your next step.</p><a href="mailto:hi@growdart.com" className="mt-7 inline-flex items-center gap-3 text-[12px] font-medium text-[#2d5f48] underline-offset-4 hover:underline">Still curious? Let’s talk <ArrowUpRight size={15}/></a></div>
        <Accordion defaultValue={["faq-0"]} className="border-t border-[#d7e6d4]">
          {faqs.map(({question,answer},i)=><AccordionItem key={question} value={`faq-${i}`} className="border-b border-[#d7e6d4]"><AccordionTrigger className="items-center gap-4 rounded-none py-6 text-[14px] font-medium leading-6 text-[#1f4f39] hover:no-underline sm:text-[15px]"><span className="text-[11px] text-[#75a085]">0{i+1}</span><span className="flex-1">{question}</span></AccordionTrigger><AccordionContent className="pb-6 pl-8 pr-7 text-[13px] leading-7 text-[#637d6d]">{answer}</AccordionContent></AccordionItem>)}
        </Accordion>
      </div>
    </section>
    <section aria-labelledby="next-step-heading" className="bg-[#fbfffa] px-6 pb-20 sm:px-10 lg:px-14">
      <div className="relative isolate mx-auto flex min-h-[260px] max-w-[1168px] flex-col items-center justify-center overflow-hidden border border-[#d7e8d4] px-6 py-10 text-center sm:min-h-[290px]">
        <Image src="/images/grow-next-step-banner.jpg" alt="" fill sizes="(min-width: 1280px) 1168px, 100vw" className="-z-10 object-cover"/>
        <div className="absolute inset-0 -z-10 bg-[#fbfffa]/60 sm:bg-transparent"/>
        <p className="mb-3 text-[10px] font-semibold tracking-[.18em] text-[#428059]">YOUR NEXT CHAPTER STARTS HERE</p>
        <h2 id="next-step-heading" className="max-w-[560px] font-heading text-[clamp(1.65rem,2.7vw,2.4rem)] leading-[1.22] font-semibold tracking-[-.035em]">Grow your skills.<br/>Build what comes next.</h2>
        <Button onClick={onExplore} className="mt-6 h-11 gap-4 rounded-none bg-[#12613d] px-7 text-xs text-white hover:bg-[#1b8053]">Explore programs <ArrowUpRight size={15}/></Button>
      </div>
    </section>
  </>;
}

export function Footer() {
  return <footer className="border-t border-[#d1e2cd] bg-[#e7f3e5] px-6 pt-14 pb-6 sm:px-10 lg:px-14"><div className="mx-auto max-w-[1168px]">
    <div className="grid gap-10 pb-12 md:grid-cols-[1.2fr_.65fr_1fr] md:gap-12">
      <div><Link href="/" aria-label="Grow Dart home"><Image src="/logo/light-png.png" alt="Grow Dart" width={946} height={147} className="h-auto w-[190px]"/></Link><p className="mt-5 max-w-[300px] text-[13px] leading-7 text-[#5d7f6a]">Technical depth. AI fluency. A community to grow with. Build skills for the professional you want to become.</p></div>
      <nav aria-label="Footer navigation"><h3 className="mb-5 text-[10px] font-semibold tracking-[.15em] text-[#366851]">EXPLORE</h3><div className="flex flex-col items-start gap-3.5 text-[12px] text-[#5d7f6a]"><a href="#why-grow-dart" className="hover:text-[#12613d]">Why Grow Dart</a><a href="#programs" className="hover:text-[#12613d]">Our programs</a><a href="#how-grow-dart-works" className="hover:text-[#12613d]">How Grow Dart works</a><a href="#faqs" className="hover:text-[#12613d]">FAQs</a></div></nav>
      <div><h3 className="mb-5 text-[10px] font-semibold tracking-[.15em] text-[#366851]">LET’S CONNECT</h3><a href="mailto:hi@growdart.com" className="inline-flex items-center gap-3 text-[13px] text-[#2d5f48] underline-offset-4 hover:underline"><Mail size={16} strokeWidth={1.5}/> hi@growdart.com</a><address className="mt-5 flex items-start gap-3 text-[12px] leading-6 text-[#5d7f6a] not-italic"><MapPin size={17} strokeWidth={1.5} className="mt-1 shrink-0"/><span>100,101 Municipal colony<br/>Thanjavur 613007</span></address></div>
    </div>
    <div className="flex flex-col justify-between gap-3 border-t border-[#cee0cb] pt-6 text-[10px] text-[#739580] sm:flex-row"><p>© 2026 Grow Dart. All rights reserved.</p><p>Learn. Build. Evaluate. Feedback. Grow.</p></div>
  </div></footer>;
}
