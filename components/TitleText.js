import React from 'react';
import { Text, StyleSheet } from 'react-native';

export function TitleText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'roboto-title' }, styles.titleText]} />
  );
}

const styles = StyleSheet.create({
  titleText: {
    marginVertical: 5,
    fontSize: 24,
    // textAlign: 'center',
  },
});