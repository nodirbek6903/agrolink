import { Card, Typography, Divider, Timeline } from "antd";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { HeartOutlined, ExperimentOutlined, CalendarOutlined } from "@ant-design/icons";

const { Title } = Typography;

const ProductivityStats = () => {
  // 🧮 1. Grafik uchun sut miqdori ma'lumotlari
  const milkData = [
    { oy: "May", sut: 16 },
    { oy: "Iyun", sut: 18 },
    { oy: "Iyul", sut: 20 },
    { oy: "Avgust", sut: 19 },
    { oy: "Sentyabr", sut: 21 },
    { oy: "Oktyabr", sut: 22 },
  ];

  // 📜 2. Sog‘liq tarixi (timeline)
  const healthHistory = [
    {
      date: "2025-03-12",
      title: "Emlash — Brutselloz",
      icon: <ExperimentOutlined />,
      color: "blue",
    },
    {
      date: "2025-06-10",
      title: "Vitamin B qo‘shildi",
      icon: <HeartOutlined />,
      color: "green",
    },
    {
      date: "2025-08-12",
      title: "Veterinar tekshiruvi — Sog‘lom",
      icon: <CalendarOutlined />,
      color: "purple",
    },
    {
      date: "2025-10-05",
      title: "Sut miqdori oshdi (22L/kun)",
      icon: <HeartOutlined />,
      color: "gold",
    },
  ];

  return (
    <Card bordered style={{ marginTop: 24 }}>
      <Title level={4}>📈 Mahsuldorlik statistikasi</Title>
      <p style={{ color: "#666" }}>
        Quyidagi grafikda so‘nggi oylar davomida sut ishlab chiqarish miqdori ko‘rsatilgan.
      </p>

      {/* Recharts grafik */}
      <div style={{ width: "100%", height: 250 }}>
        <ResponsiveContainer>
          <LineChart data={milkData} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="oy" />
            <YAxis label={{ value: "Sut (L/kun)", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Line type="monotone" dataKey="sut" stroke="#1890ff" strokeWidth={3} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <Divider />

      <Title level={4} style={{ marginTop: 16 }}>
        🩺 Sog‘lomlik tarixi
      </Title>
      <Timeline mode="left">
        {healthHistory.map((item, index) => (
          <Timeline.Item
            key={index}
            color={item.color}
            dot={item.icon}
            label={item.date}
          >
            {item.title}
          </Timeline.Item>
        ))}
      </Timeline>
    </Card>
  );
};

export default ProductivityStats;
