import { createSlice } from "@reduxjs/toolkit";

const emitters = createSlice({
  name: "emitters",
  initialState: [],
  reducers: {
    addEmitter(state, action) {
      const { name, position, synth, panner, id } = action.payload;
      state.push({ name, position, synth, panner, id, enabled: true });
    },
    toggleEmitterEnabled(state, action) {
      const emitter = state.find((v) => v.name === action.payload);
      if (emitter) {
        emitter.enabled = !emitter.enabled;
      }
    },
    updateEmitterPos(state, action) {
      const { name, position } = action.payload;
      const emitter = state.find((v) => v.name === name);
      if (emitter) {
        emitter.position = position;
      }
    },
    emitterSignalData(state, action) {
      const { name, signal_data } = action.payload;
      const emitter = state.find((v) => v.name === name);
      if (emitter) {
        emitter.signal_data = signal_data;
      }
    },
    emitterData(state, action) {
      const { name, data } = action.payload;
      const emitter = state.find((v) => v.name === name);
      if (emitter) {
        emitter.data = data;
      }
    },
    updateEmitterAudioNodes(state, action) {
      const { name, synth, panner } = action.payload;
      return state.map((v) => {
        if (v.name !== name) {
          return v;
        }
        return { ...v, synth: synth, panner: panner };
      });
    },
    removeEmitter(state, action) {
      return state.filter((v) => v.name !== action.payload);
    },
    updateEmitterPannerPosition(state, action) {
      const { name, position } = action.payload;
      const emitter = state.find((v) => v.name === name);
      if (emitter) {
        emitter.panner.setPosition(position.x, position.y, position.z);
      }
    },
  },
});
export const {
  addEmitter,
  toggleEmitterEnabled,
  emitterData,
  emitterSignalData,
  removeEmitter,
  updateEmitterAudioNodes,
  updateEmitterPos,
  updateEmitterPannerPosition,
} = emitters.actions;
export default emitters.reducer;
