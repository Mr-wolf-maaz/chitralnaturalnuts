import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "gold" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg" | "icon";
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading, children, disabled, ...props }, ref) => {
    const base = "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]";
    const variants = {
      primary: "bg-[#1B4332] text-white hover:bg-[#2D6A4F] shadow-sm hover:shadow-md",
      gold: "bg-[#D4AF37] text-[#0D2818] hover:bg-[#E8CC6A] shadow-sm hover:shadow-md font-semibold",
      outline: "border-2 border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white",
      ghost: "text-[#1B4332] hover:bg-[#1B4332]/10",
      destructive: "bg-red-500 text-white hover:bg-red-600",
    };
    const sizes = {
      sm: "text-sm px-4 py-2 rounded-sm gap-1.5",
      md: "text-sm px-6 py-2.5 rounded-sm gap-2",
      lg: "text-base px-8 py-3.5 rounded-sm gap-2",
      icon: "w-10 h-10 rounded-sm",
    };
    return (
      <button ref={ref} disabled={disabled || loading} className={cn(base, variants[variant], sizes[size], className)} {...props}>
        {loading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export { Button };
