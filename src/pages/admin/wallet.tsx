import LayoutComponent from "@/components/common/Layout";
import WalletPage from "@/components/Wallet/WalletPage";
import MyWallet from "@/views/admin/mywallet/index";
import { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageActive } from "@/module/common";
import { getBalance, getProperty } from "../api/walletAPIs";
import { RootStateType } from "@/module/rootReducer.d";
import Loading from "@/components/common/Loading";
import Admin from "@/layouts/admin";

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
    <Admin>
      {myPropertyState && balanceState === "Loading" ? (
        <div className="flex h-screen items-center justify-center">
          <Loading />
        </div>
      ) : (
        <MyWallet />
      )}
    </Admin>
  );
};

export default Wallet;
