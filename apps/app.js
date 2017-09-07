/**
 * Created by ling on 2017/9/2.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Routes from '../apps/src/routes'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nav: null
    }
  }

  componentDidMount() {
    this.setInitialRoute('Login', {title: '登录'});
    window.app = this;
  }

  setInitialRoute = (initialRouteName, initialRouteParams) => {
    const Navigator = StackNavigator(Routes, {
      initialRouteName: initialRouteName,
      initialRouteParams: initialRouteParams,
    });

    this.setState({
      nav: Navigator,
    })
  };


  render() {
    let Nav = this.state.nav;
    if (Nav) {
      return (
        <Nav/>
      )
    } else {
      return (
        <View>
        </View>
      )

    }
  }
}