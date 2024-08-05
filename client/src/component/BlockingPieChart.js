import { useSelector } from "react-redux";
import PieChartBlock from "./PieChartBlock";
import MemoryPieChart from "./MemoryPieChart";

const BlockingPieChart = () => {
  const disk = useSelector((store) => store.systemInfo.disk);
  const { totalCylinders, totalHeads, totalSectors, totalTracks } = disk[0];

  const diskData = [
    {
      name: "Cylinders",
      value: totalCylinders,
    },
    {
      name: "Heads",
      value: totalHeads,
    },
    { name: "Sectors", value: totalSectors },
    { name: "Tracks", value: totalTracks },
  ];
  return (
    <div className="flex flex-wrap justify-around items-center h-[75vh] overflow-y-scroll ">
      <MemoryPieChart />
      <PieChartBlock key="diskInfo" data={diskData} title="Disk Info" width={400} />
    </div>
  );
};

export default BlockingPieChart;
