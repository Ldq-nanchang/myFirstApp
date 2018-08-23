import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableNativeFeedback,
} from 'react-native';

import {Toast} from './components/Toast';
import {Loading} from './components/Loading';
import Icon from 'react-native-vector-icons/Feather'
export default class loginPhone extends Component {
    constructor(props) {
        super(props);
    }
    _logined = () => {
        Toast.showSuccess('成功');
        // this.props.loginedPhone();
    }
    _login_account = () => {
        this.props.login_type();
    }
    render() {
        return (
            <View style={styles.loginPhone}>
                <View style={styles.loginPhoneRow}>
                    <View style={[styles.loginPhoneInputWrapper,
                        {width: '100%',flexDirection:'row',alignItems:'center'}]}>
                        <Icon name="smartphone" size={20} color="#999999"/>
                        <TextInput style={[styles.loginPhoneInput,{flex:1}]}
                        placeholder="手机号"
                        underlineColorAndroid="transparent"/>
                    </View>
                </View>
                <View style={styles.loginPhoneRow}>
                    <View style={styles.loginPhoneInputWrapper}>
                        <TextInput style={styles.loginPhoneInput}
                        placeholder="验证码"
                        underlineColorAndroid="transparent"/>
                    </View>
                    <Image
                        style={{height: '100%',width:100,borderRadius: 5}}
                        source={require('../Images/ImageCode.jpg')}/>
                </View>
                <View style={styles.loginPhoneRow}>
                    <View style={styles.loginPhoneInputWrapper}>
                        <TextInput style={styles.loginPhoneInput}
                        placeholder="手机验证码"
                        underlineColorAndroid="transparent"/>
                    </View>
                    <View style={styles.getPhoneCode}>
                        <Text style={{color:'#ffffff'}}>获取验证码</Text>
                    </View>
                </View>

                <View style={styles.loginPhoneRow}>
                    <Text></Text>
                    <TouchableNativeFeedback onPress={this._login_account}>
                        <View>
                        <Text style={{color: '#6787bd'}}>用户名登录</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <TouchableNativeFeedback onPress={this._logined}>
                    <View style={styles.loginPhoneBtn}>
                        <Text style={{color: '#ffffff'}}>登录</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginPhone: {
        paddingLeft: 37,
        paddingRight: 37 
    },
    loginPhoneRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    loginPhoneInputWrapper: {
        width: '50%',
        borderColor: "#d8dde8",
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 15,
        paddingRight: 15,
        
    },
    getPhoneCode: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#6787bd',
        width: 100,
    },
    loginPhoneBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        borderRadius: 5,
        backgroundColor: "#6787bd",
        marginTop: 37
    }
})