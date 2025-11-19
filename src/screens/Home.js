import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Imagens dos prêmios
const imagem1 = require('../assets/jacquin.jpg');
const imagem2 = require('../assets/michelin.jpg');
const imagem3 = require('../assets/olx.png');
const imagem4 = require('../assets/images.jpg');
const imagem5 = require('../assets/traquinas.jpg');

export default function Home({ navigation }) {

  const [numeroSorteado, setNumeroSorteado] = useState(null);
  const [premio, setPremio] = useState('');
  const [imagemPremio, setImagemPremio] = useState(null);

  // Array de prêmios
  const premios = [
    { numero: 1, nome: "Viagem para Paris", imagem: imagem1 },
    { numero: 2, nome: "Carro Novo", imagem: imagem2 },
    { numero: 3, nome: "Casa Nova", imagem: imagem3 },
    { numero: 4, nome: "Dinheiro Extra", imagem: imagem4 },
    { numero: 5, nome: "Brinquedo Novo", imagem: imagem5 }
  ];

  // Função para sortear o número
  const sortearNumero = () => {
    const numero = Math.floor(Math.random() * 5) + 1;
    const premioSelecionado = premios.find(p => p.numero === numero);
    setNumeroSorteado(numero);
    setPremio(premioSelecionado.nome);
    setImagemPremio(premioSelecionado.imagem);
  };

  // Função para resetar o sorteio
  const resetarSorteio = () => {
    setNumeroSorteado(null);
    setPremio('');
    setImagemPremio(null);
  };

  return (
    <View style={estilos.container}>
      {numeroSorteado ? (
        <>
          <Text style={estilos.texto}>Número sorteado: {numeroSorteado}</Text>
          <Text style={estilos.texto}>Prêmio: {premio}</Text>
          <Image source={imagemPremio} style={estilos.imgPremio} />
        </>
      ) : (
        <Text style={estilos.texto}>Clique em Sortear Número para começar!</Text>
      )}

      <TouchableOpacity style={estilos.botao} onPress={sortearNumero}>
        <Text style={estilos.btnTexto}>Sortear Número</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[estilos.botao, { backgroundColor: '#28a745', marginTop: 15 }]} onPress={resetarSorteio}>
        <Text style={estilos.btnTexto}>Resetar Sorteio</Text>
      </TouchableOpacity>

      {/* Botão para navegar para a tela Sobre */}
      <TouchableOpacity
        style={[estilos.botao, { backgroundColor: '#999', marginTop: 15 }]}
        onPress={() => navigation.navigate('Sobre')}
      >
        <Text style={estilos.btnTexto}>Ir para Sobre</Text>
      </TouchableOpacity>

      {/* Botão para navegar para a tela Integrantes */}
      <TouchableOpacity
        style={[estilos.botao, { backgroundColor: '#666', marginTop: 15 }]}
        onPress={() => navigation.navigate('Integrantes')}
      >
        <Text style={estilos.btnTexto}>Ir para Integrantes</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  imgPremio: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  texto: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  botao: {
    width: 200,
    height: 50,
    backgroundColor: '#dd7b22',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  btnTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});
