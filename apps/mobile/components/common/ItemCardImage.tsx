import React from "react";
import Image from "next/image";

export default function ItemCardImage() {
  return (
    <div className="relative w-full h-40 rounded-t-xl">
      <Image
        src="https://previews.123rf.com/images/adrian1991/adrian19912109/adrian1991210900001/174101000-%EB%B3%84%EC%9D%B4-%EB%B9%9B%EB%82%98%EB%8A%94-%EB%B0%A4-%EB%B9%88%EC%84%BC%ED%8A%B8-%EB%B0%98-%EA%B3%A0%ED%9D%90-%EA%B7%B8%EB%A6%BC.jpg"
        alt="artwork"
        fill={true}
        objectFit="cover"
        objectPosition="top"
      />
      <div className="absolute top-3 left-4 bg-black/15 backdrop-blur-sm text-xs px-3 py-1 rounded-lg shadow text-white">
        <p className="text-center">
          남은 시간
          <br />
          18h : 32m : 04s
        </p>
      </div>
      <div className="absolute bottom-3 left-4 bg-custom-red text-white text-xs px-2 py-0.5 rounded shadow">
        Highest Bid
      </div>
    </div>
  );
}
