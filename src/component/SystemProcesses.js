import { Table } from "antd";
import { useSelector } from "react-redux";
import { PROCESS_LIST_COLUMNS } from "../utils/constant";

const SystemProcesses = () => {
  const processList = useSelector((store) => store.systemInfo.processes);

  const proccessKeys = Object.keys(processList).filter((x) => x !== "list");

  return (
    <div>
      <h1 className="text-center pb-3 font-bold text-lg">System Running Proceeses</h1>
      <div className="flex justify-around ">
        {proccessKeys.map((pk) => (
          <div className="flex flex-wrap" key={pk}>
            <h2 className="font-bold">{pk[0].toUpperCase() + pk.slice(1)}:- </h2>
            <p className="px-2"> {processList[pk]}</p>
          </div>
        ))}
      </div>
      <div className="overflow-scroll h-[65vh] my-3">
        <Table size="small" sticky dataSource={processList.list} columns={PROCESS_LIST_COLUMNS} pagination={false} />
      </div>
    </div>
  );
};

export default SystemProcesses;
