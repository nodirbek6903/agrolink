import { Card } from "antd";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const FeedingChart = ({ feedingData }) => {
  const chartData = {
    labels: feedingData.map((d) => d.date),
    datasets: [
      {
        label: "Sut miqdori (L)",
        data: [17, 19, 20, 21, 22],
        borderColor: "rgb(75, 192, 192)",
        fill: false,
      },
      {
        label: "Ozuqa (kg)",
        data: [12, 13, 14, 15, 15],
        borderColor: "rgb(255, 99, 132)",
        fill: false,
      },
    ],
  };

  return (
    <Card bordered style={{ marginTop: 24 }}>
      <h3>📈 Oziqlantirish va sut ishlab chiqarish tahlili</h3>
      <Line data={chartData} />
    </Card>
  );
};

export default FeedingChart;
