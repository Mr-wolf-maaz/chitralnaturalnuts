import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "gold" | "green" | "red" | "outline";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  const variants = {
    default: "bg-gray-100 text-gray-700",
    gold: "bg-[#D4AF37]/20 text-[#A8892B] border border-[#D4AF37]/30",
    green: "bg-[#1B4332]/10 text-[#1B4332] border border-[#1B4332]/20",
    red: "bg-red-100 text-red-700 border border-red-200",
    outline: "border border-gray-300 text-gray-600",
  };
  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-semibold tracking-wider uppercase", variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
