import React from "react";
import { Text as RactText, StyleSheet } from "react-native";

export default function Text({ children, style }) {
  let defaultStyle = styles.text;

  if (style?.fontWeight === 'bold') {
    defaultStyle = styles.boldText;
  }

  return (
    <RactText style={[style, defaultStyle]}>{children}</RactText>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'MontserratRegular',
    fontWeight: 'normal',
  },
  boldText: {
    fontFamily: 'MontserratBold',
    fontWeight: 'normal',
  }
})
