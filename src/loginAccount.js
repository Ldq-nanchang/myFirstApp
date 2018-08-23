import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableNativeFeedback,
    TextInput,
} from 'react-native';

import {Toast} from './components/Toast'
import {Loading} from './components/Loading'
import Icon from 'react-native-vector-icons/Feather'

export default class loginAccount extends Component {
    constructor(props) {
    super(props);
        this.state = {
            showCheckbox: true,
        }
    }
    _logined = () => {
        Loading.show('Loading...')
        setTimeout(()=>{
            Loading.hidden();
            this.props.loginedAccount()
        },2000)   
    }
    _login_phone = () => {
        this.props.login_type()
    }
    test() {
        Toast.showSuccess('这是showSuccess类型')
    }

    render() {
        return (
            <View style={styles.login}>
                <View style={styles.loginInput}>

                    <Icon name="user" size={20} color="#999999"/>
                    <TextInput
                    style={styles.loginTextInput}
                    placeholder="用户名"
                    underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.loginInput}>

                    <Icon name="lock" size={20} color="#999999"/>
                    <TextInput
                    style={styles.loginTextInput}
                    placeholder="密码"
                    underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.loginInputEndWrapper}>
                    <View style={styles.loginInputEnd}>
                        <TextInput
                        style={{flex:1}}                           
                        placeholder="验证码"
                        underlineColorAndroid='transparent'
                        />
                    </View>
                    <Image
                    style={{height:'100%',width:100,borderRadius: 5}}
                    source={require('../Images/ImageCode.jpg')}
                    />
                </View>
                <View style={styles.loginInputFoot}>
                    <TouchableNativeFeedback onPress={()=>{this.setState({showCheckbox: !this.state.showCheckbox})}}>
                        <View style={styles.checkbox}>
                            <View style={styles.iconCheckbox}>
                                <Text style={this.state.showCheckbox?{color:"#8ea6c6"}:{color: "transparent"}}>√</Text>
                            </View>
                            <Text>记住密码</Text>
                        </View>
                    </TouchableNativeFeedback>
                    
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.forgetPassword}>
                            <TouchableNativeFeedback>
                                <Text>忘记密码?</Text>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={{marginLeft:5}}>
                            <TouchableNativeFeedback onPress={this._login_phone}>
                                <Text style={{color: '#6787bd'}}>手机号登录</Text>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </View>
                <TouchableNativeFeedback onPress={this._logined}>
                    <View style={styles.loginBtn}>
                        <Text style={styles.white}>登录</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    white: {
        color: "#ffffff",
        fontSize: 14,
        textAlign: 'center'
    },
    login: {
        height: 325,
        paddingLeft: 37,
        paddingRight: 37,
    },
    loginInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: "#d8dde8",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingLeft: 15,
        paddingRight: 15
    },
    loginInputEndWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
       
       
    },
    
    loginInputEnd: {
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: "#d8dde8",
        borderWidth: 1,
        borderRadius: 5,

    },

    loginTextInput: {
        flex: 1,
        borderColor: 'red',
        marginLeft: 15
    },
    loginInputFoot: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    checkbox: {
        flexDirection: 'row'
    },
    iconCheckbox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 21,
        height: 21,
        borderColor: "#d8dde8",
        borderWidth: 1,
        borderRadius: 2,
        marginRight: 15
    },
    forgetPassword: {
        paddingRight: 5,
        borderRightColor: '#d8dde8',
        borderRightWidth: 1,
        height:'100%'
    },
    loginBtn: {
        justifyContent: 'center',
        height: 45,
        borderRadius: 5,
        backgroundColor: "#6787bd",
        marginTop: 50,
    }
})