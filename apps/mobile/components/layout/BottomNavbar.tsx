import React from "react";
import Link from "next/link";

import CardIcon from "@repo/ui/Icons/CardIcon";
import ChartIcon from "@repo/ui/Icons/ChartIcon";
import HomeIcon from "@repo/ui/Icons/HomeIcon";
import MyPageIcon from "@repo/ui/Icons/MyPageIcon";

export default function BottomNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0A0A1A] h-20 flex items-center justify-between px-6 z-50">
      <div className="flex flex-1 justify-between max-w-[320px] mx-auto items-center">
        <Link href="/">
          <HomeIcon isActive={true} />
        </Link>
        <button className="flex flex-col items-center text-white/40">
          <Link href="/">
            <CardIcon />
          </Link>
        </button>
        <button className="relative -mt-8 bg-[#00FF88] rounded-full w-16 h-16 flex items-center justify-center shadow-lg border-4 border-[#0A0A1A]">
          <Link href="/">
            <HomeIcon isActive={true} />
          </Link>
        </button>
        {/* Stats */}
        <Link href="/">
          <ChartIcon />
        </Link>

        {/* Profile */}
        <Link href="/">
          <MyPageIcon />
        </Link>
      </div>
      {/* White bar (iOS style) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-32 h-2 rounded-full bg-white/20" />
    </nav>
  );
}
