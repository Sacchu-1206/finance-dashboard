import { PieChart, Pie, Cell } from "recharts";

function Chart({ income, expense }) {
  const data = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
  ];

  return (
    <div className="card" style={{ textAlign: "center" }}>
      <h3>Income vs Expense</h3>
      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" outerRadius={100}>
          <Cell fill="green" />
          <Cell fill="red" />
        </Pie>
      </PieChart>
    </div>
  );
}

export default Chart;