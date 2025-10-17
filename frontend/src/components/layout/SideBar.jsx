import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  FieldNumberOutlined,
  FundOutlined,
  BgColorsOutlined,
  HomeOutlined,
  NotificationOutlined,
  SettingOutlined,
  TeamOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const { Sider } = Layout;

const Sidebar = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const role = currentUser?.role || "dehqon";
  const [collapsed, setCollapsed] = useState(false);

  const sidebarItems = {
    dehqon: [
      { key: "/dehqon/dashboard", icon: <DashboardOutlined />, label: "Dashboard" },
      { key: "/dehqon/fields", icon: <FieldNumberOutlined />, label: "Mening maydonlarim" },
      { key: "/dehqon/crops", icon: <FundOutlined />, label: "Ekinlar" },
      { key: "/dehqon/irrigation", icon: <BgColorsOutlined />, label: "Sug‘orish jadvali" },
      { key: "/dehqon/finance", icon: <HomeOutlined />, label: "Moliyaviy tahlil" },
      { key: "/dehqon/alerts", icon: <NotificationOutlined />, label: "Bildirishnomalar" },
      { key: "/dehqon/community", icon: <TeamOutlined />, label: "Jamiyat" },
      { key: "/dehqon/help", icon: <MessageOutlined />, label: "Yordam" },
    ],
    chorvador: [
      { key: "/chorvador/dashboard", icon: <DashboardOutlined />, label: "Dashboard" },
      { key: "/chorvador/animals", icon: <FieldNumberOutlined />, label: "Hayvonlar ro‘yxati" },
      { key: "/chorvador/feeding", icon: <FundOutlined />, label: "Rasion & Oziqlantirish" },
      { key: "/chorvador/health", icon: <BgColorsOutlined />, label: "Sog‘liq monitoringi" },
      { key: "/chorvador/finance", icon: <HomeOutlined />, label: "Moliyaviy tahlil" },
      { key: "/chorvador/alerts", icon: <NotificationOutlined />, label: "Bildirishnomalar" },
      { key: "/chorvador/community", icon: <TeamOutlined />, label: "Jamiyat" },
      { key: "/chorvador/help", icon: <MessageOutlined />, label: "Yordam" },
    ],
    admin: [
      { key: "/admin/dashboard", icon: <DashboardOutlined />, label: "Dashboard" },
      { key: "/admin/users", icon: <TeamOutlined />, label: "Foydalanuvchilar" },
      { key: "/admin/reports", icon: <FundOutlined />, label: "Hisobotlar" },
      { key: "/admin/settings", icon: <SettingOutlined />, label: "Sozlamalar" },
    ],
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{
        background: "#f6ffed",
        borderRight: "1px solid #d9f7be",
        height: "100vh",
      }}
    >
      <div className="flex items-center justify-center p-4 border-b border-green-200">
        <img
          src="/agrolink-logo2.png"
          alt="logo"
          className="w-10 h-10 mr-2"
        />
        {!collapsed && (
          <span className="text-lg font-bold text-green-700">AGRO AI</span>
        )}
      </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={["/dashboard"]}
        style={{ background: "#f6ffed" }}
        items={sidebarItems[role].map((item) => ({
          key: item.key,
          icon: item.icon,
          label: <Link to={item.key}>{item.label}</Link>,
        }))}
      />
    </Sider>
  );
};

export default Sidebar;
