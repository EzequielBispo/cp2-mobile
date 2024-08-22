import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import AdicionarTarefa from '../components/AdicionarTarefa';
import ListaTarefas from '../components/ListaTarefas';
import { ProvedorEstadoGlobal } from '../hooks/EstadoGlobal';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <NativeBaseProvider>
      <ProvedorEstadoGlobal>
        <View style={{ flex: 1 }}>
          <AdicionarTarefa />
          <ListaTarefas />
        </View>
      </ProvedorEstadoGlobal>
    </NativeBaseProvider>
  );
};

export default HomeScreen;