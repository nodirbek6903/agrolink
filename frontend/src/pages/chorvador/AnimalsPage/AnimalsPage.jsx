import { useState } from "react";
import { Card, Typography, Divider, Button } from "antd";
import AnimalStatsCards from "./components/AnimalStatsCard";
import AnimalDetails from "./components/AnimalDetails";
import AnimalsTable from "./components/AnimalsTable";
import AnimalsForm from "./components/AnimalsForm";
import AnimalProductivity from "./components/ProductivityStats";

const { Title } = Typography;

const AnimalsPage = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div style={{ padding: "24px" }}>
      <Card bordered>
        <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
          🐮 MY ANIMALS
        </Title>

        <AnimalStatsCards />
        <Divider />
        <AnimalDetails />
        <Divider />
        <AnimalProductivity />
        <Divider />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16 }}>
          <Title level={4}>Hayvonlar ro‘yxati</Title>
          <Button type="primary" onClick={() => setFormOpen(true)}>
            + Qo‘shish
          </Button>
        </div>

        <AnimalsTable />

        <AnimalsForm
          open={formOpen}
          onClose={() => setFormOpen(false)}
          onSubmit={(values) => console.log("Qo‘shilgan:", values)}
        />
      </Card>
    </div>
  );
};

export default AnimalsPage;
