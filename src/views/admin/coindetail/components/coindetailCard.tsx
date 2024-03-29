import Card from "@/components/common/card";
import Chart from "@/components/common/Chart";
import ButtonSection from "./ButtonSection";

const DetailCard = () => {
  return (
    <Card extra="pb-7 p-[20px]">
      <div className="h-full w-full">
        <Chart />
        <ButtonSection />
      </div>
    </Card>
  );
};

export default DetailCard;
