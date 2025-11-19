import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const biscoitoFechado = require('../assets/Biscoito.png');
const biscoitoAberto = require('../assets/biscoitoAberto.png');

// Imagens dos prêmios
const imagem1 = require('../assets/jacquin.jpg');
const imagem2 = require('../assets/michelin.jpg');
const imagem3 = require('../assets/olx.png');
const imagem4 = require('../assets/images.jpg');
const imagem5 = require('../assets/traquinas.jpg');

export default function Home({ navigation }) {

  const [img, setImg] = useState(biscoitoFechado);
  const [numeroSorteado, setNumeroSorteado] = useState(null);
  const [premio, setPremio] = useState('');
  const [imagemPremio, setImagemPremio] = useState(null);

  // Array de prêmios
  const premios = [
    { numero: 1, nome: "1", imagem: imagem1 },
    { numero: 2, nome: "2", imagem: imagem2 },
    { numero: 3, nome: "3", imagem: imagem3 },
    { numero: 4, nome: "4", imagem: imagem4 },
    { numero: 5, nome: "5", imagem: imagem5 }
  ];

  // Função para sortear o número
  const sortearNumero = () => {
    setImg(biscoitoAberto);
    const numero = Math.floor(Math.random() * 5) + 1;
    const premioSelecionado = premios.find(p => p.numero === numero);
    setNumeroSorteado(numero);
    setPremio(premioSelecionado.nome);
    setImagemPremio(premioSelecionado.imagem);
  };

  // Função para resetar o sorteio
  const resetarSorteio = () => {
    setImg(biscoitoFechado);
    setNumeroSorteado(null);
    setPremio('');
    setImagemPremio(null);
  };
 

  return (
    <View style={estilos.container}>
      <Image source={img} style={estilos.img} />

      {numeroSorteado && (
        <>
          <Text style={estilos.textoFrase}>Número sorteado: {numeroSorteado}</Text>
          <Text style={estilos.textoFrase}>Prêmio: {premio}</Text>
          <Image source={imagemPremio} style={estilos.imgPremio} />
        </>
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

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  img: {
    width: 250,
    height: 250,
  },
  imgPremio: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
  textoFrase: {
    fontSize: 18,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 200,
    height: 45,
    backgroundColor: '#dd7b22',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});
