import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';

export default class PlayScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.PlayContainer}>
          <Text>Play -- Hello, world!</Text>
          <Button
            title = "Go to Main View"
            onPress={() => navigate('Main')}
          />
        </View>
      </ScrollView>
    );
  }
};

PlayScreen.navigationOptions = {
  title: 'Play',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    marginHorizontal: 50,
  },
  PlayContainer: {
    alignItems: 'center',
  },
});