import SideBar from "@/components/SideBar/SideBar";
import { Layout, PageWapper } from "@/styles/globalStyle";
import { FC, ReactNode } from "react";

interface LayoutComponentProps {
  children: ReactNode;
}

const LayoutComponent: FC<LayoutComponentProps> = ({ children }) => {
  return (
    <Layout>
      <div className="sidebar_section">
        <SideBar />
      </div>
      <PageWapper>{children}</PageWapper>
    </Layout>
  );
};

export default LayoutComponent;
