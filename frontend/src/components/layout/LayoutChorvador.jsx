import { Layout } from "antd";
import Sidebar from "./Sidebar";
import HeaderBar from "./Header";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const LayoutChorvador = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar role="chorvador" />
      <Layout>
        <HeaderBar />
        <Content style={{ margin: "16px", background: "#fff", padding: "16px", borderRadius: "8px" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutChorvador;
