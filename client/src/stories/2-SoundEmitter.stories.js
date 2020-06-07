import React from "react";
import { action } from "@storybook/addon-actions";
import SoundEmitter from "../components/SoundEmitter";

export default {
  title: "SoundEmitter",
  component: SoundEmitter,
};

export const NoContext = () => (
  <div style={{ minWidth: "100vw", minHeight: "100vh" }}>
    <SoundEmitter />
  </div>
);
