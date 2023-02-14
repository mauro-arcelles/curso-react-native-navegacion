import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {

  useEffect(() => {
    console.log('Tab1Screen');

  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>

      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="planet-outline" />
        <TouchableIcon iconName="calculator-outline" />
        <TouchableIcon iconName="chatbox-ellipses-outline" />
        <TouchableIcon iconName="eye-off-outline" />
        <TouchableIcon iconName="partly-sunny-outline" />
        <TouchableIcon iconName="shield-checkmark-outline" />
      </Text>

    </View>
  );
};
