import { useState } from "react";
import { Layout } from "antd";
import VerticalHeader from "./VerticalHeader";
import HorizontalHeader from "./Header";
import { Outlet } from "react-router-dom";

const { Sider, Header, Content } = Layout;

const MainLayout = ({ role }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="min-h-screen bg-[#f8fdf9] relative transition-all duration-300">
      <Header
        className="fixed top-0 left-0 right-0 z-50 shadow-sm border-b flex items-center px-6 justify-between"
        style={{
          height: 70,
          lineHeight: "70px",
          backgroundColor: "#e9f8ee",
          borderColor: "#cce9d6",
        }}
      >
        <HorizontalHeader toggleSidebar={toggleSidebar} />
      </Header>

      <Sider
        width={240}
        collapsed={collapsed}
        collapsedWidth={0}
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #d7f0dd",
          borderRadius: "16px",
          height: "78vh",
          overflowY: "auto",
        }}
        className={`fixed top-[85px] left-6 shadow-lg transition-all duration-300 ${
          collapsed
            ? "opacity-0 -translate-x-5 pointer-events-none"
            : "opacity-100 translate-x-0"
        }`}
      >
        <VerticalHeader role={role} />
      </Sider>

      <Content className="pt-[90px] px-8 pb-10 transition-all duration-300">
        <div className="max-w-[1400px] mx-auto mt-2">
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};

export default MainLayout;
