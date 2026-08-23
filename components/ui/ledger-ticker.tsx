import { cn } from "@/lib/utils";

const entries = [
  { text: "+38% revenue per visitor", gain: true },
  { text: "$2,340 avg. carts recovered / mo", gain: true },
  { text: "0.9s median store load", gain: true },
  { text: "3.2x campaign ROAS", gain: true },
  { text: "+64% mobile sales", gain: true },
  { text: "98 avg. PageSpeed score", gain: true },
];

export default function LedgerTicker({ className }: { className?: string }) {
  const items = [...entries, ...entries];

  return (
    <div className={cn("ticker-mask overflow-hidden py-4", className)}>
      <div className="ticker-track flex w-max items-center gap-10 pr-10">
        {items.map((entry, i) => (
          <span
            key={i}
            className="flex items-baseline gap-2 whitespace-nowrap font-mono text-[13px] tracking-wide"
          >
            <span className="text-ledger-light font-bold">↑</span>
            <span className="font-bold text-paper">{entry.text}</span>
            <span className="ml-6 text-paper/30" aria-hidden>
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
