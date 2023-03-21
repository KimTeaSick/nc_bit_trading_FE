import SideBar from "@/components/SideBar/SideBar";
import { Layout, PageWapper } from "@/styles/globalStyle";
import { FC, ReactNode } from "react";
import Header from "./Header";

interface LayoutComponentProps {
  children: ReactNode;
}

const LayoutComponent: FC<LayoutComponentProps> = ({ children }) => {
  return (
    <Layout>
      <Header />
      {/* <div className="sidebar_section">
        <SideBar />
      </div> */}
      <PageWapper>{children}</PageWapper>
    </Layout>
  );
};

export default LayoutComponent;
