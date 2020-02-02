import React from 'react';
import {action} from '@storybook/addon-actions';
import SoundReceiver from '../components/SoundReceiver';

export default {
  title: 'SoundReceiver',
  component: SoundReceiver,
};

export const NoContext = () => (
  <div style={{minWidth: '100vw', minHeight: '100vh'}}>
    <SoundReceiver />
  </div>
);
