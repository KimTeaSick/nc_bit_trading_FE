import CardMenu from "@/components/card/CardMenu";
import Checkbox from "@/components/checkbox";
import { MdDragIndicator, MdCheckCircle } from "react-icons/md";
import Card from "@/components/card";
import Chart from "@/components/Chart";
import ButtonSection from "@/components/CoinDetail/ButtonSection";

const DetailCard = () => {
  return (
    <Card extra="pb-7 p-[20px]">
      {/* task content */}
      <div className="h-full w-full">
        <Chart />
        <ButtonSection />
      </div>
    </Card>
  );
};

export default DetailCard;
