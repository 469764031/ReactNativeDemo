/**
 * Created by ling on 2017/9/2.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React ,{Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Routes from '../apps/src/routes'

export default class App extends Component{
 render(){
   const Navigator = StackNavigator(Routes,{
     initialRouteName: 'Login',
     initialRouteParams: {title: '登录'}
   });
   return(
     <Navigator />
   )
 }
}