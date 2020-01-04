import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';

export default class PlayAScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.PlayAContainer}>
          <Text>PlayA -- Hello, world!</Text>
          <Button
            title = "Go to Main View"
            onPress={() => navigate('Main')}
          />
        </View>
      </ScrollView>
    );
  }
};

PlayAScreen.navigationOptions = {
  title: 'PlayA',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    marginHorizontal: 50,
  },
  PlayAContainer: {
    alignItems: 'center',
  },
});