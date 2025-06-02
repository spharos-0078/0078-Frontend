import PageWrapper from "@/components/layout/PageWrapper";
import Image from "next/image";
import BackButton from "@/components/common/BackButton";
import InfoCardLayout from "@/components/layout/InfoCardLayout";
import ClockIcon from "@repo/ui/Icons/ClockIcon";
import TempPriceIcon from "@repo/ui/Icons/TempPriceIcon";
import ProductTitleWrapper from "@/components/layout/ProductTitleWrapper";
import TabLayout from "@/components/layout/TabLayout";
// 헤더 컴포넌트
function Header({ title }: { title: string }) {
  return (
    <header className="flex items-center">
      <BackButton />
    </header>
  );
}

// 작품 카드 컴포넌트
function ArtworkCard({ imageUrl, title }: { imageUrl: string; title: string }) {
  return (
    <div className="mx-auto relative w-full">
      <ProductTitleWrapper className="text-xl text-white text-center">
        Girl with the Pearl Earring
      </ProductTitleWrapper>
      <div className="relative rounded-xl overflow-hidden w-full h-[60vh]">
        <Image
          src={imageUrl}
          alt={title}
          fill={true}
          className="object-contain"
        />
      </div>
    </div>
  );
}

// 가격 및 남은 시간 컴포넌트
function InfoCards() {
  return (
    <div className="flex justify-around gap-x-3">
      <InfoCardLayout
        className="h-12 border-white border-1"
        title="Highest Bid"
        value="15,800,000"
        icon={<TempPriceIcon />}
      />
      <InfoCardLayout
        className="h-12 border-white border-1"
        title="Time Left"
        value="2h 4m 52s"
        icon={<ClockIcon />}
      />
    </div>
  );
}

// 메인 페이지 컴포넌트
export default function FundingPage() {
  return (
    <PageWrapper>
      <Header title="Girl with the Pearl Earring" />
      <div>
        <ArtworkCard imageUrl="/example.png" title="KATSUSHIKA HOKUSAI" />
      </div>
      <InfoCards />
      <TabLayout tabs={["Details", "Owners", "Bids", "History"]}>
        <div>
          Lorem ipsum dolor sit amet, consectetur elit. Quisque non elit mauris.
          Cras euismod, Lorem ipsum metus ac finibus finibus, felis dui
          suscipit...
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur elit. Quisque non elit mauris.
          Cras euismod, assaLorem ipsum metus ac finibus finibus, felis dui
          suscipit...sadasdasda
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur elit. Quisque non elit mauris.
          Cras euismod, Lorem ipsum metus ac finibus finibus, felis dui
          suscipit...
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur elit. Quisque non elit mauris.
          Cras euismod, Lorem ipsum metus ac finibus finibus, felis dui
          suscipit...
        </div>
      </TabLayout>
    </PageWrapper>
  );
}
