/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {StackNavigator} from "react-navigation"; 
import BottomTabBar from './src/BottomTabBar';
import expense from './src/expense'
import Login from './src/login';
import TestPage from './src/test';
import Center from './src/center'

import expenseAction from './src/pages/expenseAction';
import expenseIngetral from './src/pages/expenseIngetral';
import earnings from './src/pages/earnings';
const App = StackNavigator({
  Earnings: {screen: earnings},
  // center: {screen: Center,navigationOptions:{header:null}},
  // Login: {screen: Login,navigationOptions:{header:null}},
  // Page2: {screen: expense,navigationOptions:{header:null}},
  Home: {screen: BottomTabBar,navigationOptions:{header:null}},
  Test: {screen: TestPage},
  expenseAction: {screen: expenseAction},
  expenseIngetral: {screen: expenseIngetral},
  Earnings: {screen: earnings}
}, {
    headerMode: 'screen'//headerMode返回上级页面时动画效果 
  // float:iOS默认的效果 
  // screen:滑动过程中,整个页面都会返回 
  // none:无动画
  }); 

export default App




