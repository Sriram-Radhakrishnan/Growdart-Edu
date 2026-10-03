"use client";

import { useEffect, useRef } from "react";
import { Check, ArrowUpRight } from "lucide-react";
import { ToolLogo } from "@/components/tool-logo";

const months = [
  { title: "Design, Web Foundations & Version Control", topics: ["Learn how websites and web apps work", "Explore UI/UX design principles", "Create wireframes and page layouts", "Set up your development environment", "Track changes and collaborate with Git"], tools: ["Figma", "Cursor", "Git", "GitHub", "ChatGPT", "FigJam"] },
  { title: "Programming Foundations", topics: ["Structure web pages with HTML", "Style responsive layouts with CSS", "Learn JavaScript programming fundamentals", "Add interactivity with DOM manipulation", "Build and publish your first website"], tools: ["HTML", "CSS", "JavaScript", "Chrome DevTools"] },
  { title: "Modern Frontend with React, TypeScript & Next.js", topics: ["Build reusable React components", "Manage application state and user interactions", "Write typed code with TypeScript", "Create pages and routes with Next.js", "Connect your frontend to APIs"], tools: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
  { title: "Databases & Advanced Backend Development", topics: ["Build backend services with Node.js", "Design databases and manage application data", "Create and test REST APIs", "Implement authentication and access control", "Handle validation, errors and API security"], tools: ["Node.js", "Express.js", "MongoDB", "Postman"] },
  { title: "Advanced AI & Agentic Applications", topics: ["Connect applications to AI models", "Build RAG workflows using your own data", "Create agents that use tools and APIs", "Automate workflows for business use cases", "Evaluate AI responses for accuracy and relevance"], tools: ["OpenAI API", "Gemini API", "Pinecone", "Vector Databases"] },
  { title: "Capstone, Portfolio Building & Deployment", topics: ["Plan your capstone around a real-world problem", "Build an end-to-end product with AI specialization", "Review, test and refine your application", "Deploy your capstone using modern deployment tools", "Create a portfolio showcasing your projects"], tools: ["Codex", "Claude Code", "GitHub", "Vercel"] },
];

export function CourseRoadmap() {
  const timeline = useRef<HTMLOListElement>(null);
  useEffect(() => {
    const list = timeline.current;
    if (!list || !window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rows = list.querySelectorAll<HTMLElement>(".roadmap-row");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12, rootMargin: "0px 0px -40px 0px" });
    list.classList.add("reveal-ready");
    rows.forEach(row => observer.observe(row));
    return () => { observer.disconnect(); list.classList.remove("reveal-ready"); };
  }, []);
  return <section id="course-roadmap" aria-labelledby="roadmap-heading" className="border-t border-[#d7e6d4] bg-[#f0f7ed] px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
    <div className="mx-auto max-w-[1168px]">
      <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold tracking-[.2em] text-[#46855d]"><span className="size-1.5 rounded-full bg-[#42a365]" /> YOUR COURSE ROADMAP</p>
      <h2 id="roadmap-heading" className="max-w-[850px] font-heading text-[clamp(2rem,3.4vw,3rem)] leading-[1.18] font-semibold tracking-[-.045em]">Your 6-Month Roadmap:<br/><span className="accent-text">From Web Foundations to AI Applications</span></h2>
      <p className="mt-5 max-w-[670px] text-[15px] leading-7 text-[#5f7668]">Build your skills step by step—from your first webpage to full-stack products and AI-powered business applications.</p>
      <ol ref={timeline} className="roadmap-timeline relative mt-12">
        {months.map(({title, topics, tools}, index) => <li key={title} className={`roadmap-row ${index % 2 === 0 ? "roadmap-left" : "roadmap-right"}`}>
          <span aria-hidden="true" className={`roadmap-marker relative z-10 flex size-12 items-center justify-center border font-heading text-sm font-semibold ${index === 5 ? "border-[#185b43] bg-[#185b43] text-white" : "border-[#b9d9b2] bg-[#f0f7ed] text-[#28734a]"}`}>0{index + 1}</span>
          <article className="roadmap-card border border-[#d7e6d4] bg-[#fbfffa] p-5 sm:p-8">
            <div className="flex items-start justify-between gap-4"><div><p className="mb-2 text-[10px] font-semibold tracking-[.17em] text-[#46855d]">MONTH {index + 1}</p><h3 className="max-w-[750px] font-heading text-xl leading-7 font-semibold tracking-tight text-[#133f34]">{title}</h3></div><ArrowUpRight aria-hidden="true" size={21} className="hidden shrink-0 text-[#42a365] sm:block" /></div>
            <ul className="mt-5 grid gap-y-3">{topics.map(topic => <li key={topic} className="flex items-start gap-2.5 text-[13px] leading-6 text-[#5f7668]"><Check aria-hidden="true" size={15} className="mt-1 shrink-0 text-[#28734a]"/>{topic}</li>)}</ul>
            <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-[#d7e6d4] pt-5"><span className="mr-2 text-[10px] font-semibold tracking-[.12em] text-[#46855d]">TOOLS</span>{tools.map(tool => <ToolLogo key={tool} name={tool} />)}</div>
          </article>
        </li>)}
      </ol>
    </div>
  </section>;
}
