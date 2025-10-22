import { Card, Progress, Typography } from "antd";
const { Title } = Typography;

const FeedInventory = () => {
  const feedStock = [
    { name: "Silo", amount: 250, max: 500 },
    { name: "Arpa", amount: 180, max: 300 },
    { name: "Bedana", amount: 75, max: 200 },
    { name: "Soya", amount: 50, max: 150 },
  ];

  return (
    <Card bordered>
      <Title level={4}>🌾 Ombordagi ozuqa holati</Title>
      {feedStock.map((item) => (
        <div key={item.name} style={{ marginBottom: 12 }}>
          <p style={{ marginBottom: 4 }}>{item.name}</p>
          <Progress
            percent={Math.round((item.amount / item.max) * 100)}
            status={item.amount / item.max < 0.3 ? "exception" : "active"}
          />
        </div>
      ))}
    </Card>
  );
};

export default FeedInventory;
