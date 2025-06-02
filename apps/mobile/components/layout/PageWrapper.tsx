import { cn } from "@repo/ui/lib/utils";
import React from "react";

export default function PageWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("px-6 pt-6 space-y-5 pb-24", className)}>{children}</div>
  );
}
