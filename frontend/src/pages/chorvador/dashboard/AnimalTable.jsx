import {Table,Tag} from "antd"

const AnimalTable = () => {
    const columns = [
        {
            title:"ID",
            dataIndex:"id"
        },
        {
            title:"Nomi",
            dataIndex:"name"
        },
        {
            title:"Turi",
            dataIndex:"type"
        },
        {
            title:"Holati",
            dataIndex:"status",
            render: (text) => (
                <Tag color={text === "Sog'lom" ? "green" : "red"} >{text}</Tag>
            )
        },
        {
            title:"Harorat",
            dataIndex:"temp"
        },
        {
            title:"Oxirgi tekshiruv",
            dataIndex:"lastCheck"
        }
    ]

    const data = [
    { id: "#1021", name: "Moshka", type: "Sigir", status: "Sog'lom", temp: "37.5°C", lastCheck: "2025-10-22" },
    { id: "#1043", name: "Bella", type: "Sigir", status: "Kasallik", temp: "39.2°C", lastCheck: "2025-10-21" },
  ];

  return <Table columns={columns} dataSource={data} pagination={false} />

}

export default AnimalTable