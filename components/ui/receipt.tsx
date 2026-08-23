import { cn } from "@/lib/utils";

export function ReceiptLine({
  label,
  value,
  dark = false,
  strong = false,
}: {
  label: string;
  value: string;
  dark?: boolean;
  strong?: boolean;
}) {
  return (
    <div
      className={cn(
        "group/line -mx-2 flex items-baseline gap-3 rounded-sm px-2 py-1 transition-colors duration-200 hover:bg-ink/[0.05]",
      )}
    >
      <span
        className={cn(
          "font-mono text-[13px]",
          strong ? "font-bold" : "text-graphite",
          dark && "text-paper-shade",
        )}
      >
        {label}
      </span>
      <span className={cn("dots flex-1", dark && "dots-light")} aria-hidden />
      <span
        className={cn(
          "font-mono text-[13px] whitespace-nowrap",
          strong ? "text-ledger font-bold" : "text-ink",
          dark && strong && "text-paper",
        )}
      >
        {value}
      </span>
    </div>
  );
}

export function Stamp({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "stamp-mark inline-block px-3 py-1 text-[11px] font-bold",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Barcode({ serial, dark = false }: { serial: string; dark?: boolean }) {
  return (
    <div className="inline-flex flex-col items-center gap-1.5">
      <div
        className={cn("barcode w-full", dark && "barcode-dark")}
        aria-hidden
      />
      <span
        className={cn(
          "font-mono text-[10px] tracking-[0.4em]",
          dark ? "text-paper/70" : "text-ink",
        )}
      >
        {serial}
      </span>
    </div>
  );
}

/** Dashed tear line separating paper slips */
export function PerfSeam({ className }: { className?: string }) {
  return <div className={cn("perf-seam mx-auto max-w-7xl", className)} aria-hidden />;
}
