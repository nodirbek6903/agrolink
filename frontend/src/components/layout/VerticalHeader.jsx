import { Menu } from "antd";
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
import { Link, useLocation } from "react-router-dom";

const VerticalHeader = ({ role }) => {
  const location = useLocation();

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
    <div className="p-4">
      <div className="flex items-center mb-6">
        <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center">
          <span className="text-green-700 text-lg font-semibold">🌾</span>
        </div>
        <span className="ml-2 text-green-800 font-semibold text-lg">AGRO&nbsp;AI</span>
      </div>

      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={sidebarItems[role]?.map((item) => ({
          key: item.key,
          icon: <div style={{color:"#16a34a"}}>{item.icon}</div>,
          label: <Link to={item.key} style={{color:"#166534"}}>{item.label}</Link>,
        }))}
        style={{
          backgroundColor: "transparent",
          border: "none",
        }}
      />
    </div>
  );
};

export default VerticalHeader;
