import Widget from "@/components/widget/Widget";
import DetailCard from "./components/coindetailCard";
import { IoDocuments } from "react-icons/io5";
import Card from "@/components/card";
import tableDataTopCreators from "@/views/admin/coinlist/variables/tableDataTopCreators";
import HistoryCard from "./components/HistoryCard";
import TopCreatorTable from "./components/TableTopCreators";

const CoinDetail = () => {
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/*  Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            코인 상세페이지
          </h4>
        </div>

        {/*  trending card */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3 mb-3">
          <Widget
            icon={<IoDocuments className="h-6 w-6" />}
            title={""}
            subtitle={"ETC"}
          />
          <Widget
            icon={<IoDocuments className="h-6 w-6" />}
            title={""}
            subtitle={"하락"}
          />
          <Widget
            icon={<IoDocuments className="h-6 w-6" />}
            title={"금일 최고가 : 27,130원   금일 최저가 : 27,130원 "}
            subtitle={""}
          />
        </div>
        <div>
          <DetailCard />
        </div>
      </div>
    </div>
  );
};

export default CoinDetail;
