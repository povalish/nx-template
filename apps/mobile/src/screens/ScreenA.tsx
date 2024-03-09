'use client';

import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Button } from '@ui-kit/components/button/Button.native';
import { Screen } from '@ui-kit/layouts/screen/Screen.native';

import type { RootStackParamList } from '../app/App';

//
//

interface IScreenA extends NativeStackScreenProps<RootStackParamList, 'ScreenA'> {}

export const ScreenA: React.FC<IScreenA> = () => (
  <Screen className='w-screen h-screen'>
    <SafeAreaView className='container flex-1 flex flex-col transition-colors'>
      <Text>ScreenA</Text>
      <View className='flex flex-grow flex-col items-center justify-center'>
        <Button>Button</Button>
      </View>
    </SafeAreaView>
  </Screen>
);
