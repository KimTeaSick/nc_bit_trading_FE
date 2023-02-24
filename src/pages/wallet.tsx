import LayoutComponent from "@/components/common/Layout";
import WalletPage from "@/components/Wallet/WalletPage";
import { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageActive } from "@/module/common";
import { getBalance } from "./api/walletAPIs";

const Wallet: NextPage = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(setPageActive("Wallet"));
    dispatch(getBalance());
  }, [dispatch]);

  return (
    <LayoutComponent>
      <WalletPage />
    </LayoutComponent>
  );
};

export default Wallet;
