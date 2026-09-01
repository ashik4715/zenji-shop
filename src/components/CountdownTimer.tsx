"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(target: string): TimeLeft {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const blocks = [
    { value: timeLeft.days, label: "DAYS" },
    { value: timeLeft.hours, label: "HOURS" },
    { value: timeLeft.minutes, label: "MINUTES" },
    { value: timeLeft.seconds, label: "SECONDS" },
  ];

  return (
    <div className="flex gap-4">
      {blocks.map((block) => (
        <div
          key={block.label}
          className="flex flex-col items-center border border-zenji-red px-4 py-3 min-w-[70px]"
        >
          <span className="font-display text-3xl md:text-4xl text-white leading-none">
            {String(block.value).padStart(2, "0")}
          </span>
          <span className="font-mono text-[10px] uppercase text-zenji-gray mt-2 tracking-widest">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
}
