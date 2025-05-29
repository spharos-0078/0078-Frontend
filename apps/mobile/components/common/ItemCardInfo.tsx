import React from "react";
import ProductTitle from "@/components/layout/ProductTitle";
import RemainingPieces from "@/components/common/RemainingPieces";
import Price from "@/components/layout/Price";
export default function ItemCardInfo() {
  return (
    <div className="p-4">
      <ProductTitle>Girl with the Pearl Earring</ProductTitle>
      <RemainingPieces remainingPieces={1} totalPieces={100} />
      <Price price={15800000} />
    </div>
  );
}
