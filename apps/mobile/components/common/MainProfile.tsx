import React from "react";
import Image from "next/image";

export default function MainProfile({
  isLoggedIn,
  userName,
  userImageUrl,
}: {
  isLoggedIn: boolean;
  userName?: string;
  userImageUrl?: string;
}) {
  return (
    <div className="flex items-center space-x-3">
      {isLoggedIn ? (
        <>
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={userImageUrl || ""}
              alt="프로필 이미지"
              fill={true}
              objectFit="cover"
            />
          </div>
          <div>
            <div className="text-xs text-gray-400">Good Morning!</div>
            <div className="text-base font-semibold">{userName}</div>
          </div>
        </>
      ) : (
        <div className="text-base font-semibold text-gray-500">
          로그인을 해주세요!
        </div>
      )}
    </div>
  );
}
