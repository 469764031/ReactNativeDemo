/**
 * Created by ling on 2017/9/4.
 */
import React, {Component} from 'react';
import {
  Text,
  View
} from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Main',
  };

  render() {
    return (
      <View><Text>Main</Text></View>
    )
  }
}