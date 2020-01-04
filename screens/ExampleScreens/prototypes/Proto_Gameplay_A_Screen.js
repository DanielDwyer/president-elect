import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';

export default function GameplayAScreen() {
  const { navigate } = this.props.navigation;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.instructionsContainer}>
        <Text>GameplayA</Text>
        < Button
          title = "Go to Game View"
          onPress = {
            () => navigate('Auth')
          }
        />
      </View>
    </ScrollView>
  );
};

GameplayAScreen.navigationOptions = {
  title: 'Gameplay A',
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