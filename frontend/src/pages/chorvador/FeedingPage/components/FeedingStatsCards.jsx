import { Card, Row, Col, Statistic } from "antd";
import { AppleOutlined, DatabaseOutlined, BarChartOutlined } from "@ant-design/icons";

const FeedingStatsCards = () => {
  return (
    <Row gutter={16}>
      <Col span={8}>
        <Card>
          <Statistic
            title="Umumiy hayvonlar"
            value={24}
            prefix={<AppleOutlined />}
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic
            title="Bugungi oziqlantirilganlar"
            value={20}
            suffix="/24"
            prefix={<DatabaseOutlined />}
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic
            title="O‘rtacha sut miqdori"
            value={19.5}
            suffix="L"
            prefix={<BarChartOutlined />}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default FeedingStatsCards;
