import React from "react";
import Button from "@repo/ui/Button";
import BottomNavbar from "@/components/layout/BottomNavbar";
import AlertButton from "@/components/common/AlertButton";
export default function page() {
  return (
    <div>
      <div className="bg-custom-red-1000">
        page
        <p>aa</p>
      </div>
      <Button />
      <AlertButton isActive={true} />
      <BottomNavbar />
    </div>
  );
}
