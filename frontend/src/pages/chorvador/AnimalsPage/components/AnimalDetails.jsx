import { Card, Descriptions, Tag, Divider, Typography } from "antd";
import {
  HeartOutlined,
  CalendarOutlined,
  AlertOutlined,
  ExperimentOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

const AnimalDetails = () => {
  const animal = {
    name: "Bodom",
    type: "Sigir",
    breed: "Holstein",
    gender: "Urg‘ochi",
    age: "3 yosh",
    weight: "420 kg",
    milkPerDay: "18 litr",
    lastVaccination: "2025-08-12",
    healthStatus: "Sog‘lom",
    note: "Oxirgi tekshiruvda hech qanday muammo topilmadi.",
  };

  return (
    <Card  style={{ marginTop: 24 }}>
      <Title level={4} style={{ marginBottom: 16 }}>
        Hayvon tafsilotlari
      </Title>

      <Descriptions bordered column={2}>
        <Descriptions.Item label="Ismi">{animal.name}</Descriptions.Item>
        <Descriptions.Item label="Turi">{animal.type}</Descriptions.Item>
        <Descriptions.Item label="Zoti">{animal.breed}</Descriptions.Item>
        <Descriptions.Item label="Jinsi">{animal.gender}</Descriptions.Item>
        <Descriptions.Item label="Yoshi">{animal.age}</Descriptions.Item>
        <Descriptions.Item label="Og‘irligi">{animal.weight}</Descriptions.Item>
        <Descriptions.Item label="Kunlik sut miqdori">
          {animal.milkPerDay}
        </Descriptions.Item>
        <Descriptions.Item label="Emlash sanasi">
          <CalendarOutlined /> {animal.lastVaccination}
        </Descriptions.Item>
        <Descriptions.Item label="Sog‘lik holati">
          <Tag color="green">
            <HeartOutlined /> {animal.healthStatus}
          </Tag>
        </Descriptions.Item>
        <Descriptions.Item label="Izoh">{animal.note}</Descriptions.Item>
      </Descriptions>

      <Divider />

      <div style={{ marginTop: 16 }}>
        <Title level={5}>
          <ExperimentOutlined /> Oxirgi sog‘lomlik tahlili
        </Title>
        <p style={{ color: "#555" }}>
          2025-yil 10-oktabrda veterinar tomonidan tekshirildi. Harorat, yurak
          urishi va sut sifati normal. Keyingi tekshiruv — 2025-yil 25-noyabrda.
        </p>
      </div>

      <Divider />

      <div>
        <Title level={5}>
          <AlertOutlined /> Eslatmalar
        </Title>
        <ul style={{ color: "#666" }}>
          <li>Har kuni ertalab soat 7:00 da sog‘iladi</li>
          <li>Har 2 haftada oziqlanish ratsioni yangilanadi</li>
          <li>Keyingi emlash: 2025-11-25</li>
        </ul>
      </div>
    </Card>
  );
};

export default AnimalDetails;
