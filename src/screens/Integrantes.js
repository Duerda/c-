import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Integrantes() {
  return (
    <ScrollView style={estilos.container}>
      <Text style={estilos.titulo}>Equipe</Text>

      <View style={estilos.membro}>
        <Image source={require('../assets/Eduarda.png')} style={estilos.foto} />
        <Text style={estilos.nome}>Eduarda de Souza</Text>
        <Text style={estilos.descricao}>Aluna do 2° DS</Text>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#dd7b22',
  },
  subtitulo: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  membro: {
    alignItems: 'center',
    marginBottom: 30,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
  descricao: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
  },
});
