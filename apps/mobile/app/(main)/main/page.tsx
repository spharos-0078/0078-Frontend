import React from "react";
import AlertButton from "@/components/common/AlertButton";
import ItemCard from "@/components/common/ItemCard";
import Search from "@/components/common/Search";
export default function page() {
  return (
    <div>
      <Search />
      <AlertButton isActive={true} />
      <ItemCard />
    </div>
  );
}
