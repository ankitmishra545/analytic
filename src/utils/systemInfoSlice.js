import { createSlice } from "@reduxjs/toolkit";

const systemInfoSlice = createSlice({
  name: "systemInfo",
  initialState: {
    network: [],
    processes: {},
    cpu: {},
    memory: {},
    disk: [],
    block: [],
  },
  reducers: {
    addInfo: (state, action) => {
      const { network, processes, cpu, memory, disk, block } = action.payload;
      state.network = network;
      state.processes = processes;
      state.cpu = cpu;
      state.memory = memory;
      state.disk = disk;
      state.block = block;
    },
  },
});

export const { addInfo } = systemInfoSlice.actions;

export default systemInfoSlice.reducer;
