import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function GameplayBScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.instructionsContainer}>
        <Text>Gameplay B</Text>
      </View>
    </ScrollView>
  );
};

GameplayBScreen.navigationOptions = {
  title: 'Gameplay B',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    marginHorizontal: 50,
  },
  instructionsContainer: {
    alignItems: 'center',
  },
});