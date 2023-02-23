import React from "react";
import Text from "../Text";
import { Image, StyleSheet, View } from "react-native";

export default function Item({ item: {name, image} }) {
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  image: {
    width: 46,
    height: 46,
  },
  name: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: '#464646',
  }
})
