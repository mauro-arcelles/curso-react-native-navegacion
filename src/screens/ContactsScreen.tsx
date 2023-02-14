import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {

  const { authState, signIn } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContactsScreen</Text>

      {
        !authState.isLoggedIn
          ? <Button title="Sign In" onPress={signIn} />
          : <Text>You are already logged in</Text>
      }
    </View>
  );
};
