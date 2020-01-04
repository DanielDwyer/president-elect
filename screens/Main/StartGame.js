import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';

export default class StartGameScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.StartGameContainer}>
          <Text>StartGame -- Hello, world!</Text>
          <Button
            title = "Go to Game View"
            onPress={() => navigate('Game')}
          />
        </View>
      </ScrollView>
    );
  }
};

StartGameScreen.navigationOptions = {
  title: 'StartGame',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    marginHorizontal: 50,
  },
  StartGameContainer: {
    alignItems: 'center',
  },
});