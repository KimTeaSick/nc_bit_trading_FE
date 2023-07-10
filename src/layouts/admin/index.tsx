import React, { FC, ReactNode, useEffect, useState } from "react";
import Navbar from "@/components/common/navbar";
import Sidebar from "@/components/common/sidebar";
import Footer from "@/components/common/footer/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import { getATStatus, useAutoStatus } from "@/pages/api/autotrading";
import { useDispatch } from "react-redux";

interface Props {
  children: ReactNode;
  extract?: string;
}

const Admin: FC<Props> = ({ children, extract }) => {
  const dispatch = useDispatch<any>();
  document.documentElement.dir = "ltr";
  useEffect(() => {
    dispatch(getATStatus());
  }, [dispatch]);
  const [open, setOpen] = useState(true);

  return (
    <div className={extract + " h-full w-[100vw]"}>
      <Sidebar open={open} onClose={setOpen} />
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[260px]`}
        >
          <div className="h-full ">
            <Navbar />
            {children}
            <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
              <Routes>
                <Route
                  path="/"
                  element={<Navigate to="/admin/default" replace />}
                />
              </Routes>
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
