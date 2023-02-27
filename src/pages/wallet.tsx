import LayoutComponent from "@/components/common/Layout";
import WalletPage from "@/components/Wallet/WalletPage";
import { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageActive } from "@/module/common";
import { getBalance, getProperty } from "./api/walletAPIs";
import { RootStateType } from "@/module/rootReducer.d";
import Loading from "@/components/common/Loading";

const Wallet: NextPage = () => {
  const dispatch = useDispatch<any>();
  const { myPropertyState, balanceState } = useSelector(
    (state: RootStateType) => state.wallet
  );
  useEffect(() => {
    dispatch(setPageActive("Wallet"));
    dispatch(getBalance());
    dispatch(getProperty());
  }, [dispatch]);

  return (
    <LayoutComponent>
      {myPropertyState && balanceState === "Loading" ? (
        <Loading />
      ) : (
        <WalletPage />
      )}
    </LayoutComponent>
  );
};

export default Wallet;
