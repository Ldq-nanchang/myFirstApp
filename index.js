import React, { Component } from 'react';

import {AppRegistry} from 'react-native';

import Root from './src/Root';

import { YellowBox } from 'react-native';//取消 componentWillUnmount 的弃用警告
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class Kupo extends Component {
  render() {
    return (
        <Root/>
    )
  }
}

AppRegistry.registerComponent('myFirstApp', () => Kupo);


