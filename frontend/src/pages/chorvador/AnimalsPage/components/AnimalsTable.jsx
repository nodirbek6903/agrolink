import { Table, Tag, Button, Space } from "antd";
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const AnimalsTable = () => {
  const data = [
    {
      key: "1",
      id: "#S-045",
      name: "Bodom",
      type: "Sigir",
      gender: "Urg‘ochi",
      age: "3 yil",
      weight: "420 kg",
      milkPerDay: "22 L/kun",
      health: "Sog‘lom",
      status: "Faol",
    },
    {
      key: "2",
      id: "#Q-102",
      name: "Bo‘ta",
      type: "Qo‘y",
      gender: "Erkak",
      age: "2 yil",
      weight: "65 kg",
      milkPerDay: "—",
      health: "O‘rta",
      status: "Kuzatuvda",
    },
    {
      key: "3",
      id: "#T-210",
      name: "Jo‘ja",
      type: "Tovuq",
      gender: "Urg‘ochi",
      age: "8 oy",
      weight: "2.3 kg",
      milkPerDay: "—",
      health: "Sog‘lom",
      status: "Faol",
    },
  ];

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 90,
    },
    {
      title: "Ismi",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Turi",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Jinsi",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Yoshi",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Vazni",
      dataIndex: "weight",
      key: "weight",
    },
    {
      title: "Sut miqdori",
      dataIndex: "milkPerDay",
      key: "milkPerDay",
    },
    {
      title: "Sog‘lik",
      dataIndex: "health",
      key: "health",
      render: (text) =>
        text === "Sog‘lom" ? (
          <Tag color="green">Sog‘lom</Tag>
        ) : (
          <Tag color="orange">{text}</Tag>
        ),
    },
    {
      title: "Holat",
      dataIndex: "status",
      key: "status",
      render: (text) =>
        text === "Faol" ? (
          <Tag color="blue">Faol</Tag>
        ) : (
          <Tag color="volcano">{text}</Tag>
        ),
    },
    {
      title: "Amallar",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button
            icon={<EyeOutlined />}
            size="small"
            onClick={() => alert(`Ko‘rish: ${record.name}`)}
          />
          <Button
            icon={<EditOutlined />}
            size="small"
            onClick={() => alert(`Tahrirlash: ${record.name}`)}
          />
          <Button
            icon={<DeleteOutlined />}
            danger
            size="small"
            onClick={() => alert(`O‘chirish: ${record.name}`)}
          />
        </Space>
      ),
    },
  ];

  return (
    <div style={{ marginTop: 24 }}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
        bordered
      />
    </div>
  );
};

export default AnimalsTable;
