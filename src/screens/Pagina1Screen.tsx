import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<any, any> { }

export const Pagina1Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>

      <Button
        title="Ir para Pagina2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text style={{
        marginTop: 20,
        marginBottom: 10
      }}>Navegar con argumentos</Text>

      <View style={{ flexDirection: 'row' }}>

        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#5856D6'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro'
          })}
        >
          <Icon name="body-outline" size={23} color="white" />
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#FF9427'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
          <Icon name="woman-outline" size={23} color="white" />
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>

      </View>



    </View>
  );
};
