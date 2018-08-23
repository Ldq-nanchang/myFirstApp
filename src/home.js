import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    SrollView,
    PixelRatio
} from 'react-native';

export default class HomeIndex extends Component {
    render() {
        return (
            <View>
                <View style={styles.homeTop}>
                    <View style={[styles.homeTopItem, styles.homeTopItemLeft]}>
                        <Text style={styles.defaultColor}>三</Text>
                    </View>
                    <View style={styles.homeTopItem}>
                        <Image
                            style={styles.logo}
                            source={require('../Images/kupo_icon.png')}
                        />
                    </View>
                    <View style={[styles.homeTopItem, styles.homeTopItemRight]}>
                        <Text style={[styles.defaultColor,{paddingRight: 5}]}>KUPO</Text>
                        <Text style={styles.defaultColor}>大数据平台</Text>
                    </View>
                </View>
                <View style={styles.topBtns}>
                    <View style={styles.topBtn}>
                        <Image
                            style={styles.topBtnsIcon}
                            source={require('../Images/topBtn01.png')}/>
                        <Text style={styles.topBtnTxt}>持有查询</Text>
                    </View>
                    <View style={styles.topBtn}>
                        <Image
                            style={styles.topBtnsIcon}
                            source={require('../Images/topBtn01.png')}/>
                        <Text style={styles.topBtnTxt}>下级用户</Text>
                    </View>
                    <View style={styles.topBtn}>
                        <Image
                            style={styles.topBtnsIcon}
                            source={require('../Images/topBtn03.png')}/>
                        <Text style={styles.topBtnTxt}>KUPO钱包</Text>
                    </View>
                    <View style={styles.topBtn}>
                        <Image
                            style={styles.topBtnsIcon}
                            source={require('../Images/topBtn04.png')}/>
                        <Text style={styles.topBtnTxt}>邀请</Text>
                    </View>
                </View>
                <View style={styles.btnListWrapper}>
                    <View style={styles.btnList}>
                        <View style={styles.btn}>
                            <Image                           
                                style={styles.btnIcon}
                                source={require('../Images/btn01.png')}/>
                            <Text style={styles.btnTxt}>消费日志</Text>
                        </View>
                        <View style={styles.btn}>
                            <Image                           
                                style={styles.btnIcon}
                                source={require('../Images/btn02.png')}/>
                            <Text style={styles.btnTxt}>KUPO转账</Text>
                        </View>
                        <View style={styles.btn}>
                            <Image                           
                                style={styles.btnIcon}
                                source={require('../Images/btn03.png')}/>
                            <Text style={styles.btnTxt}>积分提现</Text>
                        </View>
                        <View style={styles.btn}>
                            <Image                           
                                style={styles.btnIcon}
                                source={require('../Images/btn04.png')}/>
                            <Text style={styles.btnTxt}>每天收益</Text>
                        </View>
                    </View>
                    <View style={[styles.btnList,{marginTop: 15}]}>
                        <View style={styles.btn}>
                        <Image                           
                            style={styles.btnIcon}
                            source={require('../Images/btn05.png')}/>
                        <Text style={styles.btnTxt}>账户信息</Text>
                        </View>
                        <View style={styles.btn}>
                        <Image                           
                            style={styles.btnIcon}
                            source={require('../Images/btn06.png')}/>
                        <Text style={styles.btnTxt}>消费额登记</Text>
                        </View>
                        <View style={styles.btn}>
                        <Image                           
                            style={styles.btnIcon}
                            source={require('../Images/btn07.png')}/>
                        <Text style={styles.btnTxt}>积分日志</Text>
                        </View>
                        <View style={styles.btn}>
                        <Image                           
                            style={styles.btnIcon}
                            source={require('../Images/btn08.png')}/>
                        <Text style={styles.btnTxt}>全部服务</Text>
                        </View>                       
                    </View>
                </View>
                <View style={styles.test}>
                    <Image
                        style={styles.textImg}
                        source={require('../Images/timg.jpg')}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        height: 25,
        width: 55
    },
    defaultColor: {
        color: '#fff'
    },
    homeTop: { //页面顶部
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 40,
        backgroundColor: '#6787bd'
    },
    homeTopItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    homeTopItemLeft: {
        paddingLeft: 15,
        justifyContent: 'flex-start'
    },
    homeTopItemRight: {
        paddingRight: 15,
        justifyContent: 'flex-end'
    },
    topBtns: { //顶部常用按钮
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#6787bd',
        height: 87,
    },
    topBtn: {
        justifyContent: 'center',
        alignItems: 'center'    
    },
    topBtnsIcon: {
        width: 40,
        height: 40
    },
    topBtnTxt: {
        marginTop: 5,
        color: '#ffffff'
    },
    btnListWrapper: {//快捷按钮
        borderRadius: 5,
        backgroundColor: '#ffffff',
        margin: 10,
        padding: 15
    },
    btnList: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnIcon: {
        width: 30,
        height: 30
    },
    btnTxt: {
        marginTop: 5,
        color: '#333'
    },
    test: {
        height: 200,
        backgroundColor: 'red'
    },
    textImg: {
        width: '100%',
        height: '100%'
    }

})
console.log(PixelRatio.get())