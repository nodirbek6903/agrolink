import { useEffect, useState } from "react";
import { Input, Button, Typography, message } from "antd";

const { Text } = Typography;

function genOtp5() {
  return String(Math.floor(10000 + Math.random() * 90000));
}

 function PhoneConfirmation({ phone, onBack, onVerified }) {
  const [codeInput, setCodeInput] = useState("");
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);

  const sendOtp = () => {
    if (!phone) return;
    const code = genOtp5();
    setOtp(code);
    setTimeLeft(30);
    message.success(`Simulated SMS yuborildi: ${code}`);
  };

  useEffect(() => {
    if (timeLeft === 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    sendOtp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phone]);

  const handleVerify = () => {
    if (codeInput === otp) {
      message.success("Kod to'g'ri!");
      onVerified?.();
    } else {
      message.error("Kod noto'g'ri.");
    }
  };

  const handleResend = () => {
    sendOtp();
    setCodeInput("");
  };

  return (
    <>
      <Text>
        Biz {phone} raqamiga 5 xonali tasdiqlash kodi yubordik. {timeLeft > 0 ? `Kodni kiriting ${timeLeft} sekund.` : "Kodni olmagan bo‘lsangiz, qayta yuboring."}
      </Text>
      <Input
        placeholder="Kodni kiriting"
        value={codeInput}
        onChange={(e) => {
          const v = e.target.value.replace(/\D/g, "");
          if (v.length <= 5) setCodeInput(v);
        }}
        maxLength={5}
        style={{ marginTop: 10 }}
      />
      <div className="flex justify-between mt-4">
        <Button onClick={onBack}>Orqaga</Button>
        {timeLeft === 0 ? (
          <Button type="primary" onClick={handleResend}>Qayta yuborish</Button>
        ) : (
          <Button type="primary" onClick={handleVerify}>
            Tasdiqlash
          </Button>
        )}
      </div>
    </>
  );
}

export default PhoneConfirmation;
