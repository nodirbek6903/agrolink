import {Card,Row,Col,List} from "antd"
import { HeartOutlined, WarningOutlined, DashboardOutlined, CloudOutlined } from "@ant-design/icons";
import HealthChart from "../chorvador/dashboard/HealthChart";
import ConsumptionCharts from "../chorvador/dashboard/ConsumptionCharts";
import AlertList from "../chorvador/dashboard/AlertList";
import AnimalTable from "../chorvador/dashboard/AnimalTable";


const Dashboard = () => {

  const stats = [
    { title: "Umumiy hayvonlar soni", value: 125, icon: <DashboardOutlined />, color: "#1890ff" },
    { title: "Sog‘lom hayvonlar", value: "92%", icon: <HeartOutlined />, color: "#52c41a" },
    { title: "Kasallikda aniqlanganlar", value: 8, icon: <WarningOutlined />, color: "#faad14" },
    { title: "O‘rtacha harorat", value: "27°C", icon: <CloudOutlined />, color: "#13c2c2" },
  ];

  return (
    <div className="p-4 space-y-6">
      {/* 1. Top stats cards */}
      <Row gutter={[16, 16]}>
        {stats.map((item, idx) => (
          <Col xs={24} sm={12} md={6} key={idx}>
            <Card
              bordered={false}
              style={{ borderLeft: `5px solid ${item.color}`, borderRadius: "12px" }}
            >
              <div className="flex items-center gap-3">
                <div style={{ fontSize: 24, color: item.color }}>{item.icon}</div>
                <div>
                  <p className="text-gray-500">{item.title}</p>
                  <h3 className="text-xl font-semibold">{item.value}</h3>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* 2. Health & Consumption Charts */}
      <Row gutter={[16, 16]}>
        <Col xs={24} md={14}>
          <Card title="Hayvonlar sog‘lig‘i grafigi">
            <HealthChart />
          </Card>
        </Col>
        <Col xs={24} md={10}>
          <Card title="Suv va ozuqa iste’moli">
            <ConsumptionCharts />
          </Card>
        </Col>
      </Row>

      {/* 3. AI Tavsiyalar */}
      <Card title="AI Tavsiyalar">
        <List
          dataSource={[
            "Bugun suv iste'moli 10% kamaydi — harorat yuqori.",
            "2 ta hayvonda harorat baland — tekshiruv tavsiya etiladi.",
            "Ozuqa balansini qayta hisoblash kerak.",
          ]}
          renderItem={(item) => <List.Item>💡 {item}</List.Item>}
        />
      </Card>

      {/* 4. Hayvonlar jadvali + Ogohlantirishlar */}
      <Row gutter={[16, 16]}>
        <Col xs={24} md={14}>
          <Card title="Hayvonlar ro'yxati">
            <AnimalTable />
          </Card>
        </Col>
        <Col xs={24} md={10}>
          <Card title="Ogohlantirishlar">
            <AlertList />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard