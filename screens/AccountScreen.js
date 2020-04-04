import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default function AccountScreen() {
  // Standard Expo View
  return <ExpoConfigView />;
}

AccountScreen.navigationOptions = {
  title: 'app.json',
};
