import { useState, useEffect } from "react";
import {
  Layout,
  Avatar,
  Dropdown,
  Space,
  Badge,
  List,
  Typography,
  Switch,
  Tooltip,
} from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  BellOutlined,
  BulbOutlined,
  BulbFilled,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;
const { Text } = Typography;

const HeaderBar = () => {
  const navigate = useNavigate();
  const user =
    JSON.parse(localStorage.getItem("currentUser")) || {
      fullName: "Azizbek",
      role: "dehqon",
    };

  // 🌗 Dark/Light holati
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  // 🔔 Statik notificationlar
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Sug'orish eslatmasi",
      description: "Bugun soat 14:00 da 2-gektar paxta maydonini sug'oring.",
      read: false,
    },
    {
      id: 2,
      title: "Yangi xabar",
      description: "Jamiyatdan yangi xabar bor. Tekshiring.",
      read: false,
    },
    {
      id: 3,
      title: "Hisobot tayyor",
      description: "Moliyaviy hisobot tayyor. Ko'rib chiqing.",
      read: true,
    },
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleMarkAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  const goToProfile = () => {
    if(user?.role){
      navigate(`/${user?.role}/profile`)
    }
  }

  const profileMenu = [
    { key: "profile", label: "Profil",icon:<UserOutlined />, onClick: goToProfile },
    {
      key: "logout",
      label: "Chiqish",
      icon: <LogoutOutlined />,
      onClick: logout,
    },
  ];

  const notificationMenu = {
    items: [
      {
        key: "notifications",
        label: (
          <div style={{ width: 300 }}>
            <List
              dataSource={notifications}
              renderItem={(item) => (
                <List.Item
                  style={{
                    backgroundColor: item.read
                      ? isDark
                        ? "#262626"
                        : "#f6ffed"
                      : isDark
                      ? "#434343"
                      : "#e6fffb",
                    borderRadius: 8,
                    marginBottom: 8,
                    cursor: "pointer",
                  }}
                  onClick={() => handleMarkAsRead(item.id)}
                >
                  <List.Item.Meta
                    title={
                      <Text strong style={{ color: isDark ? "#fff" : "#000" }}>
                        {item.title}
                      </Text>
                    }
                    description={
                      <Text type="secondary" style={{ color: isDark ? "#ccc" : "" }}>
                        {item.description}
                      </Text>
                    }
                  />
                </List.Item>
              )}
            />
            {notifications.length === 0 && (
              <div
                style={{
                  textAlign: "center",
                  color: isDark ? "#999" : "#555",
                  padding: "8px 0",
                }}
              >
                Bildirishnomalar yo‘q
              </div>
            )}
          </div>
        ),
      },
    ],
  };

  return (
    <Header
      style={{
        background: isDark ? "#001529" : "#f6ffed",
        padding: "0 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: isDark ? "1px solid #141414" : "1px solid #d9f7be",
        transition: "all 0.3s ease",
      }}
    >
      {/* 🧩 Chapdagi sarlavha */}
      <h2
        className={`text-xl font-semibold ${
          isDark ? "text-white" : "text-green-700"
        }`}
      >
        Fermerlar platformasi
      </h2>

      <Space size="large" align="center">
        {/* 🌙 Dark/Light rejim */}
        <Tooltip
          title={isDark ? "Yorug‘ rejimga o‘tish" : "Qorong‘u rejimga o‘tish"}
        >
          <Switch
            checkedChildren={<BulbFilled />}
            unCheckedChildren={<BulbOutlined />}
            checked={isDark}
            onChange={() => setIsDark((prev) => !prev)}
          />
        </Tooltip>

        {/* 🔔 Bildirishnomalar */}
        <Dropdown
          menu={notificationMenu}
          placement="bottomRight"
          trigger={["click"]}
          arrow
        >
          <Badge count={unreadCount} offset={[-5, 5]}>
            <BellOutlined
              style={{
                fontSize: 22,
                color: isDark ? "#fff" : "#52c41a",
                cursor: "pointer",
              }}
            />
          </Badge>
        </Dropdown>

        {/* 👤 Foydalanuvchi menyusi */}
        <Dropdown
          menu={{ items: profileMenu }}
          placement="bottomRight"
          trigger={["click"]}
        >
          <Space className="cursor-pointer">
            <Avatar
              icon={<UserOutlined />}
              style={{
                backgroundColor: "#52c41a",
              }}
            />
            <span
              className={`font-medium ${
                isDark ? "text-white" : "text-green-700"
              }`}
            >
              {user.fullName}
            </span>
          </Space>
        </Dropdown>
      </Space>
    </Header>
  );
};

export default HeaderBar;
