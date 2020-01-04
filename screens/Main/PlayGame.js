import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { ParagraphText } from '../../components/ParagraphText';
import { TitleText } from '../../components/TitleText';

export default class PlayGameScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.PlayGameContainer}>
          <TitleText>Play Game</TitleText>
          <ParagraphText>
            President Elect, flank short ribs pork beef prosciutto andouille spare ribs ground round burgdoggen pork chop.
          </ParagraphText>

          <Button
            title = "Use Room Code"
            onPress={() => navigate('Game')}
          />
          <Text>
            President Elect, flank short ribs pork beef prosciutto andouille.
          </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => onChangeText(text)}
            // value={value}
            placeholder="enter room code"
          />
          <TextInput
            style={styles.textInput}
            onChangeText={text => onChangeText(text)}
            // value={value}
            placeholder="enter your name"
          />
          <Button
            title = "Play"
            onPress={() => navigate('Game')}
          />

          <Button
            title = "Next Available"
            onPress={() => navigate('Game')}
          />
          <Text>
            President Elect, flank short ribs pork beef prosciutto andouille.
          </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => onChangeText(text)}
            // value={value}
            placeholder="enter your name"
          />
          <Button
            title = "Play"
            onPress={() => navigate('Game')}
          />

          <Button
            title = "Play Locally"
            onPress={() => navigate('Game')}
          />
          <Text>
            President Elect, flank short ribs pork beef prosciutto andouille.
          </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => onChangeText(text)}
            // value={value}
            placeholder="enter first player's name"
          />
        </View>
      </ScrollView>
    );
  }
};

PlayGameScreen.navigationOptions = {
  title: 'PlayGame',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    marginHorizontal: 50,
  },
  PlayGameContainer: {
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    borderBottomColor: '#155ad0',
    borderBottomWidth: 1,
    margin: 5,
    padding: 5,
  },
});