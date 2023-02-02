import React from "react";
import top from '../../../../assets/topo.png';

import { Dimensions, Image, StyleSheet } from "react-native";
import Text from "../../../components/Text";

const screenWidth = Dimensions.get('screen').width;


export default function Top() {
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
  }
});