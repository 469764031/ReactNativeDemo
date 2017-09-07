/**
 * Created by ling on 2017/9/4.
 */
import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native';

export default class Login extends Component {
  static navigationOptions = {
    title: '登录',
  };

  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      passWord: ""
    }
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <TextInput
            placeholder="请输入用户名"
            onChangeText={(userName) =>
              this.setState({userName: userName})
            }
            value={this.state.userName}
            maxLength={50}
            placeholderTextColor='rgba(200,200,200,0.5)'
            clearButtonMode='while-editing'
            autoCapitalize="none"
            style={[styles.username,{marginBottom:10, marginTop:30},styles.common]}>
          </TextInput>
          <TextInput
            placeholder="请输入密码"
            onChangeText={(passWord) =>
              this.setState({passWord: passWord})
            }
            value={this.state.passWord}
            maxLength={50}
            placeholderTextColor='rgba(200,200,200,0.5)'
            clearButtonMode='while-editing'
            autoCapitalize="none"
            style={[styles.username,{marginBottom:10},styles.common]}>
          </TextInput>
          <Button
            onPress={() => this._login()}
            title="to Main"
          />
        </View>
      </View>
    )
  }

  _login = () => {
    if (this.state.userName == 'ling' && this.state.passWord == '1') {
      window.app.setInitialRoute('Main', {title: '主界面'})
    }
  };
}

const styles = StyleSheet.create({
  common:{
    height:46,
    width:288,
    borderRadius:23,
    justifyContent:"center",
    alignItems:'center',
    padding:0
  },

  username:{
    borderWidth:1,
    borderColor:'#dcdcdc',
    paddingLeft:10
  },
});