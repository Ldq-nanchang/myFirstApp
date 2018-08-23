

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'


//底部导航栏
import {createBottomTabNavigator} from "react-navigation";
import HomeIndex from "./home";
import HomeInfo from "./home_s";
import Expense from "./expense";
import Center from "./center";
import Wallet from "./wallet"

class Home extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: '首页',
    tabBarIcon: ({ focused, tintColor }) => (
      focused?<IconEntypo name="home" size={22} color="#6787bd"/>:<IconEntypo name="home" size={22} color="#999999"/>
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <HomeInfo navigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}
class Page2 extends React.Component {
  static navigationOptions = {
    tabBarLabel: '消费',
    tabBarIcon: ({ focused, tintColor }) => (
      focused?<IconEntypo name="shopping-cart" size={22} color="#6787bd"/>:<IconEntypo name="shopping-cart" size={22} color="#999999"/>
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Expense navigation={this.props.navigation}/>
      </View>
    );
  }
}
class Page3 extends React.Component {
  static navigationOptions = {
    tabBarLabel: '钱包',
    tabBarIcon: ({ focused, tintColor }) => (
      focused?<IconEntypo name="wallet" size={22} color="#6787bd"/>:<IconEntypo name="wallet" size={22} color="#999999"/>
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Wallet/>
      </View>
    );
  }
}
class Mypage extends React.Component {
  static navigationOptions = {
    tabBarLabel: '我的',
    tabBarIcon: ({ focused, tintColor }) => (
      focused?<IconFontAwesome5 name="user" size={22} color="#6787bd"/>:<IconFontAwesome5 name="user" size={22} color="#999999"/>
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Center navigation={this.props.navigation}/>
      </View>
    );
  }
}


const BottomTabBar = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    },
    Circle: {
      screen: Page2,
    },
    Tools: {
      screen: Page3,
    },
    Mypage: {
      screen: Mypage,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#6787bd',
      inactiveTintColor: '#999999',
      showIcon: true,
      showLabel: true,
      upperCaseLabel: false,
      pressColor: '#823453',
      pressOpacity: 0.8,
      style: {
        backgroundColor: '#fff',
        paddingBottom: 0,
        borderTopWidth: 0.5,
        borderTopColor: '#ccc',
      },
      labelStyle: {
        fontSize: 12,
        margin: 1
      },
      indicatorStyle: { height: 0 }, //android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
    },
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    backBehavior: 'none',
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  }
});

  module.exports = BottomTabBar;


