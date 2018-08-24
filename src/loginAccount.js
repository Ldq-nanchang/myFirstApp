import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableNativeFeedback,
    TextInput,
    TouchableOpacity
} from 'react-native';
import axios from 'axios';

import {Toast} from './components/Toast'
import {Loading} from './components/Loading'
import Icon from 'react-native-vector-icons/Feather'

export default class loginAccount extends Component {
    constructor(props) {
    super(props);
        this.state = {
            a: '',
            showCheckbox: true,
            picCode: 'http://118.25.23.176:81/Account/ImageCode',
            invitationCode: null,
            form: {
                phone: '17785921173',
                pwd: 'kupo111',
                picCode: '',
                code: ''                
            }
        }
    }

    _login_phone() {
        this.props.login_type()
    }
    test() {
        Toast.showSuccess('这是showSuccess类型')
    }
    verifyAccount() {
        if(!(/^[1][3,4,5,7,8][0-9]{9}$/.test(this.state.form.phone))){
            Toast.showWarning('手机号有误')
            let form = this.state.form;
            form.phone = '';
            this.setState({form:form});
        }

    }
    changeAccount(phone) {
        let form = this.state.form;
        form.phone = phone;
        this.setState({form:form});
    }
    changePwd(pwd) {
        let form = this.state.form;
        form.pwd = pwd;
        this.setState({form:form});
    }
    changePicCode(picCode) {
        let form = this.state.form;
        form.picCode = picCode;
        this.setState({form:form});
    }
    changeImgCode() {
        
        this.setState({
            picCode: 'http://118.25.23.176:81/Account/ImageCode?t='+ new Date()
        })
    }
    _logined() {
        if(!this.state.form.phone){
            Toast.showWarning('请输正确的手机号');
            return false;
        }
        if(!this.state.form.pwd){
            Toast.showWarning('请输入密码');
            return false;
        }
        if(!this.state.form.picCode){
            Toast.showWarning('请输入验证码');
            return false;
        }
        Loading.show('Loading...');
        axios.post( "http://118.25.23.176:81/Account/Login",{
                InvitationCode: this.state.form.invitationCode,
                Password: this.state.form.pwd,
                Phone: this.state.form.phone,
                ImageCode: this.state.form.picCode  
            }
        ).then((res) => {
            Loading.hidden();
            if(res.status == 200){
                this.props.loginedAccount()
            }else{
                Toast.showWarning(res.msg)
            }   
            // console.warn(res)
        }).catch((error)=>{
            console.warn(error)
        })
        // setTimeout(()=>{

        // },2000)   
    }

    render() {
        return (
            <View style={styles.login}>
            {/* <Text>{this.state.form.phone}</Text>
            <Text>{this.state.form.pwd}</Text>
            <Text>{this.state.form.picCode}</Text> */}
                <View style={styles.loginInput}>

                    <Icon name="user" size={20} color="#999999"/>
                    <TextInput
                    style={styles.loginTextInput}
                    placeholder="用户名"
                    keyboardType="numeric"
                    underlineColorAndroid='transparent'
                    onChangeText={this.changeAccount.bind(this)}
                    onBlur={this.verifyAccount.bind(this)}
                    />
                </View>
                <View style={styles.loginInput}>

                    <Icon name="lock" size={20} color="#999999"/>
                    <TextInput
                    style={styles.loginTextInput}
                    placeholder="密码"
                    keyboarType="visible-password"
                    password={true}
                    underlineColorAndroid='transparent'
                    onChangeText={this.changePwd.bind(this)}
                    />
                </View>
                <View style={styles.loginInputEndWrapper}>
                    <View style={styles.loginInputEnd}>
                        <TextInput
                        style={{flex:1}}                           
                        placeholder="验证码"
                        keyboarType="visible-password"
                        underlineColorAndroid='transparent'
                        onChangeText={this.changePicCode.bind(this)}
                        />
                    </View>
                    <TouchableNativeFeedback onPress={this.changeImgCode.bind(this)}>
                    <Image
                    style={{height:'80%',width:100,borderRadius: 5}}
                    source={{uri:this.state.picCode}}
                    />
                    </TouchableNativeFeedback>
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
                            <TouchableNativeFeedback onPress={this._login_phone.bind(this)}>
                                <Text style={{color: '#6787bd'}}>手机号登录</Text>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={this._logined.bind(this)}>
                    <View style={styles.loginBtn}>
                        <Text style={styles.white}>登录</Text>
                    </View>
                </TouchableOpacity>
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