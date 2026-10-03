"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
const links = ["Why Grow Dart", "Programs", "How Grow Dart Works", "FAQs"];
const targets: Record<string,string> = {"Why Grow Dart":"why-grow-dart",Programs:"programs","How Grow Dart Works":"how-grow-dart-works",FAQs:"faqs"};
export function SiteHeader({onEnquire,onNavigate}:{onEnquire:()=>void;onNavigate?:(name:string)=>void}) {
const router=useRouter();
const [menuOpen,setMenuOpen]=useState(false);
const navigate=(name:string)=>{setMenuOpen(false);if(onNavigate)onNavigate(name);else router.push("/#"+targets[name]);};
return (      <header className="relative z-20 mx-auto flex h-24 max-w-[1280px] items-center justify-between gap-8 px-6 sm:px-10 lg:px-14">
        <Link href="/" aria-label="Grow Dart home" className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-emerald-700">
          <Image src="/logo/light-png.png" alt="Grow Dart" width={946} height={147} className="h-auto w-[168px] sm:w-[190px]" priority />
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => <button key={link} onClick={() => navigate(link)} className="nav-link flex items-center gap-1.5 text-[13px] font-medium text-[#446255]">{link}{link === "Programs" && <ChevronDown size={13} />}</button>)}
        </nav>
        <Button onClick={() => onEnquire()} className="hidden h-10 rounded-full bg-[#0a5533] px-5 text-[13px] text-white hover:bg-[#11784a] lg:inline-flex">Let’s talk <ArrowUpRight size={15} className="ml-2" /></Button>
        <Button variant="ghost" size="icon" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">{menuOpen ? <X /> : <Menu />}</Button>
        {menuOpen && <nav id="mobile-menu" aria-label="Mobile navigation" className="absolute top-20 right-6 left-6 flex flex-col gap-1 rounded-2xl border bg-white p-4 shadow-xl lg:hidden">{links.map((link) => <button key={link} onClick={() => navigate(link)} className="rounded-lg px-4 py-3 text-left text-sm hover:bg-emerald-50">{link}</button>)}<Button className="mt-2" onClick={() => onEnquire()}>Let’s talk <ArrowUpRight /></Button></nav>}
      </header>);
}
