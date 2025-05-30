"use client";

import { useState } from "react";

// 헤더 컴포넌트
function Header({ title }: { title: string }) {
  return (
    <div className="flex items-center p-4">
      <button className="mr-2">
        <span className="material-icons text-white">arrow_back</span>
      </button>
      <h1 className="text-white text-lg font-semibold mx-auto">{title}</h1>
    </div>
  );
}

// 작품 카드 컴포넌트
function ArtworkCard({
  imageUrl,
  title,
  subtitle,
}: {
  imageUrl: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex justify-center p-4">
      <div className="bg-white rounded-xl overflow-hidden w-80">
        <img src={imageUrl} alt={title} className="w-full h-80 object-cover" />
        <div className="p-4">
          <div className="text-center font-bold">{title}</div>
          <div className="text-center text-xs text-gray-500">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

// 판매자 정보 컴포넌트
function SellerInfo({
  name,
  description,
  avatarUrl,
  isVerified,
}: {
  name: string;
  description: string;
  avatarUrl: string;
  isVerified?: boolean;
}) {
  return (
    <div className="flex items-center bg-black px-4 py-2">
      <img src={avatarUrl} alt={name} className="w-10 h-10 rounded-full mr-3" />
      <div>
        <div className="flex items-center">
          <span className="text-white font-semibold">{name}</span>
          {isVerified && (
            <span className="ml-1 text-blue-500 material-icons text-sm">
              check_circle
            </span>
          )}
        </div>
        <div className="text-xs text-gray-400">{description}</div>
      </div>
      <button className="ml-auto">
        <span className="material-icons text-white">bookmark_border</span>
      </button>
    </div>
  );
}

// 결제 버튼 컴포넌트
function CheckoutButton() {
  return (
    <div className="px-4 mt-2">
      <button className="w-full bg-green-400 text-black font-semibold py-3 rounded-full text-lg shadow">
        Checkout
      </button>
    </div>
  );
}

// 가격 및 남은 시간 컴포넌트
function PriceInfo({ price, timeLeft }: { price: string; timeLeft: string }) {
  return (
    <div className="flex justify-between px-8 py-4 text-white text-lg font-bold">
      <div>{price}</div>
      <div>{timeLeft}</div>
    </div>
  );
}

// 탭 메뉴 컴포넌트
function TabMenu({
  tabs,
  selected,
  onSelect,
}: {
  tabs: string[];
  selected: number;
  onSelect: (idx: number) => void;
}) {
  return (
    <div className="flex border-b border-gray-700 px-4">
      {tabs.map((tab, idx) => (
        <button
          key={tab}
          className={`flex-1 py-2 text-center ${selected === idx ? "text-white border-b-2 border-white" : "text-gray-500"}`}
          onClick={() => onSelect(idx)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

// 탭 컨텐츠 컴포넌트
function TabContent({ children }: { children: React.ReactNode }) {
  return <div className="px-4 py-3 text-white text-sm">{children}</div>;
}

// 메인 페이지 컴포넌트
export default function FundingPage() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="bg-black min-h-screen">
      <Header title="Girl with the Pearl Earring" />
      <ArtworkCard
        imageUrl="/sample-art.jpg"
        title="KATSUSHIKA HOKUSAI"
        subtitle="JAPANESE ARTIST, PAINTER AND PRINTMAKER"
      />
      <SellerInfo
        name="Richard Sanchez"
        description="The best of Picture in one place"
        avatarUrl="/sample-avatar.jpg"
        isVerified
      />
      <CheckoutButton />
      <PriceInfo price="15,800,000" timeLeft="21h 41m 52s" />
      <TabMenu
        tabs={["Details", "Owners", "Bids", "History"]}
        selected={selectedTab}
        onSelect={setSelectedTab}
      />
      <TabContent>
        {selectedTab === 0 && (
          <div>
            Lorem ipsum dolor sit amet, consectetur elit. Quisque non elit
            mauris. Cras euismod, Lorem ipsum metus ac finibus finibus, felis
            dui suscipit...
          </div>
        )}
        {selectedTab === 1 && <div>Owners content...</div>}
        {selectedTab === 2 && <div>Bids content...</div>}
        {selectedTab === 3 && <div>History content...</div>}
      </TabContent>
    </div>
  );
}
