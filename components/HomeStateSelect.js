import React, { Component } from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  Button,
} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class HomeStateSelectScreen extends Component {
  state = {
    tableHead: ['State', 'Electoral Votes', 'Tax', 'Campaign Points'],
    tableData: [
      ['1', '2', '3', '4'],
      ['a', 'b', 'c', 'd'],
      ['1', '2', '3', '456\n789'],
      ['a', 'b', 'c', 'd']
    ]
  };
  handleStateSelection = (message) => {
    console.log('message:', message);
  };

  render() {
    const state = this.state;
    return (
        <View>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={state.tableData} textStyle={styles.text}/>
          </Table>
        </View>
    );
  }
};

// HomeStateSelectScreen.navigationOptions = {
//   title: 'NAME HERE',
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    marginHorizontal: 50,
  },
  homeStateSelectContainer: {
    alignItems: 'center',
  },
});