import { useSelector } from "react-redux";
import { Tooltip, ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { trimNumber } from "../utils/helper";
import PieChartBlock from "./PieChartBlock";
import MemoryPieChart from "./MemoryPieChart";

const HealthMonitor = () => {
  const { cpu, network } = useSelector((store) => store.systemInfo);

  const block = useSelector((store) => store.systemInfo.block);

  if (!cpu || !network || !block) return;

  const { currentLoadSystem, currentLoadUser, currentLoadIdle, currentLoadIrq } = cpu;

  const cpuData = [
    { name: "CPU Usage(System)", value: trimNumber(currentLoadSystem) },
    { name: "CPU Usage(User)", value: trimNumber(currentLoadUser) },
    { name: "Idle", value: trimNumber(currentLoadIdle) },
    { name: "Hardware Interupts", value: trimNumber(currentLoadIrq) },
  ];
  return (
    <div className="h-[78vh] overflow-y-scroll ">
      <h1 className="text-center font-bold text-lg">System Health Dashboard</h1>
      <div className="flex flex-wrap justify-around mt-5">
        <PieChartBlock key="CPU Usage(in %)" data={cpuData} title="CPU Usage(in %)" />
        <MemoryPieChart />
      </div>
      <div className="flex justify-around flex-wrap">
        <div>
          <h2 className="text-center mb-3 font-bold">Network Activity</h2>
          <ComposedChart width={400} height={200} data={network}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="iface" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="tx_sec" stackId="a" stroke="#8884d8" fill="#8884d8" />
            <Bar dataKey="rx_sec" stackId="a" stroke="#82ca9d" fill="#82ca9d" />
          </ComposedChart>
        </div>
        <div className="mt-5">
          <h2 className="text-center mb-3 font-bold">Disk</h2>
          <div className="flex flex-wrap">
            {block.map(({ uuid, serial, protocol, mount, model, identifier, group, fsType, ...rest }) => {
              return (
                <div className="mx-4 my-2">
                  {Object.keys(rest).map((k) => {
                    return (
                      <div className="flex">
                        <h4 className="px-2">{k[0].toUpperCase() + k.slice(1) + ":- "}</h4>
                        <p>
                          {k === "size"
                            ? (rest[k] / (1024 * 1024 * 1024)).toFixed(2) + " GB"
                            : k === "removable"
                            ? rest[k].toString()
                            : rest[k]}
                        </p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthMonitor;
