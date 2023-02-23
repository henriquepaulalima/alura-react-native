import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Top from "./Top";
import Details from "./Details";
import Item from "../../components/Item";
import Text from "../../components/Text";

export default function Baskets({ top, details, items }) {
  return (
    <>
      <FlatList
        data={items.list}
        renderItem={Item}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={() => {
          return (
            <>
              <Top {...top} />
              <View style={styles.basket}>
                <Details {...details} />
                <Text style={styles.title}>{items.title}</Text>
              </View>
            </>
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  }
});
