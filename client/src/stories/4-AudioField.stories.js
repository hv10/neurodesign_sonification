import React from "react";
import { action } from "@storybook/addon-actions";
import AudioField from "../components/AudioField";
import SoundReceiver from "../components/SoundReceiver";

export default {
  title: "AudioField",
  component: AudioField,
};

const sources = [{ name: "Source1" }, { name: "Source2" }];

export const NoContext = () => (
  <div style={{ minWidth: "100vw", minHeight: "100vh" }}>
    <AudioField sources={sources} />
  </div>
);
