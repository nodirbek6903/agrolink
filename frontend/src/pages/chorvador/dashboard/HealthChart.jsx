import {Line} from "react-chartjs-2"
import {Chart as ChartJS,LineElement,CategoryScale,LinearScale,PointElement,Tooltip,Legend} from "chart.js"
ChartJS.register(LineElement,CategoryScale,LinearScale,PointElement,Tooltip,Legend)

const HealthChart = () => {
    const data = {
        labels: ["Dush","Sesh","Chor","Pay","Jum","Shan","Yak"],
        datasets: [
            {
                label:"Sog'lom hayvonlar",
                data:[90,88,92,93,94,92,95],
                borderColor: "#52c41a",
                tension:0.4,
                fill:false
            },
            {
                label:"Kasallikda aniqlanganlar",
                data:[10,12,8,7,6,8,5],
                borderColor:"#faad14",
                tension:0.4,
                fill:false
            }
        ]
    }

    return <Line data={data} />
}

export default HealthChart