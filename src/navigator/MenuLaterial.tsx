import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLaterial = () => {
  return (
    <Drawer.Navigator
      // screenOptions={{
      //   drawerPosition: 'right'
      // }}
      drawerContent={(props) => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="Tabs" options={{ title: 'Home' }} component={Tabs} />
      <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
          }}
          style={styles.avatar}
        />
      </View>


      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{
            ...styles.menuBoton,
            flexDirection: 'row',
            alignItems: 'center'
          }}
          onPress={() => navigation.navigate('Tabs')}
        >
          <Icon name="compass-outline" size={23} color="black" />
          <Text style={styles.menuTexto}>Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.menuBoton,
            flexDirection: 'row',
            alignItems: 'center'
          }}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Icon name="cog-outline" size={23} color="black" />
          <Text style={styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  );

};
