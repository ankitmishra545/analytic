import React, { useState } from "react";
import {
  BarChartOutlined,
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import SystemProcesses from "./SystemProcesses";
import HealthMonitor from "./HealthMonitor";
import ThreatNotification from "./ThreatNotification";
import BlockingPieChart from "./BlockingPieChart";
import MainContainer from "./MainContainer";
import useSystemInfo from "../utils/useSystemInfo";
import ThreatNotify from "./ThreatNotify";
import { LOGO_URL } from "../utils/constant";
const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  useSystemInfo();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState(null);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  let content;

  switch (selectedKey) {
    case "1":
      content = <SystemProcesses />;
      break;
    case "2":
      content = <HealthMonitor />;
      break;
    case "3":
      content = <ThreatNotification />;
      break;
    case "4":
      content = <BlockingPieChart />;
      break;
    default:
      content = <MainContainer />;
  }

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="h-[85px] flex items-center justify-center">
          <img src={LOGO_URL} className="w-[50px] h-[50px] rounded-full" alt="logo"></img>
        </div>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          onClick={(e) => setSelectedKey(e.key)}
          items={[
            {
              key: "1",
              icon: <DashboardOutlined />,
              label: "System Processes",
            },
            {
              key: "2",
              icon: <BarChartOutlined />,
              label: "Health Monitor",
            },
            {
              key: "3",
              icon: <WarningOutlined />,
              label: "Threat Notification",
            },
            {
              key: "4",
              icon: <PieChartOutlined />,
              label: "Blocking Pie Chart",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div
            className="font-bold pr-10 text-blue-500 underline hover:cursor-pointer hover:opacity-70"
            onClick={() => setSelectedKey(null)}
          >
            Dashboard
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {content}
        </Content>
        <ThreatNotify />
      </Layout>
    </Layout>
  );
};
export default Dashboard;
