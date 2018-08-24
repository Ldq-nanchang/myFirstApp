import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableNativeFeedback,
    TouchableOpacity
} from 'react-native';
import axios from 'axios';
import {Toast} from './components/Toast';
import {Loading} from './components/Loading';
import Icon from 'react-native-vector-icons/Feather'
export default class loginPhone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            overTime: 0,
            imgCode:'http://118.25.23.176:81/Account/ImageCode?t=' + new Date(),
            form: {
                phone: '',
                picCode: '',
                code: ''
            }
        }
    }
    _logined() {
        // Toast.showSuccess('成功');
        if(!this.state.form.phone){
            Toast.showWarning('请填写正确手机号');
            return false;
        }
        if(!this.state.form.picCode){
            Toast.showWarning('请填写图形验证码');
            return false;
        }
        if(!this.state.form.code) {
            Toast.showWarning('请填写短信验证码');
            return false;
        }
        Loading.show('Loading...');
        axios.post('http://118.25.23.176:81/Account/Login',{
            Phone:this.state.form.phone,
            ImageCode:this.state.form.picCode,
            PhoneCode: this.state.form.code
        }).then((res)=>{
            Loading.hidden();
            this.props.loginedPhone();
        }).then((error)=>{

        })   
    }
    _login_account() {
        this.props.login_type();
    }
    changePhone(phone) {
        let form = this.state.form;
        form.phone = phone;
        this.setState({form:form});
    }
    changeImgCode() {
        this.setState({
            imgCode: 'http://118.25.23.176:81/Account/ImageCode?t=' + new Date()
        });
    }
    changePicCode(picCode) {
        let form = this.state.form;
        form.picCode = picCode;
        this.setState({form:form});
    }
    changeCode(code) {
        let form = this.state.form;
        form.code = code;
        this.setState({form:form});
    }
    verifyPhone() {
        if(!(/^[1][3,4,5,7,8][0-9]{9}$/.test(this.state.form.phone))){
            Toast.showWarning('手机号有误')
            let form = this.state.form;
            form.phone = '';
            this.setState({form:form});
        }

    }
    getPhoneCode() {
        if(!this.state.form.phone){
            Toast.showWarning('请填写正确手机号');
            return false;
        }
        if(!this.state.form.picCode){
            Toast.showWarning('请填写图形验证码');
            return false;
        }
        axios.post('http://118.25.23.176:81/Account/SendCode',{
            Phone:this.state.form.phone,
            ImageCode:this.state.form.picCode
        }).then((res)=>{
            this.setState({overTime: 60});
            if(res.status == 200) {
                let test = setInterval(()=>{
                    this.setState({overTime: --this.state.overTime});
                    if(!this.state.overTime) {clearInterval(test)}
                },1000)
            }else{
                Toast.showWarning(res.msg);
            }
        }).then((error)=>{
            // console.warn(error)
        })
    }
    phoneCodeBtn() {
        return !this.state.overTime?(
        <View style={styles.getPhoneCode}>
            <Text style={{color:'#ffffff'}}>获取验证码</Text>
        </View>):(
            <View style={[styles.getPhoneCode,{backgroundColor:'#eee'}]}>
                <Text style={{color:'#999'}}>已发送{this.state.overTime<10?('0'+this.state.overTime):this.state.overTime}</Text>
            </View>
        )
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
                        underlineColorAndroid="transparent"
                        onChangeText={this.changePhone.bind(this)}
                        onBlur={this.verifyPhone.bind(this)}/>
                    </View>
                </View>
                <View style={styles.loginPhoneRow}>
                    <View style={styles.loginPhoneInputWrapper}>
                        <TextInput style={styles.loginPhoneInput}
                        placeholder="验证码"
                        underlineColorAndroid="transparent"
                        onChangeText={this.changePicCode.bind(this)}/>
                    </View>
                    <TouchableNativeFeedback onPress={this.changeImgCode.bind(this)}>
                        <Image style={{height: '80%',width:100,borderRadius: 5}}
                            source={{uri:this.state.imgCode}}/>
                    </TouchableNativeFeedback>
                </View>
                <View style={styles.loginPhoneRow}>
                    <View style={styles.loginPhoneInputWrapper}>
                        <TextInput style={styles.loginPhoneInput}
                        placeholder="手机验证码"
                        underlineColorAndroid="transparent"
                        onChangeText={this.changeCode.bind(this)}/>
                    </View>

                    <TouchableOpacity onPress={!this.state.overTime?this.getPhoneCode.bind(this):null}>
                        {this.phoneCodeBtn()}
                    </TouchableOpacity>

                </View>

                <View style={styles.loginPhoneRow}>
                    <Text></Text>
                    <TouchableNativeFeedback onPress={this._login_account.bind(this)}>
                        <View>
                            <Text style={{color: '#6787bd'}}>用户名登录</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <TouchableNativeFeedback onPress={this._logined.bind(this)}>                    
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
        padding:14
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