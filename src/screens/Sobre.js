import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Sobre({ navigation }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Sobre o App</Text>
      <Text style={estilos.texto}>
        Este é um app simples de Biscoito da Sorte feito em React Native com navegação entre telas.
      </Text>

      <TouchableOpacity 
        style={estilos.botao}
        onPress={() => navigation.goBack()}
      >
        <Text style={estilos.btnTexto}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  texto: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30
  },
  botao: {
    backgroundColor: '#dd7b22',
    padding: 10,
    borderRadius: 10
  },
  btnTexto: {
    color: '#fff',
    fontWeight: 'bold'
  }
});