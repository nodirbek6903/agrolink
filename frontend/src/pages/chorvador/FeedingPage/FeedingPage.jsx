import { useState } from "react";
import { Card, Typography, Divider, Button } from "antd";
import FeedingStatsCards from "./components/FeedingStatsCards";
import FeedingScheduleTable from "./components/FeedingScheduleTable";
import FeedInventory from "./components/FeedInventory";
import FeedingForm from "./components/FeedingForm";
import FeedingChart from "./components/FeedingChart";

const { Title } = Typography;

const FeedingPage = () => {
  const [formOpen, setFormOpen] = useState(false);

  //  Ratsionlar (statik holatda, keyin API ulanadi)
  const feedingData = [
    {
      id: 1,
      animalName: "Lola",
      date: "2025-10-21",
      morningFeed: "Silo 5kg, Yem 1kg",
      afternoonFeed: "Bedana 3kg, Suv 12L",
      eveningFeed: "Soya 2kg, Arpa 1kg",
      notes: "Sut miqdori oshgan",
    },
    {
      id: 2,
      animalName: "Masha",
      date: "2025-10-21",
      morningFeed: "Silo 4kg, Yem 0.8kg",
      afternoonFeed: "Bedana 2.5kg, Suv 10L",
      eveningFeed: "Arpa 1.5kg, O'simlik aralash 1kg",
      notes: "Normal ishtaha",
    },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <Card>
        <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
          Ozuqa boshqaruvi
        </Title>

        <FeedingStatsCards />
        <Divider />
        <FeedInventory />
        <Divider />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Title level={4}>Kunlik oziqlantirish jadvali</Title>
          <Button type="primary" onClick={() => setFormOpen(true)}>
            + {`Ratsion qo'shish`}
          </Button>
        </div>

        <FeedingScheduleTable data={feedingData} />
        <Divider />

        <FeedingChart feedingData={feedingData} />

        <FeedingForm
          open={formOpen}
          onClose={() => setFormOpen(false)}
          onSubmit={(values) => console.log("Yangi ratsion:", values)}
        />
      </Card>
    </div>
  );
};

export default FeedingPage;
