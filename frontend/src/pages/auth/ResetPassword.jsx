import { useState } from "react";
import { Input, Button, message, Typography } from "antd";

const { Text } = Typography;

 function ResetPassword({ onBack, onDone }) {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpInput, setOtpInput] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");

  const sendCode = () => {
    if (!/^\d{9}$/.test(phone)) {
      message.error("Telefon raqamni to'g'ri kiriting!");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.phone === "+998" + phone);
    if(!user){
        message.error("Bunday foydalanuvchi yo'q.");
        return
    }
    const code = String(Math.floor(10000 + Math.random() * 90000));
    setOtp(code);
    message.success(`Simulated SMS yuborildi: ${code}`);
    setStep(2);
  };

  const verifyCode = () => {
    if (otpInput !== otp) {
      message.error("Kod noto'g'ri!");
      return;
    }
    setStep(3);
  };

  const savePassword = () => {
    if (newPass !== confirm) {
      message.error("Parollar mos emas!");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const idx = users.findIndex((u) => u.phone === "+998" + phone);
    if (idx === -1) return message.error("Bunday foydalanuvchi yo'q.");
    users[idx].password = newPass;
    localStorage.setItem("users", JSON.stringify(users));
    message.success("Parol yangilandi!");
    onDone?.();
  };

  return (
    <>
      {step === 1 && (
        <>
          <Text>Telefon raqamingizni kiriting</Text>
          <Input
            addonBefore="+998"
            value={phone}
            onChange={(e) => {
              const v = e.target.value.replace(/\D/g, "");
              if (v.length <= 9) setPhone(v);
            }}
            style={{ marginTop: 8, marginBottom: 12 }}
          />
          <div className="flex justify-between">
            <Button onClick={onBack}>Orqaga</Button>
            <Button type="primary" onClick={sendCode}>
              Kod yuborish
            </Button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <Text>Kodni kiriting</Text>
          <Input
            value={otpInput}
            onChange={(e) => setOtpInput(e.target.value.replace(/\D/g, ""))}
            style={{ marginTop: 8, marginBottom: 12 }}
            maxLength={5}
          />
          <div className="flex justify-between">
            <Button onClick={() => setStep(1)}>Orqaga</Button>
            <Button type="primary" onClick={verifyCode}>Tasdiqlash</Button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <Text>Yangi parolni kiriting</Text>
          <Input.Password
            placeholder="Yangi parol"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
            style={{ marginTop: 8, marginBottom: 8 }}
          />
          <Input.Password
            placeholder="Parolni tasdiqlang"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            style={{ marginBottom: 12 }}
          />
          <div className="flex justify-between">
            <Button onClick={onBack}>Bekor qilish</Button>
            <Button type="primary" onClick={savePassword}>Saqlash</Button>
          </div>
        </>
      )}
    </>
  );
}

export default ResetPassword;
