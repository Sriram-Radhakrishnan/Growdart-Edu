"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const stories = [
  { label: "LEARN FROM THE PEOPLE BUILDING IT", title: "Industry leaders. Real experience. Your classroom.", text: "Learn from people who are already leading in the industry. Go beyond the how to understand the why: the trade-offs, decisions, and engineering thinking behind real products.", note: "Practical perspective. Stronger technical judgment." },
  { label: "A PROCESS THAT TURNS LEARNING INTO GROWTH", title: "Learn it. Build it. Make it better.", text: "Growth comes from putting knowledge to work. Learn a concept, build with it, evaluate your approach, and use feedback to improve. Repeat the cycle with a stronger foundation every time.", note: "Learn → Build → Evaluate → Feedback → Grow" },
  { label: "YOUR PEOPLE, BEYOND THE PROGRAM", title: "The program is a chapter. Your community stays.", text: "Get lifelong community access to our dedicated Discord platform. Stay connected with fellow learners, exchange ideas, share what you’re building, and keep the conversation going as your career grows.", note: "Lifelong community access. A shared space to grow." },
];

function MentorVisual() {
  return <div className="relative h-full w-full overflow-hidden"><Image src="/images/industry-leaders-v2.jpg" alt="Technology mentor explaining software architecture to two learners" fill sizes="(min-width: 1024px) 520px, 480px" className="object-cover" /></div>;
}

function CycleVisual() {
  const labels = ["Learn", "Build", "Evaluate", "Feedback", "Grow"];
  return <div className="work-visual cycle-visual">
    <div className="visual-eyebrow"><span className="visual-dot"/> SMALL ITERATIONS. LASTING PROGRESS.</div>
    <div className="cycle-map"><svg viewBox="0 0 440 360" aria-hidden="true"><circle cx="220" cy="177" r="125" fill="none" stroke="#97c7a9" strokeWidth="1" strokeDasharray="4 6"/><circle cx="220" cy="177" r="85" fill="none" stroke="#cce3c8" strokeWidth="1"/>{[0,1,2,3,4].map(i=>{const angle=(i*72-90)*Math.PI/180;return <circle key={i} cx={220+125*Math.cos(angle)} cy={177+125*Math.sin(angle)} r="5" fill="#4b8b63"/>})}</svg><div className="cycle-center"><ImageMark/><strong>GROW</strong><span>One cycle at a time</span></div>{labels.map((label,i)=><div key={label} className={`cycle-stage cycle-stage-${i}`}><span>0{i+1}</span>{label}<ArrowRight size={13}/></div>)}</div>
    <div className="cycle-bottom"><Code2 size={17}/><p>Knowledge becomes skill<br/><strong>when you put it into practice.</strong></p></div>
    <div className="visual-footer">02 / THE WAY YOU GET BETTER <ArrowUpRight size={15}/></div>
  </div>;
}
function ImageMark() { return <svg width="35" height="35" viewBox="0 0 40 40" aria-hidden="true"><path d="M5 4Q26 1 36 8L31 35 22 19Z" fill="#53976c"/><path d="M6 32 20 16 13 37 17 23Z" fill="#105134"/></svg>; }

function CommunityVisual() {
  return <div className="relative h-full w-full overflow-hidden"><Image src="/images/connected-community-v2.jpg" alt="Developer collaborating with peers through an online technology community" fill sizes="(min-width: 1024px) 520px, 480px" className="object-cover" /></div>;
}
const visuals = [MentorVisual, CycleVisual, CommunityVisual];

export function HowItWorks({ onExplore }: { onExplore: () => void }) {
  const [active, setActive] = useState(0);
  const items = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const middle = window.innerHeight / 2;
      let nearest = 0, distance = Infinity;
      items.current.forEach((item,i) => { if (!item) return; const rect=item.getBoundingClientRect(); const delta=Math.abs(rect.top+rect.height/2-middle); if(delta<distance) {distance=delta;nearest=i;} });
      setActive(nearest); frame=0;
    };
    const schedule = () => { if (!frame) frame=requestAnimationFrame(update); };
    update(); window.addEventListener("scroll",schedule,{passive:true}); window.addEventListener("resize",schedule);
    return () => {window.removeEventListener("scroll",schedule);window.removeEventListener("resize",schedule);cancelAnimationFrame(frame);};
  },[]);
  return <section id="how-grow-dart-works" aria-labelledby="how-heading" className="how-section bg-[#f5faf4] px-6 pt-20 pb-12 sm:px-10 lg:px-14 lg:pt-24"><div className="mx-auto max-w-[1168px]">
    <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold tracking-[.2em] text-[#46855d]"><span className="size-1.5 rounded-full bg-[#42a365]"/> HOW GROW DART WORKS</p>
    <h2 id="how-heading" className="font-heading text-[clamp(2rem,3.4vw,3rem)] leading-[1.18] font-semibold tracking-[-.045em]">A better way to learn.<br/><span className="accent-text">A stronger way to grow.</span></h2>
    <p className="mt-5 max-w-[600px] text-[15px] leading-7 text-[#5f7668]">The right people, a practical process, and a community that grows with you.</p>
    <div className="how-story-grid mt-12">
      <div className="how-pinned" aria-hidden="true"><div className="how-visual-stack">{visuals.map((Visual,i)=><div key={i} className={`how-visual-slide ${active===i?"is-active":""}`}><Visual/></div>)}</div><div className="story-progress">{stories.map((_,i)=><span key={i} className={active===i?"is-active":""}/>)}<span className="story-counter">0{active+1} / 03</span></div></div>
      <div className="how-stories">{stories.map((story,i)=>{const Visual=visuals[i];return <article key={story.label} ref={el=>{items.current[i]=el;}} data-story={i} className={`how-story ${active===i?"is-active":""}`}><div className="how-mobile-visual" aria-hidden="true"><Visual/></div><div className="how-story-copy"><span className="story-number">0{i+1}</span><p className="mt-4 text-[10px] font-semibold tracking-[.15em] text-[#48875f]">{story.label}</p><h3 className="mt-4 font-heading text-[clamp(1.65rem,2.5vw,2.3rem)] leading-[1.25] font-semibold tracking-[-.035em]">{story.title}</h3><p className="mt-6 text-[14px] leading-7 text-[#637d6d]">{story.text}</p>{i===1 && <div className="mt-6 flex flex-wrap gap-2">{["Learn","Build","Evaluate","Feedback","Grow"].map((stage,j)=><span key={stage} className="border border-[#d1e5cd] bg-[#e8f4e6] px-3 py-2 text-[11px] text-[#376852]"><span className="mr-2 text-[#769a83]">0{j+1}</span>{stage}</span>)}</div>}<p className="mt-7 border-l-2 border-[#8dc6a2] pl-4 text-[12px] font-medium leading-6 text-[#41745d]">{story.note}</p>{i===2 && <Button variant="link" onClick={onExplore} className="mt-6 h-auto gap-3 p-0 text-[12px] text-[#2d5f48]">Find your place to grow <ArrowUpRight size={15}/></Button>}</div></article>})}</div>
    </div>
  </div></section>;
}


