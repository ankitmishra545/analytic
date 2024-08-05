import { useSelector } from "react-redux";
import { trimNumber } from "../utils/helper";
import PieChartBlock from "./PieChartBlock";

const MemoryPieChart = () => {
  const memory = useSelector((store) => store.systemInfo.memory);

  const { available, total, active } = memory;

  const availableMemoryPercentage = trimNumber((available / total) * 100);
  const usedMemoryPercentage = trimNumber((active / total) * 100);

  const memoryData = [
    { name: "Used Memory", value: usedMemoryPercentage },
    { name: "Free Memory", value: availableMemoryPercentage },
  ];
  return <PieChartBlock key="Memory(in %)" data={memoryData} title="Memory(in %)" />;
};

export default MemoryPieChart;
