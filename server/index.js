const express = require("express");
const cors = require("cors");
const systemInfo = require("systeminformation");

const app = express();

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
