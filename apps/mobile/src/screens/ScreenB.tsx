'use client';

import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Button } from '@ui-kit/components/button/Button.native';
import { Screen } from '@ui-kit/layouts/screen/Screen.native';

import type { RootStackParamList } from '../app/App';

//
//

interface IScreenB extends NativeStackScreenProps<RootStackParamList, 'ScreenB'> {}

export const ScreenB: React.FC<IScreenB> = () => (
  <Screen className='w-screen h-screen'>
    <SafeAreaView className='container flex-1 flex flex-col transition-colors'>
      <Text>ScreenB</Text>
      <View className='flex flex-grow flex-col items-center justify-center'>
        <Button>Button</Button>
      </View>
    </SafeAreaView>
  </Screen>
);
