import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { ContactsScreen } from '../screens/ContactsScreen';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  // FOR IOS
  const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{
        paddingTop: top
      }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={({ route }) => {
        return {
          // When pressing the top tab
          tabBarPressColor: colores.primary,
          tabBarShowIcon: true,
          tabBarIndicatorStyle: {
            backgroundColor: colores.primary
          },
          tabBarStyle: {
            borderTopColor: colores.primary,
            shadowColor: 'transparent', // FOR IOS
            elevation: 0
          },
          tabBarIcon: ({ color }) => {
            let iconName: string = '';
            switch (route.name) {
              case 'Chat':
                iconName = 'chatbox-ellipses-outline';
                break;
              case 'Contacts':
                iconName = 'stats-chart-outline';
                break;
              case 'Albums':
                iconName = 'musical-notes-outline';
                break;
            }
            return <Icon name={iconName} size={20} color={color} />;
          }
        };
      }}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
