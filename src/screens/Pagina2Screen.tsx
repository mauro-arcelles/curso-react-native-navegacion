import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {

  const navigator = useNavigation<any>();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Atras' // Boton de regreso para ios, si está vacio será "Back" dependiendo del idioma
    });

  }, [navigator]);


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>

      <Button
        title="Ir para Pagina3"
        onPress={() => navigator.navigate('Pagina3Screen')}
      />
    </View>
  );
};
