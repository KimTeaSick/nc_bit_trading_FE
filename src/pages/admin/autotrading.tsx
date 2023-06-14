import AutoTradingPage from "@/components/autoTrading/index";
import Admin from "@/layouts/admin";

const AutoTrading = () => {
  return (
    <Admin extract="overflow-hidden">
      <AutoTradingPage />
    </Admin>
  );
};

export default AutoTrading;
