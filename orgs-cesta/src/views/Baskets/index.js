import React from "react";
import {  StyleSheet, View } from "react-native";
import Top from "./Top";
import Details from "./Details";

export default function Baskets() {
  return (
    <>
      <Top />
      <View style={styles.basket}>
        <Details />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  }
});
