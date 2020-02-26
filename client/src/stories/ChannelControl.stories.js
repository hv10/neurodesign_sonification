import React from 'react';
import {action} from '@storybook/addon-actions';
import ChannelControl from '../components/ChannelControl';

export default {
  title: 'ChannelControl',
  component: ChannelControl,
};

export const NoContext = () => (
  <div style={{minWidth: '100vw', minHeight: '100vh'}}>
    <ChannelControl name="Test.csv> Channel1" />
  </div>
);
