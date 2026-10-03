import Image from "next/image";
import { Database } from "lucide-react";

const logos: Record<string, string> = {
  Figma: "figma", Cursor: "cursor", Git: "git", GitHub: "github",
  ChatGPT: "openai-brand", FigJam: "figma", HTML: "html", CSS: "css",
  JavaScript: "javascript", "Chrome DevTools": "chrome", React: "react",
  TypeScript: "typescript", "Next.js": "nextjs", "Tailwind CSS": "tailwind",
  "Node.js": "nodejs", "Express.js": "express", MongoDB: "mongodb",
  Postman: "postman", "OpenAI API": "openai-brand", "Gemini API": "gemini",
  Pinecone: "pinecone", Codex: "openai-brand", "Claude Code": "claudecode", Vercel: "vercel",
};

export function ToolLogo({ name }: { name: string }) {
  return <span tabIndex={0} aria-label={name} className="group/tool relative inline-flex size-12 items-center justify-center border border-[#d7e6d4] bg-white outline-none transition-colors hover:border-[#42a365] focus-visible:ring-2 focus-visible:ring-[#28734a]">
    {logos[name] ? <Image src={`/logos/tools/${logos[name]}.svg`} alt="" width={26} height={26} className="size-[26px] object-contain" /> : <Database aria-hidden="true" size={26} className="text-[#28734a]" />}
    <span role="tooltip" className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 bg-[#133f34] px-3 py-1.5 text-[11px] whitespace-nowrap text-white opacity-0 transition-opacity group-hover/tool:opacity-100 group-focus/tool:opacity-100">{name}</span>
  </span>;
}
