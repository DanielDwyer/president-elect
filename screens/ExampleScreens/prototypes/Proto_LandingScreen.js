import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';

export default class LandingScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.landingHelloWorldContainer}>
          <Text>Landing -- Hello, world!</Text>
          <Button
            title = "Go to Game View"
            onPress={() => navigate('Game')}
          />
        </View>
      </ScrollView>
    );
  }
};

LandingScreen.navigationOptions = {
  title: 'Landing',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    marginHorizontal: 50,
  },
  landingHelloWorldContainer: {
    alignItems: 'center',
  },
});