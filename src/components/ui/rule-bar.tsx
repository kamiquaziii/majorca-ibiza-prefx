import { type ReactNode } from "react";

export function RuleBar({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rule-line border-y py-3 ${className}`}>{children}</div>
  );
}
