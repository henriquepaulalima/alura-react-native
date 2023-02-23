import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Top from "./Top";
import Details from "./Details";
import Items from "../../components/Items";

export default function Baskets({ top, details, items }) {
  return (
    <ScrollView>
      <Top {...top} />
      <View style={styles.basket}>
        <Details {...details} />
        <Items {...items} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  }
});
