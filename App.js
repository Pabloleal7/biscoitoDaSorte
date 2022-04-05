/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: 'O que sabemos é uma gota; o que ignoramos é um oceano.',
      img: require('./src/biscoito.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = [
      "Viver é a coisa mais rara do mundo. A maioria das pessoas apenas existe.",
      "Não existe um caminho para a felicidade. A felicidade é o caminho.",
      "O que sabemos é uma gota; o que ignoramos é um oceano.",
      "Muitas pessoas perdem as pequenas alegrias enquanto aguardam a grande felicidade.",
      "Feliz aquele que transfere o que sabe e aprende o que ensina.",
      "Para mim, a capacidade de sorrir é uma das mais belas características do ser humano."
    ];
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
    this.setState({
      textoFrase: this.frases[numeroAleatorio],
      img: require('./src/biscoitoAberto.png')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={this.state.img} />
        <Text style={styles.textoFrase}>" {this.state.textoFrase} "</Text>
        <TouchableOpacity onPress={this.quebraBiscoito} style={styles.botao}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#dd7b22",
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#dd7b22",
  },
});

export default App;
