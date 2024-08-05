export const THREAT_NOTIFICATIONS = [
  {
    id: "T0001",
    timestamp: new Date().toString(),
    type: "Malware",
    severity: "Critical",
    source: "Antivirus",
    description: "Malware detected in file 'example.exe'.",
    affectingSystems: "Server1, Client3",
    actionsTaken: ["Quarantine", "Scan"],
  },
  {
    id: "T0002",
    timestamp: new Date().toString(),
    type: "Phishing",
    severity: "High",
    source: "Email Gateway",
    description: "Phishing email detected with subject 'Urgent Account Update'.",
    affectingSystems: "Client2",
    actionsTaken: ["Block", "Alert User"],
  },
  {
    id: "T0003",
    timestamp: new Date().toString(),
    type: "Unauthorized Access",
    severity: "Medium",
    source: "Firewall",
    description: "Unauthorized access attempt detected from IP address 192.168.1.100.",
    affectingSystems: "Server2",
    actionsTaken: ["Block IP", "Log Event"],
  },
  {
    id: "T0004",
    timestamp: new Date().toString(),
    type: "Data Breach",
    severity: "High",
    source: "Intrusion Detection System",
    description: "Sensitive data accessed by unauthorized user.",
    affectingSystems: "DatabaseServer1",
    actionsTaken: ["Isolate System", "Notify Security Team"],
  },
  {
    id: "T0005",
    timestamp: new Date().toString(),
    type: "DDoS Attack",
    severity: "Critical",
    source: "Network Monitor",
    description: "Distributed Denial of Service attack detected targeting public-facing website.",
    affectingSystems: "WebServer1",
    actionsTaken: ["Activate DDoS Protection", "Contact ISP"],
  },

  {
    id: "T0006",
    timestamp: new Date().toString(),
    type: "Unauthorized Access",
    severity: "Low",
    source: "Firewall",
    description: "Unauthorized access attempt detected from IP address 192.168.10.110.",
    affectingSystems: "Server1",
    actionsTaken: ["Block IP", "Log Event"],
  },
];

export const PROCESS_LIST_COLUMNS = [
  { title: "ID", dataIndex: "pid", key: "pid", width: 60, ellipsis: true },
  { title: "Name", dataIndex: "name", key: "name", width: 100, ellipsis: true },
  { title: "Parent PID", dataIndex: "parentPid", key: "parentPid", width: 60, ellipsis: true },
  { title: "CPU(%)", dataIndex: "cpu", key: "cpu", width: 100, ellipsis: true },
  { title: "CPU(System Usage %)", dataIndex: "cpus", key: "cpus", width: 100, ellipsis: true },
  { title: "CPU(User Usage %)", dataIndex: "cpuu", key: "cpuu", width: 100, ellipsis: true },
  { title: "Memory(%)", dataIndex: "mem", key: "mem", width: 100, ellipsis: true },
  { title: "Memory Resident Set Size", dataIndex: "memRss", key: "memRss", width: 100, ellipsis: true },
  { title: "Virtual Memory Size", dataIndex: "memVsz", key: "memVsz", width: 100, ellipsis: true },
  { title: "Path", dataIndex: "path", key: "path", width: 100, ellipsis: true },
  { title: "Priority", dataIndex: "priority", key: "priority", width: 40, ellipsis: true },
  { title: "Start Time", dataIndex: "started", key: "started", width: 100, ellipsis: true },
  { title: "State", dataIndex: "state", key: "state", width: 60, ellipsis: true },
];

export const CHARTS_COLORS = ["#00C49F", "#CCED4A", "#FFBB28", "#A83297"];

export const NOTIFICATION_INFO = ["timestamp", "severity", "source", "description", "affectingSystems"];

export const LOGO_URL =
  "https://img.freepik.com/free-vector/www-internet-globe-grid_78370-2008.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722816000&semt=ais_hybrid";
