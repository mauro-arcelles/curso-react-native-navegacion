import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export const Tab3Screen = () => {

  useEffect(() => {
    console.log('Tab3Screen');

  }, []);

  return (
    <View>
      <Text>Tab3Screen</Text>
    </View>
  );
};
