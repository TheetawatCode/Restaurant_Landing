import React from "react";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionTitle({ eyebrow, title, description, className }: Props) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-widest text-olive uppercase">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mt-2 font-display text-3xl leading-tight text-zinc-900 sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-3 text-base leading-relaxed text-zinc-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}