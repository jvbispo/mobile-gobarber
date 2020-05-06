import 'react-native-gesture-handler';

import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes/index';
import AppProvider from './hooks/index';

const App: React.FC = () => (
  <>
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <AppProvider>
        <View style={{ backgroundColor: '#312e38' }} />
        <Routes />
      </AppProvider>
    </NavigationContainer>
  </>
);

export default App;
