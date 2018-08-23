import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Platform,
    TextInput
} from 'react-native';

export default class walletKupo extends Component {
    transferList() {
        let list = [];
        let arr =['','','']
        for(let i=0;i<arr.length;i++) {
            list.push(
                <View style={styles.transferItem} key={i}>
                    <View style={styles.transferItemInfo}>
                        <Text>24</Text>
                    </View>
                    <View style={styles.transferItemInfo}>
                        <Text>2018-08-08</Text>
                    </View>
                    <View style={styles.transferItemInfo}>
                        <Text>通过</Text>
                    </View>
                </View>
            );
        }
        return list
    }
    render() {
        return (
            <View>
                <View style={styles.walletTitle}>
                    <Text style={{color:'#000000',fontSize:14}}>KUPO钱包</Text>
                </View>
                <View style={styles.walletHeader}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View style={styles.walletHeaderUnit}>
                            <Text style={{color:'rgba(255,251,240,0.7)',marginBottom:10,fontSize:12}}>可提现kupo</Text>
                            <Text style={{color:'#ffffff',fontSize:16}}>154</Text>
                        </View>
                        <View style={{borderRightWidth:0.5,height:20,borderColor:'rgba(255,255,255,0.7)'}}></View>
                        <View style={styles.walletHeaderUnit}>
                            <Text style={{color:'rgba(255,251,240,0.7)',marginBottom:10,fontSize:12}}>kupo钱包余额(2bit网站)</Text>
                            <Text style={{color:'#ffffff',fontSize:16}}>38.04</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.transfer}>
                    <View style={styles.transferContent}>
                        <Text style={{marginRight:14}}>划转数量</Text>
                        <TextInput style={{borderBottomWidth:1,borderBottomColor:'#999',padding:0,flex:1}}
                        underlineColorAndroid='transparent'/>
                    </View>
                    <View style={styles.transferBtnWrapper}>
                        <View style={styles.transferBtn}>
                            <Text style={{fontSize:12,color:'#fff'}}>划转至2bit用户钱包</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.transferTitle}>
                    <Text>划转记录</Text>
                </View>
                <View style={styles.transferList}>
                    <View style={styles.transferItemTop}>
                        <View style={styles.transferItemInfo}><Text>数量</Text></View>
                        <View style={styles.transferItemInfo}><Text>日期</Text></View>
                        <View style={styles.transferItemInfo}><Text>状态</Text></View>
                    </View>
                    {this.transferList()}
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    walletTitle: {
        paddingTop: 15,
        paddingBottom: 15,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    walletHeader: {
        alignItems:'center',
        height: 167,
        backgroundColor: '#6787bd',
        paddingTop: 29,
        marginBottom: -50,
    },
    walletHeaderUnit: {
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: 'center',
        width: '49%'
    },
    // 划转
    transfer: { 
        padding: 14,
        paddingLeft: 28,
        paddingRight: 28,
        marginLeft: 28,
        marginRight: 28,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    transferContent: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    transferBtnWrapper: {
        alignItems: 'center',
        paddingTop: 14
    },
    transferBtn: {
        backgroundColor: '#6787bd',
        borderRadius: 5,
        padding: 14,
        paddingTop: 8,
        paddingBottom: 8
    },
    // 划转记录
    transferTitle: {
        padding: 14
    },
    transferList: {
        padding: 14,
        backgroundColor: '#fff'
    },
    transferItemTop: {
        flexDirection: 'row',
    },
    transferItem: {
        flexDirection: 'row',
        paddingTop: 14,
        paddingBottom: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
       
    },
    transferItemInfo: {
        width: '33.3%',
        alignItems: 'center'
    }
})