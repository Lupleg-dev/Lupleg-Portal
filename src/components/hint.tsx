"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface HintProps {
  children: React.ReactNode;
  label: string;
  side?: "left" | "right" | "top" | "bottom";
  align?: "start" | "center" | "end";
}

export const Hint = ({ children, label, side, align }: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          className="bg-black text-white border border-white/5"
        >
          <p className="font-medium text-xm">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
