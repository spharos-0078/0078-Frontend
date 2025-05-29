import React from "react";
import AlertButton from "@/components/common/AlertButton";
import ItemCard from "@/components/common/ItemCard";
export default function page() {
  return (
    <div>
      <ItemCard />
      <AlertButton isActive={true} />
    </div>
  );
}
