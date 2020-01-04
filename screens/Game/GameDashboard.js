import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';

export default class GameDashboardScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.GameDashboardContainer}>
          <Text>GameDashboard -- Hello, world!</Text>
          <Button
            title = "Go to Main View"
            onPress={() => navigate('Main')}
          />
        </View>
      </ScrollView>
    );
  }
};

GameDashboardScreen.navigationOptions = {
  title: 'GameDashboard',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    marginHorizontal: 50,
  },
  GameDashboardContainer: {
    alignItems: 'center',
  },
});