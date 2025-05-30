import React from "react";

export default function Price({ price }: { price: number }) {
  return (
    <div className="text-xl font-bold text-black mt-2">
      {price.toLocaleString("ko-KR", {
        style: "currency",
        currency: "KRW",
      })}
    </div>
  );
}
