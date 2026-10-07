import type { IconName } from "@/lib/site";

export function Icon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M4 12h15M13 6l6 6-6 6" />
      </>
    ),
    people: (
      <>
        <circle cx="12" cy="7" r="3" />
        <path d="M6 21v-3a6 6 0 0 1 12 0v3M4 9a2.5 2.5 0 1 0 0-5M20 9a2.5 2.5 0 1 1 0-5M2 19v-2a5 5 0 0 1 3-4.6M22 19v-2a5 5 0 0 0-3-4.6" />
      </>
    ),
    spark: (
      <>
        <path d="M9 19h6M10 22h4M8 13a6 6 0 1 1 8 0c-1.3 1-1.5 2-1.5 3.5h-5C9.5 15 9.3 14 8 13ZM12 1v1M2 7l1 .5M21 7l1-.5M3 15l1-.5M20 14.5l1 .5" />
      </>
    ),
    progress: (
      <>
        <path d="M3 21V13h4v8M10 21V8h4v13M17 21V3h4v18M2 21h20" />
      </>
    ),
    shield: (
      <>
        <path d="m12 2 9 4v6c0 5-6 9-9 10-3-1-9-5-9-10V6l9-4Z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M7 2v6M17 2v6M3 11h18M7 15h3M14 15h3M7 18h3" />
      </>
    ),
    server: (
      <>
        <rect x="3" y="3" width="18" height="7" rx="2" />
        <rect x="3" y="14" width="18" height="7" rx="2" />
        <path d="M7 6.5h.01M7 17.5h.01M12 6.5h5M12 17.5h5M12 10v4" />
      </>
    ),
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
  };
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
