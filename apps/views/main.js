/**
 * Created by ling on 2017/9/4.
 */
import React, {Component} from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: '主界面',
  };

  render() {
    return (
      <View>
        <Text>Main</Text>
        <Button
          onPress={() => this._toLogin()}
          title="to Login"
        />
      </View>
    )
  }

  _toLogin = () => {
    window.app.setInitialRoute('Login', {title: '登录'})
  }
}