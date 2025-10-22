import { Table, Tag } from "antd";

const FeedingScheduleTable = ({ data }) => {
  const columns = [
    { title: "Sana", dataIndex: "date", key: "date" },
    { title: "Hayvon", dataIndex: "animalName", key: "animalName" },
    { title: "Ertalab", dataIndex: "morningFeed", key: "morningFeed", render: (t) => <Tag color="gold">{t}</Tag> },
    { title: "Tushlik", dataIndex: "afternoonFeed", key: "afternoonFeed", render: (t) => <Tag color="green">{t}</Tag> },
    { title: "Kechki", dataIndex: "eveningFeed", key: "eveningFeed", render: (t) => <Tag color="blue">{t}</Tag> },
    { title: "Izoh", dataIndex: "notes", key: "notes" },
  ];

  return <Table rowKey="id" columns={columns} dataSource={data} pagination={false} />;
};

export default FeedingScheduleTable;
