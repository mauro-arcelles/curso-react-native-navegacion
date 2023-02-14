import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLaterial } from './src/navigator/MenuLaterial';
// import { StackNavigator } from './src/navigator/StackNavigator';
import { AuthProvider } from './src/context/AuthContext';


export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator />*/}
        <MenuLaterial />
        {/* <Tabs /> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};

export default App;
