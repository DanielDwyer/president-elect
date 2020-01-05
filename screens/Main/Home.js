import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { IconCaption } from '../../components/IconCaption'
import { ParagraphText } from '../../components/ParagraphText';
import { TitleText } from '../../components/TitleText';

export default class HomeScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.welcomeImage}>
          <ImageBackground source={require('../../assets/images/whitehouse.png')} style={{width: '100%', height: '100%'}}>
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, /*justifyContent: 'center',*/ alignItems: 'center'}}>
              <TitleText style={styles.welcomeImageText}>Good Luck on Your Campaign</TitleText>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.gameInfoGroup}>
          <IconCaption
            name="contacts"
            color="#3c78df"
            size={50}
            captionA="2 or more"
            captionB="players"
          />
          <IconCaption
            name="clock"
            color="#155ad0"
            size={50}
            captionA="20 to 40"
            captionB="minutes"
          />
          <IconCaption
            name="happy"
            color="#10459f"
            size={50}
            captionA="Ages"
            captionB="8 & up"
          />
        </View>
        <View style={styles.textContainer}>
          <ParagraphText>
            President Elect, flank short ribs pork beef prosciutto andouille spare ribs ground round burgdoggen pork chop.
          </ParagraphText>
          <Text>
            Press <Ionicons name="ios-book" color="#3c78df" size={25} /> Instructions below to learn how to play 
          </Text>
          <Text>
            Press <Ionicons name="ios-create" color="#3c78df" size={25} /> Create Game to start your campaign 
          </Text>
        </View>
        <View style={styles.verticalSpacer} />
      </ScrollView>
    );
  }
};

HomeScreen.navigationOptions = {
  title: 'President Elect',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  HomeContainer: {
    alignItems: 'center',
  },
  welcomeImage: {
    height: 333,
  },
  textContainer: {
    marginHorizontal: 30,
  },
  gameInfoGroup: { 
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  welcomeImageText: {
    color: '#10459f',
  },
  verticalSpacer:{
    height: 100,
  },
});