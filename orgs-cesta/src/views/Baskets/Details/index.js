import React from "react";
import Text from "../../../components/Text";
import { Image, StyleSheet, View } from "react-native";

export default function Details({ name, farmLogo, farmName, description, price }) {
  return (
    <>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.farm}>
        <Image source={farmLogo} style={styles.image} />
        <Text style={styles.farmName}>{farmName}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 26,
    lineHeight: 42,
    color: '#464646',
    fontWeight: 'bold',
  },
  farm: {
    flexDirection: 'row',
    paddingVertical: 12
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
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