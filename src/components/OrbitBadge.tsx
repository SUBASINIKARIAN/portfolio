import { ArrowUpRight } from "lucide-react";

export default function OrbitBadge({ words }: { words: string }) {
  return (
    <div className="relative flex h-24 w-24 shrink-0 items-center justify-center sm:h-28 sm:w-28">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full animate-[spin_16s_linear_infinite]"
      >
        <defs>
          <path
            id="orbit-path"
            d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
            fill="none"
          />
        </defs>
        <text
          fill="var(--muted)"
          fontSize="6.5"
          letterSpacing="2"
          className="uppercase"
        >
          <textPath href="#orbit-path">{words}</textPath>
        </text>
      </svg>
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background">
        <ArrowUpRight size={16} />
      </span>
    </div>
  );
}
