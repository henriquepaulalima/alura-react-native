import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";
import top from '../../assets/topo.png';
import farmImg from '../../assets/logo.png';

const screenWidth = Dimensions.get('screen').width;

export default function Baskets() {
  return (
    <>
      <Image
        source={top}
        style={styles.top}
      />
      <Text
        style={styles.title}
      >
        Detalhes da cesta
      </Text>
      <View style={styles.basket}>
        <Text style={styles.name}>Cesta de Verduras</Text>
        <View style={styles.farm}>
          <Image source={farmImg} style={styles.image} />
          <Text style={styles.farmName}>Jenny Jack Farm</Text>
        </View>
        <Text style={styles.description}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha</Text>
        <Text style={styles.price}>R$ 40,00</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  top: {
    width: '100%',
    height: 578 / 768 * screenWidth,
  },
  title: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 26,
    color: '#fff',
    padding: 16,
  },
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  name: {
    fontSize: 26,
    lineHeight: 42,
    color: '#464646',
    fontFamily: 'MontserratBold',
  },
  farm: {
    flexDirection: 'row',
    paddingVertical: 12
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontFamily: 'MontserratRegular',
  },
  image: {
    width: 32,
    height: 32,
  },
  description: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: '#2AFf85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  }
});
