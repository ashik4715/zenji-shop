"use client";

import { useRef, useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export default function AccordionItem({ question, answer }: AccordionItemProps) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`border-l-2 transition-colors ${
        open ? "border-zenji-red" : "border-zenji-border"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 px-6 text-left hover:bg-zenji-dark/50 transition-colors"
      >
        <span className="font-mono text-sm uppercase text-white tracking-wider pr-4">
          {question}
        </span>
        <span className="text-zenji-red shrink-0 text-lg leading-none">
          {open ? "−" : "+"}
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? `${contentRef.current?.scrollHeight}px` : "0px" }}
      >
        <div className="px-6 pb-4 text-sm text-zenji-gray leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}
