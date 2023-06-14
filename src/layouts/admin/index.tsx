import React, { FC, ReactNode } from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer/Footer";
import { Routes, Route, Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
  extract?: string;
}

const Admin: FC<Props> = ({ children, extract }) => {
  document.documentElement.dir = "ltr";

  return (
    <div className={extract + " flex h-full w-full"}>
      <Sidebar open={true} />
      {/* Navbar & Main Content */}
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        {/* Main Content */}
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[260px]`}
        >
          {/* Routes */}
          <div className="h-full">
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
