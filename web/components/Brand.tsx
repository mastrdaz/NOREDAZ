import { site } from "@/lib/site";

// Replaceable vector interpretation of the supplied ND direction, not a final master logo.
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 90"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M39 3H76a42 42 0 0 1 0 84H64L46 69h30a24 24 0 0 0 0-48H57L39 3Z"
        fill="var(--brand-purple)"
      />
      <path d="M4 87V3l87 84H65L21 43v44H4Z" fill="currentColor" />
      <path d="M32 87V62l25 25H32Z" fill="var(--brand-purple)" />
    </svg>
  );
}
export function Brand({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand ${light ? "brand-light" : ""}`}>
      <Monogram className="brand-mark" />
      <span className="brand-type">
        <span>{site.brand}</span>
        <span>{site.descriptor}</span>
      </span>
    </span>
  );
}
