import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableNativeFeedback,
   Alert
} from 'react-native';
import LoginAccount from './loginAccount';
import LoginPhone from './loginPhone';
import Register from './register';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            btnType: 'account',    
        };
        
    }

    _logined=()=>{
        // this.props.navigation.dispatch(resetAction)
        // this.props.navigation.dispatch(navigationAction)
        this.props.navigation.navigate('Home',{key:'ssssss'})
       
    }
    tologin_phone=()=>{
        this.setState({
            btnType: 'phone'
        })
    }
    tologin_account=()=>{
        this.setState({
            btnType: 'account'
        })
    }
    render() {
        let form = {};
        switch(this.state.btnType) {
            case 'account':
                form = <LoginAccount loginedAccount={this._logined} login_type={this.tologin_phone}/>;
                break;
            case 'register':
                form = <Register/>;
                break;
            case 'phone':
                form = <LoginPhone loginedPhone={this._logined} login_type={this.tologin_account}/>;
                break;
        }
        return (
            <View style={{backgroundColor:'#fff'}}>
                <ImageBackground style={styles.loginTop}
                source={require('../Images/login_top.jpg')}>
                    <View style={styles.loginTopContent}>
                        <Text style={styles.logoKupo}>KUPO</Text>
                        <View><Text>{this.state.btnType}</Text></View>
                        <View style={styles.loginTopBtns}>
                            <TouchableNativeFeedback onPress={()=>{this.setState({btnType: 'account'})}}>
                                <View style={[styles.loginTopBtn,this.state.btnType=='account'||this.state.btnType=='phone'?{borderBottomColor: '#f0cac9'}:{borderBottomColor:'transparent'}]}>                        
                                    <Text style={styles.white}>登陆</Text>                               
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={()=>{this.setState({btnType: 'register'})}}>
                                <View style={[styles.loginTopBtn,this.state.btnType=='register'?{borderBottomColor: '#f0cac9'}:{borderBottomColor:'transparent'}]}>    
                                    <Text style={styles.white}>注册</Text>  
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View> 
                </ImageBackground>   
                {form}
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
    loginTop: {
        justifyContent: 'flex-end',
        width: "100%",
        height: 187,
        marginBottom: 35
    },
    loginTopContent: {
        justifyContent: 'space-between',
        height: "50%"
    },
    logoKupo: {   
        color: "#ffffff",
        fontSize: 28,
        fontWeight: '800',
        textAlign: 'center',
        marginTop: -30
    },
    loginTopBtns: {
        paddingLeft: 23,
        paddingRight: 23,
        flexDirection: 'row',
    },
    loginTopBtn: {
        width: '50%',
        paddingBottom: 14,
        borderBottomColor: "#f0cac9",
        borderBottomWidth: 4, 
    },
    // 登录输入框


})