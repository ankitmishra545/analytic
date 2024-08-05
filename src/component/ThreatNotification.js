import { Card } from "antd";
import { NOTIFICATION_INFO, THREAT_NOTIFICATIONS } from "../utils/constant";

const ThreatNotifications = () => {
  return (
    <>
      <h1 className="text-center p-2 font-bold text-lg text-red-600">All Threat Notifications</h1>
      <div className="flex flex-wrap justify-around overflow-y-scroll h-[70vh] ">
        {THREAT_NOTIFICATIONS.map((notificationInfo) => {
          return (
            <Card title={notificationInfo.type} style={{ width: "450px", margin: "10px", background: "#ffd4d4" }}>
              {NOTIFICATION_INFO.map((info) => {
                return (
                  <div className="flex" key={info}>
                    <h2 className="mr-2 font-bold">{info[0].toUpperCase() + info.slice(1)}:-</h2>
                    <p>{notificationInfo[info]}</p>
                  </div>
                );
              })}
            </Card>
          );
        })}
      </div>
    </>
  );
};
export default ThreatNotifications;
