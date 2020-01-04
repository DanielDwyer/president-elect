import React from 'react';
import { Text, StyleSheet } from 'react-native';

export function ParagraphText(props) {
  return (
    <Text{...props} style={[props.style, { fontFamily: 'roboto-paragraph' }, styles.paragraphText]} />
  );
}

const styles = StyleSheet.create({
  paragraphText: {
    marginVertical: 30,
    fontSize: 22,
    // textAlign: 'center',
  },
});