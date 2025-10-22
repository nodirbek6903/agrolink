import { Card, Row, Col, Statistic, Button } from "antd";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const AnimalStatsCards = () => {
  const stats = [
    {
      title: "SIGIRLAR",
      total: 45,
      healthy: 43,
      warning: 2,
      color: "#52c41a",
    },
    {
      title: "QO‘YLAR",
      total: 120,
      healthy: 118,
      warning: 2,
      color: "#1890ff",
    },
    {
      title: "TOVUQLAR",
      total: 350,
      healthy: 350,
      warning: 0,
      color: "#faad14",
    },
  ];

  return (
    <Row gutter={[16, 16]}>
      {stats.map((item) => (
        <Col xs={24} sm={12} md={6} lg={6} key={item.title}>
          <Card
            title={item.title}
            bordered
            style={{ textAlign: "center", borderTop: `3px solid ${item.color}` }}
          >
            <Statistic
              value={item.total}
              valueStyle={{ fontSize: "2rem" }}
              suffix="ta"
            />
            <div style={{ marginTop: 10 }}>
              <div>
                <CheckCircleOutlined style={{ color: "green" }} />{" "}
                {item.healthy} sog‘lom
              </div>
              <div>
                <ExclamationCircleOutlined style={{ color: "orange" }} />{" "}
                {item.warning} kuzatuvda
              </div>
            </div>
          </Card>
        </Col>
      ))}

      {/* Qo'shish kartasi */}
      <Col xs={24} sm={12} md={6} lg={6}>
        <Card
          title="[+] QO‘SHISH"
          bordered
          style={{ textAlign: "center", borderTop: "3px solid #888" }}
        >
          <Button type="primary" icon={<PlusOutlined />} size="large">
            Yangi hayvon qo‘shish
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default AnimalStatsCards;
