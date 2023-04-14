import DisparityOption from "./components/\bdisparityOption";
import TradingOption from "./components/TradingOption";
import TrendOption from "./components/TrendOption";

const Marketplace = () => {
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/* Header */}
        <div className="mb-4 mt-5 flex flex-row justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            내 지갑 현황
          </h4>
        </div>

        {/* trending card */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          <DisparityOption />
          <TrendOption />
          <TradingOption />
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
