/**
 * Created by ling on 2017/9/4.
 */
import React, {Component} from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

export default class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Login</Text>
        <Button
          onPress={() => navigate('Main')}
          title="to Main"
        />
      </View>
    )
  }
}