"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  { slug: "job-tracker", title: "Job Application Tracker", difficulty: "Easy", description: "Build a dashboard to track job applications, interview dates, and application status. Add search, filters, and browser storage to keep everything organised.", alt: "Illustration of a job application dashboard with application cards and interview scheduling" },
  { slug: "appointment-booking", title: "Appointment Booking Platform", difficulty: "Medium", description: "Create a booking app for consultants, trainers, or local businesses. Include user login, available time slots, booking management, and an admin dashboard.", alt: "Illustration of an appointment calendar with available time slots and a booking confirmation" },
  { slug: "ai-support-desk", title: "AI-Powered Customer Support Desk", difficulty: "Medium", description: "Build a support portal that categorises tickets, summarises conversations, and drafts AI-assisted replies. Let support staff review responses and track ticket progress.", alt: "Illustration of a support inbox with customer conversations and an AI-assisted reply" },
  { slug: "knowledge-assistant", title: "Company Knowledge Assistant", difficulty: "Hard", description: "Create a RAG-powered assistant that answers questions from uploaded company documents. Include source citations, document updates, and role-based access.", alt: "Illustration of a knowledge assistant connecting chat answers to company documents and source citations" },
  { slug: "sales-insights", title: "AI-Powered Sales Insights Dashboard", difficulty: "Hard", description: "Build a dashboard that turns sales data into useful business insights. Add data uploads, interactive charts, and AI-generated summaries to help teams understand trends and plan their next steps.", alt: "Illustration of sales analytics charts, revenue metrics, and an AI-generated insight" },
];

export function CourseProjects() {
  const track = useRef<HTMLUListElement>(null);
  function scroll(direction: number) {
    const list = track.current;
    if (!list) return;
    const card = list.firstElementChild;
    const distance = (card?.getBoundingClientRect().width ?? 380) + 20;
    list.scrollBy({ left: direction * distance, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  return <section aria-labelledby="course-projects-heading" className="border-t border-[#d7e6d4] bg-[#f0f7ed] px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
    <div className="mx-auto max-w-[1168px]">
      <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold tracking-[.2em] text-[#46855d]"><span className="size-1.5 rounded-full bg-[#42a365]" /> YOUR IDEAS. WORKING PRODUCTS.</p>
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div><h2 id="course-projects-heading" className="max-w-[800px] font-heading text-[clamp(2rem,3.4vw,3rem)] leading-[1.18] font-semibold tracking-[-.045em]">Build Real Projects.<br/><span className="accent-text">Solve Real Problems.</span></h2><p className="mt-4 max-w-[680px] text-[15px] leading-7 text-[#5f7668]">Progress from interactive websites to AI-powered business applications with five portfolio projects.</p></div>
        <div className="flex shrink-0 gap-2"><Button variant="outline" size="icon" aria-label="Previous project" aria-controls="project-gallery" onClick={() => scroll(-1)} className="size-11 rounded-none border-[#b9d9b2] bg-[#fbfffa] text-[#28734a]"><ArrowLeft size={18}/></Button><Button variant="outline" size="icon" aria-label="Next project" aria-controls="project-gallery" onClick={() => scroll(1)} className="size-11 rounded-none border-[#b9d9b2] bg-[#fbfffa] text-[#28734a]"><ArrowRight size={18}/></Button></div>
      </div>
      <p className="mt-5 text-xs leading-6 text-[#6e8d79]">Example projects you can build during the program. You may work on these or similar projects.</p>
      <ul ref={track} id="project-gallery" tabIndex={0} aria-label="Example portfolio projects; scroll horizontally to explore" className="mt-7 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-5 outline-none [scrollbar-color:#42a365_#d7e6d4] focus-visible:ring-2 focus-visible:ring-[#28734a]">
        {projects.map(({slug,title,difficulty,description,alt}, index) => {
          const source = index < 4 ? `/images/projects/${index + 1}.png` : `/images/projects/${slug}.jpg`;
          return <li key={slug} className="project-showcase flex w-[90%] shrink-0 snap-start flex-col sm:w-[370px] lg:w-[390px]">
            <div className="project-mockup">
              <span aria-hidden="true" className="project-mockup-dots" />
              <div className="project-laptop">
                <div className="project-laptop-screen"><Image src={source} alt={alt} fill sizes="(max-width: 640px) 75vw, 340px" className="object-contain" /></div>
                <div aria-hidden="true" className="project-laptop-base" />
              </div>
              <div aria-hidden="true" className="project-phone">
                <div className="project-phone-screen"><Image src={source} alt="" fill sizes="110px" className="object-cover object-[24%_top]" /></div>
                <span className="project-phone-notch" />
              </div>
            </div>
            <div className="relative z-10 flex flex-1 flex-col px-6 pt-2 pb-7">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2"><span className="text-[10px] font-semibold tracking-[.14em] text-[#8aefb7]">PROJECT 0{index+1}</span><span className="rounded-full border border-[#5ed896]/40 bg-[#174f38] px-2.5 py-1 text-[10px] font-medium text-[#d2ffe3]">Difficulty: {difficulty}</span></div>
              <h3 className="font-heading text-[23px] leading-8 font-semibold tracking-tight text-white">{title}</h3>
              <p className="mt-3 text-[13px] leading-6 text-[#c4dfd2]">{description}</p>
            </div>
          </li>;
        })}
      </ul>
    </div>
  </section>;
}
