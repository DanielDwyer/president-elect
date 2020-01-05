import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TextInput, Picker } from 'react-native';
import { ParagraphText } from '../../components/ParagraphText';
import { TitleText } from '../../components/TitleText';

export default class PlayGameScreen extends Component {
  state = { 
    // next 3 bools are set to true when user clicks corresponding button
    // toggle code displays
    isShowingRoomCode: false,
    isShowingNextAvailable: false,
    isShowingLocal: false,
    // minimum/default is 2
    numberOfLocalPlayers: 2,
    isRoomCodeValid: false,
    // playerName is aka player1Name in local games
    playerName: null,
    player2Name: null,
    player3Name: null,
    player4Name: null,
    player5Name: null,
    player6Name: null,
  };
  // invoked when any of the text inputs are changed
  onChangeText = (text, inputName) => {
    // TODO API  communication
    console.log('PlayGame.js, onChangeText func, text:', text);
    console.log('PlayGame.js, onChangeText func, inputName:', inputName);
    if (inputName === 'room-code') {
      // confirm code is valid
      this.isRoomCodeValidCheck();
    }
    if (inputName === 'player-name' && ((this.state.isShowingRoomCode && this.state.isRoomCodeValid) || this.state.isShowingNextAvailable)) {
      // condtions met to start room code or next available
    }
  };
  // updates state when user selects option 
  handleGameOptionSelection = (optionState) => {
    // after a user selects a game options, this exposes required inputs for that option
    this.setState({ [optionState]: true })
  };
  // resets state to initial values
  startOver = () => {
    this.setState({
      isShowingRoomCode: false,
      isShowingNextAvailable: false,
      isShowingLocal: false,
      numberOfLocalPlayers: 2,
    });
  };
  // call API to verify room code is valid
  isRoomCodeValidCheck = (roomCode) => {
    // API call to determine if the room code is valid
    this.setState({ isRoomCodeValid: true })
  }
  render() {
    const { navigate } = this.props.navigation;
    // localPlayerInputs is a list of inputs to retrieve each players name in a local game
    const localPlayersInputs = [];
    for (let i = 2; i < this.state.numberOfLocalPlayers + 1; i++) { 
      localPlayersInputs.push(
        <TextInput
          key={`player-${i}-input`}
          style={styles.textInput}
          onChangeText={text => this.onChangeText(text, `player${i}-name`)}
          placeholder={`enter player ${i}'s name`}
        />
      )
    }
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.PlayGameContainer}>
          {
            !this.state.isShowingRoomCode
            && !this.state.isShowingNextAvailable
            && !this.state.isShowingLocal
            &&
            <ParagraphText>
              President Elect, flank short ribs pork beef prosciutto andouille spare ribs ground round burgdoggen pork chop.
            </ParagraphText>
          }
          {
            // Option: Room Code
            !this.state.isShowingNextAvailable
            && !this.state.isShowingLocal
            &&
            <>
              {
                !this.state.isShowingRoomCode
                &&
                <Button
                  color="#10459f"
                  title = "Use Room Code"
                  onPress={() => this.handleGameOptionSelection('isShowingRoomCode')}
                />
              }
              {
                this.state.isShowingRoomCode
                &&
                <TitleText>
                  Room Code
                </TitleText>
              }
              <Text>
                President Elect, flank short ribs pork beef prosciutto andouille.
              </Text>
              {
                this.state.isShowingRoomCode
                &&
                <TextInput
                  style={styles.textInput}
                  onChangeText={text => this.onChangeText(text, 'room-code')}
                  placeholder="enter room code"
                />
              }
            </>
          }

          {
            // Option: Next Available
            !this.state.isShowingRoomCode
            && !this.state.isShowingLocal
            &&
            <>
              {
                !this.state.isShowingNextAvailable
                &&
                <Button
                  color="#10459f"
                  title="Next Available"
                  onPress={() => this.handleGameOptionSelection('isShowingNextAvailable')}
                />
              }
              {
                this.state.isShowingNextAvailable
                &&
                <TitleText>
                  Next Available
                </TitleText>
              }
              <Text>
                President Elect, flank short ribs pork beef prosciutto andouille.
              </Text>
            </>
          }

          {
            // Option: Local
            !this.state.isShowingRoomCode 
            && !this.state.isShowingNextAvailable 
            &&
            <>
              {
                !this.state.isShowingLocal
                &&
                <Button
                  color="#10459f"
                  title="Play Locally"
                  onPress={() => this.handleGameOptionSelection('isShowingLocal')}
                />
              }
              {
                this.state.isShowingLocal
                &&
                <TitleText>
                  Local
                </TitleText>
              }
              <Text>
                President Elect, flank short ribs pork beef prosciutto andouille.
              </Text>
            </>
          }
          {
            // show for all options
            (this.state.isShowingRoomCode
            || this.state.isShowingNextAvailable
            || this.state.isShowingLocal)
            &&
            <>
              {
                // within show for all, but only show when option is local
                this.state.isShowingLocal
                &&
                <>
                  <Text>
                    Number of players
                  </Text>
                  <Picker
                    itemStyle={styles.numberInput}
                    selectedValue={this.state.numberOfLocalPlayers}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({numberOfLocalPlayers: itemValue})
                    }>
                    <Picker.Item label="2" value={2} />
                    <Picker.Item label="3" value={3} />
                    <Picker.Item label="4" value={4} />
                    <Picker.Item label="5" value={5} />
                    <Picker.Item label="6" value={6} />
                  </Picker>
                </>
              }
              <TextInput
                style={styles.textInput}
                onChangeText={text => this.onChangeText(text, 'player-name')}
                placeholder="enter your name"
              />
              {  
                // multi player inputs when option is local
                this.state.isShowingLocal
                &&
                localPlayersInputs 
              }
              <Button
                color="#10459f"
                title="Play"
                onPress={() => navigate('Game')}
              />
              <Button
                color="lightgray"
                title="Start Over"
                onPress={() => this.startOver()}
              />
            </>
          }
        </View>
      </ScrollView>
    );
  }
};

PlayGameScreen.navigationOptions = {
  title: 'Play Game',
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
  numberInput: {
    height: 50, 
    width: 100,
  },
  primaryButton: {
    color: '#10459f',
  },
  secondaryButton: {
    color: 'gray',
  },
});