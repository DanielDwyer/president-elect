import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';

export default class PlayBScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.PlayBContainer}>
          <Text>PlayB -- Hello, world!</Text>
          <Button
            title = "Go to Main View"
            onPress={() => navigate('Main')}
          />
        </View>
      </ScrollView>
    );
  }
};

PlayBScreen.navigationOptions = {
  title: 'PlayB',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    marginHorizontal: 50,
  },
  PlayBContainer: {
    alignItems: 'center',
  },
});