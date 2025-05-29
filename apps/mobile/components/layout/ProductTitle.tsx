import React from "react";

export default function ProductTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="font-semibold text-lg text-black truncate">{children}</h3>
  );
}
