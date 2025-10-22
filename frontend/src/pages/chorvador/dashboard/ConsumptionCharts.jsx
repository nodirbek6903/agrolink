import {Bar} from "react-chartjs-2"
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ConsuptionCharts = () => {
    const data = {
        labels:["Dush","Sesh","Chor","Pay","Jum","Shan","Yak"],
        datasets:[
            {
        label: "Suv iste’moli (L)",
        data: [400, 380, 410, 390, 420, 415, 405],
        backgroundColor: "#1890ff",
      },
      {
        label: "Ozuqa iste’moli (kg)",
        data: [300, 290, 310, 305, 320, 315, 312],
        backgroundColor: "#faad14",
      },
        ]
    }

    return <Bar data={data} />
}

export default ConsuptionCharts