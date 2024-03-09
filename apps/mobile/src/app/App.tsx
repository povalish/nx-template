import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';

//
//

export type RootStackParamList = {
  ScreenA: undefined;
  ScreenB: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

//
//

export const App = () => (
  <NavigationContainer>
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name='ScreenA' component={ScreenA} />
      <RootStack.Screen name='ScreenB' component={ScreenB} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default App;
