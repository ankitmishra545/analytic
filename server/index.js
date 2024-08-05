const express = require("express");
const cors = require("cors");
const systemInfo = require("systeminformation");
const path = require("path");

const app = express();

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.use(cors());
app.get("/api/systemInfo", async (req, res) => {
  try {
    const [cpu, memory, network, processes, disk, block] = await Promise.all([
      systemInfo.currentLoad(),
      systemInfo.mem(),
      systemInfo.networkStats(),
      systemInfo.processes(),
      systemInfo.diskLayout(),
      systemInfo.blockDevices(),
    ]);

    res.json({
      cpu,
      memory,
      network,
      processes,
      disk,
      block,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(2233, () => {
  console.log("listening port 2233");
});
