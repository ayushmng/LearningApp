import React from 'react';
import {View, Text} from 'react-native';

interface HomeProps {}

export function Home({}: HomeProps) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hello, from Home Screen!!</Text>
    </View>
  );
}
