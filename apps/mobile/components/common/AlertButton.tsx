import React from "react";
import AlertIcon from "@repo/ui/Icons/AlertIcon";

export default function AlertButton({
  isActive = false,
}: {
  isActive?: boolean;
}) {
  return (
    <div className="relative w-[52px] h-[53px] flex items-center justify-center bg-[#00FC83] rounded-full">
      <AlertIcon />
      {isActive && (
        <span className="absolute top-0 right-0 w-4 h-4 bg-[#FF3E41] rounded-full border-2 border-white" />
      )}
    </div>
  );
}
