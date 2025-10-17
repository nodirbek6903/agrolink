import { useState } from "react";
import { Form, Input, Button, Card, Typography, message } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { LockOutlined, PhoneOutlined } from "@ant-design/icons";

import PhoneConfirmation from "./PhoneConfirmation";
import ResetPassword from "./ResetPassword";

const { Title, Text } = Typography;

const Login = () => {
  const [step, setStep] = useState("login");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!/^\d{9}$/.test(phone)) {
      message.error("Iltimos 9 xonali telefon raqam kiriting (masalan 901234567).");
      return;
    }
    if (!password) {
      message.error("Parolni kiriting.");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const fullPhone = "+998" + phone;
    const user = users.find((u) => u.phone === fullPhone && u.password === password);
    if (!user) {
      message.error("Telefon raqam yoki parol noto'g'ri.");
      return;
    }

    localStorage.setItem("token", true);
    localStorage.setItem("currentUser", JSON.stringify(user));

    setStep("confirm"); // OTP bosqichiga o'tamiz
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
            <Title level={3} style={{ color: "#388e3c" }}>
              AGRO AI
            </Title>
            <Text type="secondary">Fermerlarni raqamli bog‘lovchi tizim</Text>
          </div>
          {
            step === "login" && (
              <Form layout="vertical" onFinish={handleLogin}>
            <Form.Item
              label="Telefon raqam"
              name="phone"
              rules={[{ required: true, message: "Telefon raqamni kiriting!" }]}
            >
              <Input
                addonBefore="+998"
                prefix={<PhoneOutlined />}
                value={phone}
                onChange={(e) => {
                  const v = e.target.value.replace(/\D/g, "");
                  if (v.length <= 9) setPhone(v);
                }}
                placeholder="90 123 45 67"
                maxLength={9}
              />
            </Form.Item>

            <Form.Item
              label="Parol"
              name="password"
              rules={[{ required: true, message: "Parolni kiriting!" }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Parol"
              />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              block
              className="mt-2 bg-green-600 hover:bg-green-700"
            >
              Kirish
            </Button>
            <Button type="link" onClick={() => setStep("reset")}>
              Parolni unutdingizmi?
            </Button>

            <div style={{ textAlign: "center", marginTop: 12 }}>
              <Text>
                Akkount {`yo'qmi?`} <Link to="/register">{`Ro'yxatdan o'tish`}</Link>
              </Text>
            </div>
          </Form>
            )
          }
          {
            step === "confirm" && (
              <PhoneConfirmation
              phone={"+998" + phone}
              onBack = {() => setStep("login")}
              onVerified={() => {
                message.success("Kirish muvaffaqqiyatli")
                const currentUser = JSON.parse(localStorage.getItem("currentUser"));
                if (currentUser?.role === "dehqon") navigate("/dehqon/dashboard");
                else if (currentUser?.role === "chorvador") navigate("/chorvador/dashboard");
                else navigate("/admin/dashboard");
              }}
              />
            )
          }
          {
            step === "reset" && (
              <ResetPassword
              onBack = {() => setStep("login")}
              onDone={() =>{
                message.info("Yangi parol bilan tizimga kiring")
                setStep("login")
              }}
              />
            )
          }
        </Card>
      </div>
  );
};

export default Login;
