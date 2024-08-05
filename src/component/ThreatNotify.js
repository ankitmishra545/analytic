import { Button, notification, message } from "antd";
import { useEffect } from "react";
import { NOTIFICATION_INFO, THREAT_NOTIFICATIONS } from "../utils/constant";
import { randomNumberGenerator } from "../utils/helper";

const ThreatNotify = () => {
  const [api, contextHolder] = notification.useNotification();
  const [messageApi, messageContextHolder] = message.useMessage();

  const key = `open${Date.now()}`;

  const success = (value) => {
    messageApi.open({
      type: "success",
      content: `${value} action successfully completed!`,
    });
  };

  const openNotification = (ind) => {
    api.warning({
      message: `${THREAT_NOTIFICATIONS[ind].type} Detected`,
      description: (
        <div className="flex flex-col">
          {NOTIFICATION_INFO.map((info) => {
            return (
              <div className="flex" key={info}>
                <h2 className="mr-2 font-bold">{info[0].toUpperCase() + info.slice(1)}:-</h2>
                <p>{THREAT_NOTIFICATIONS[ind][info]}</p>
              </div>
            );
          })}
          <p className="text-red-500 text-sm font-bold w-full">Take required action!</p>
        </div>
      ),
      placement: "bottomRight",
      btn: (
        <>
          <Button
            type="dashed"
            style={{ background: "orange", color: "white", marginRight: "10px" }}
            size="middle"
            onClick={() => {
              api.destroy();
              success(THREAT_NOTIFICATIONS[ind].actionsTaken[0]);
            }}
          >
            {THREAT_NOTIFICATIONS[ind].actionsTaken[0]}
          </Button>
          <Button
            type="dashed"
            style={{ background: "orange", color: "white" }}
            size="middle"
            onClick={() => {
              api.destroy(key);
              success(THREAT_NOTIFICATIONS[ind].actionsTaken[1]);
            }}
          >
            {THREAT_NOTIFICATIONS[ind].actionsTaken[1]}
          </Button>
        </>
      ),
      key,
    });
  };

  useEffect(() => {
    const i = setInterval(() => {
      openNotification(randomNumberGenerator() % THREAT_NOTIFICATIONS.length);
    }, 60000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      {contextHolder}
      {messageContextHolder}
    </>
  );
};

export default ThreatNotify;
