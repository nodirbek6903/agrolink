import {List,Tag} from "antd"

const alerts = [
    {
        message:"Sigir #1043 tana harorati yuqori (39.5°C)",
        type:"warning"
    },
    {
        message:"So'nggi 3 soatda suv iste'moli 15% kamaydi",
        type:"error"
    },
    {
        message:"Sensor #3 signali tiklandi",
        type:"success"
    }
]

const AlertList = () => {
    return (
        <List
        dataSource={alerts}
        renderItem={(item) => (
            <List.Item>
                <Tag color={
                    item.type === "warning" ? "orange" : 
                    item.type === "error" ? "red" : "green"
                }>
                    {item.type.toUpperCase()}
                </Tag>
                {item.message}
            </List.Item>
        )}
        />
    )
}

export default AlertList