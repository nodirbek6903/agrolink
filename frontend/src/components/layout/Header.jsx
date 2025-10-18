import { Button, Dropdown, Typography, Avatar } from "antd";
import { MenuOutlined, UserOutlined, DownOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const { Text } = Typography;

const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate()
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  const role = currentUser?.role

  const handleLogOut = () => {
    localStorage.removeItem("currentUser")
    localStorage.removeItem("token")
    navigate("/login")
  }

  const menuItems = [
    { key: "1", label: <Link to={`/${role}/profile`}>Profilim</Link> },
    { key: "2", label: <span onClick={handleLogOut} >Chiqish</span> },
  ];

  return (
    <div className="flex justify-between items-center w-full">
      {/* Chap qism */}
      <div className="flex items-center gap-3">
        <Button
          type="text"
          shape="circle"
          icon={<MenuOutlined />}
          onClick={toggleSidebar}
          className="transition-all duration-300"
          style={{color:"#15803d"}}
        />
        <Text className="text-xl font-semibold tracking-wide" style={{color:"#15803d"}}>
          AGRO AI
        </Text>
      </div>

      {/* O‘ng qism */}
      <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
        <div className="flex items-center gap-2 cursor-pointer">
          <Avatar
            size={38}
            icon={<UserOutlined />}
            style={{color:"#15803d",backgroundColor:"#dcfce7",borderColor:"#86efac"}}
          />
          <Text className="font-medium" style={{color:"#15803d"}}>{currentUser?.fullName}</Text>
          <DownOutlined className=" text-xs" style={{color:"#15803d"}} />
        </div>
      </Dropdown>
    </div>
  );
};

export default Header;
