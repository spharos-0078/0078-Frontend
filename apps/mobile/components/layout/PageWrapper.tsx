import { cn } from "@repo/ui/lib/utils";
import React from "react";

export default function PageWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("p-6 space-y-5", className)}>{children}</div>;
}
