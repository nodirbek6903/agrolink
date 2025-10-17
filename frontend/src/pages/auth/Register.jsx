import { useState } from "react";
import { Form, Input, Button, Select, message, Card, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined, PhoneOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { Option } = Select;

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const onFinish = (values) => {
    const { fullName, role, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      message.error("Parollar mos emas!");
      return;
    }

    if (!/^\d{9}$/.test(phone)) {
      message.error("Telefon raqam 9 ta raqamdan iborat bo'lishi kerak!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find((u) => u.phone === "+998" + phone);
    if (existingUser) {
      message.error(
        "Bu telefon raqam bilan foydalanuvchi allaqachon ro'yxatdan o'tgan!"
      );
      return;
    }

    const newUser = {
      fullName,
      role,
      phone: "+998" + phone,
      password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("token", true);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    message.success("Muvaffaqiyatli ro‘yxatdan o‘tildi!");
    setLoading(true);
    setTimeout(() => {
      if (role === "dehqon") navigate("/dehqon/dashboard");
      else if (role === "chorvador") navigate("/chorvador/dashboard");
      else navigate("/login");
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-green-50">
      <Card className="w-[400px] shadow-xl rounded-2xl p-6">
        <div className="text-center mb-6">
          <img
            src="./agrolink-logo2.png"
            alt="logo"
            className="w-20 mx-auto mb-2"
          />
          <Title level={3}>AGRO AI</Title>
          <Text type="secondary">{`Fermerlarni raqamli bog'lovchi tizim`}</Text>
        </div>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Ism va Familiya"
            name="fullName"
            rules={[{ required: true, message: "Ism va familiyani kiriting!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Ism va familiya" />
          </Form.Item>

          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: "Rolni tanlang!" }]}
          >
            <Select placeholder="Rolni tanlang">
              <Option value="dehqon">Dehqon</Option>
              <Option value="chorvador">Chorvador</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Telefon raqam"
            name="phone"
            rules={[{ required: true, message: "Telefon raqamni kiriting!" }]}
          >
            <Input
              addonBefore="+998"
              prefix={<PhoneOutlined />}
              placeholder="90 123 45 67"
              value={phone}
              onChange={(e) => {
                const v = e.target.value.replace(/\D/g, "");
                if (v.length <= 9) setPhone(v);
              }}
              maxLength={9}
            />
          </Form.Item>

          <Form.Item
            label="Parol"
            name="password"
            rules={[{ required: true, message: "Parolni kiriting!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Parol" />
          </Form.Item>

          <Form.Item
            label="Parolni tasdiqlash"
            name="confirmPassword"
            rules={[{ required: true, message: "Parolni qayta kiriting!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Parolni tasdiqlang"
            />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loading}
            className="mt-2 bg-green-600 hover:bg-green-700"
          >
            {`Ro'yxatdan o'tish`}
          </Button>
          <div style={{ textAlign: "center", marginTop: 12 }}>
            <Text>
              {`Akkountingiz bormi?`} <Link to="/login">Kirish</Link>
            </Text>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
