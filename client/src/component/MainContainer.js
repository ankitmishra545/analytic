import HealthMonitor from "./HealthMonitor";
import SystemProcesses from "./SystemProcesses";

const MainContainer = () => {
  return (
    <div className="flex  h-[75vh] overflow-y-scroll no-scrollbar ">
      <div className="max-w-[40vw]">
        <SystemProcesses />
      </div>
      <div>
        <HealthMonitor />
      </div>
    </div>
  );
};

export default MainContainer;
