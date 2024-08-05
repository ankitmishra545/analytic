import { Cell, Pie, PieChart, Tooltip } from "recharts";
import { CHARTS_COLORS } from "../utils/constant";
import ColorValue from "./ColorValue";

const PieChartBlock = ({ title, data, width = 300 }) => {
  return (
    <div>
      <h2 className="text-center font-bold">{title}</h2>
      <div className="flex flex-wrap mt-2">
        {data.map((d, i) => (
          <ColorValue key={d.name} name={d.name} colorIndex={i} />
        ))}
      </div>
      <PieChart width={width} height={300}>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={80} fill="#8884d8" label>
          {data.map((d, index) => (
            <Cell key={`cell-${index}`} fill={CHARTS_COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default PieChartBlock;
