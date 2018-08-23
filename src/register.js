import React,{ Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableNativeFeedback
} from 'react-native';

export default class Register extends Component {
    render() {
        return (
            <View style={styles.register}>
                <View style={styles.registerRow}>
                    <View style={[styles.registerInputWrapper,{width: '100%'}]}>
                        <TextInput style={styles.registerInput}
                        placeholder="手机号"
                        underlineColorAndroid="transparent"/>
                    </View>
                </View>
                <View style={styles.registerRow}>
                    <View style={styles.registerInputWrapper}>
                        <TextInput style={styles.registerInput}
                        placeholder="验证码"
                        underlineColorAndroid="transparent"/>
                    </View>
                    <Image
                        style={{height: '100%',width:100,borderRadius: 5}}
                        source={require('../Images/ImageCode.jpg')}/>
                </View>
                <View style={styles.registerRow}>
                    <View style={styles.registerInputWrapper}>
                        <TextInput style={styles.registerInput}
                        placeholder="手机验证码"
                        underlineColorAndroid="transparent"/>
                    </View>
                    <View style={styles.getPhoneCode}>
                    <Text style={{color:'#ffffff'}}>获取验证码</Text>
                    </View>
                </View>
                <View style={styles.registerRow}>
                    <View style={styles.registerInputWrapper}>
                        <TextInput style={styles.registerInput}
                        placeholder="推荐人手机号"
                        underlineColorAndroid="transparent"/>
                    </View>
                </View>
                <TouchableNativeFeedback onPress={this._logined}>
                    <View style={styles.registerBtn}>
                        <Text style={{color: '#ffffff'}}>注册</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    register: {
        paddingLeft: 37,
        paddingRight: 37 
    },
    registerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    registerInputWrapper: {
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
    registerBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        borderRadius: 5,
        backgroundColor: "#6787bd",
        marginTop: 7
    }
})