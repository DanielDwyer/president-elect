import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MonoText } from './StyledText';

export function IconCaption(props) {
  return (
    <View style={styles.iconCaptionContainer}>
      <Ionicons name={`ios-${props.name}`} color={props.color} size={props.size} />
      {/* <Ionicons name={`md-${props.name}`} color={props.color} size={props.size} /> */}
      <MonoText style={styles.iconText}>{props.captionA}</MonoText>
      <MonoText style={styles.iconText}>{props.captionB}</MonoText>
    </View>
  );
}

const styles = StyleSheet.create({
  iconCaptionContainer: {
    alignItems: 'center',
  },
  iconText: {
    fontWeight: 'bold',
  }
});