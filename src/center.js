import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconEntypo from 'react-native-vector-icons/Entypo';
let navigation = null
class center extends Component {
    constructor(props) {
        super(props);
        navigation = this.props.navigation;
    }
    render() {
        return (
            <ScrollView>
                <View style={{paddingBottom:20}}>
                    <View style={styles.headerBackground}></View>
                    <View style={styles.header}></View>
                    <View style={styles.userInfoWrapper}>
                        <View style={styles.userIcon}>
                            <IconFontAwesome name="user" size={20} color="#999999"/>
                        </View>
                        <Text>我的资产</Text>
                        <Text style={{fontSize:20,color:'#000'}}>1100.000000</Text>
                        <View style={styles.headerContent}>
                            <View style={styles.headerContentItem}>
                                <Text style={{fontSize:12,marginBottom:5}}>团队总资产</Text>
                                <Text style={{fontSize:14,color:'#000'}}>0.00</Text>
                            </View>
                            <View style={[styles.headerContentItemCenter,]}>
                                <Text style={{fontSize:12,marginBottom:5}}>团队总资产</Text>
                                <Text style={{fontSize:14,color:'#000'}}>0.00</Text>
                            </View>
                            <View style={styles.headerContentItem}>
                                <Text style={{fontSize:12,marginBottom:5}}>团队总资产</Text>
                                <Text style={{fontSize:14,color:'#000'}}>0.00</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.product}>
                        <View style={styles.productTitle}>
                            <Text style={{color: '#000'}}>汇款信息</Text>
                        </View>
                        <View style={styles.remittance}>
                            <View style={styles.remittanceItem}>
                                <Text style={{color:'#6787bd'}}>购买金元贵酒  送KUPO</Text>
                            </View>
                            <View style={styles.remittanceItem}>
                                <View style={{width:80}}>
                                    <Text style={{color:'#000',marginRight:5}}>收款账户:</Text>
                                </View>
                                <Text>元贵（湖北）酒业有限公司</Text>
                            </View>
                            <View style={styles.remittanceItem}>
                                <View style={{width:80}}>
                                    <Text style={{color:'#000',marginRight:5}}>开户银行:</Text>
                                </View>
                                <Text>平安银行武汉东西湖支行</Text>
                            </View>
                            <View style={styles.remittanceItem}>
                                <View style={{width:80}}>
                                    <Text style={{color:'#000',marginRight:5}}>收款账号:</Text>
                                </View>
                                <Text>1500 0094 0785 03</Text>
                            </View>
                            <View style={styles.remittanceItem}>
                                <View style={{width:80}}>
                                    <Text style={{color:'#000',marginRight:5}}>支付宝账号:</Text>
                                </View>
                                <Text>1025592577@qq.com</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.centerList}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Earnings',{key:'每天收益'})}}>
                        <View style={styles.centerItem}>
                            <View style={{flexDirection:'row'}}>
                                <View style={{width:40}}>
                                    <IconFontAwesome name="money" size={18} color='#999'/>
                                </View>
                                <Text style={{color:'#000'}}>每天收益</Text>
                            </View>
                            <IconIonicons name="ios-arrow-forward" size={20} color="#999"/>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.centerItem}>
                            <View style={{flexDirection:'row'}}>
                                <View style={{width:40}}>
                                    <IconIonicons name="md-qr-scanner" size={18} color='#999'/>
                                </View>
                                <Text style={{color:'#000'}}>邀请码</Text>
                            </View>
                            <IconIonicons name="ios-arrow-forward" size={20} color="#999"/>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.centerItem}>
                            <View style={{flexDirection:'row'}}>
                                <View style={{width:40}}>
                                    <IconFontAwesome name="database" size={18} color='#999'/>
                                </View>
                                <Text style={{color:'#000'}}>积分日志</Text>
                            </View>
                            <IconIonicons name="ios-arrow-forward" size={20} color="#999"/>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.centerItem}>
                            <View style={{flexDirection:'row'}}>
                                <View style={{width:40}}>
                                    <IconFontAwesome name="sitemap" size={18} color='#999'/>
                                </View>
                                <Text style={{color:'#000'}}>下级用户</Text>
                            </View>
                            <IconIonicons name="ios-arrow-forward" size={20} color="#999"/>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.centerItem}>
                            <View style={{flexDirection:'row'}}>
                                <View style={{width:40}}>
                                    <IconFontAwesome5 name="hand-holding-usd" size={18} color='#999'/>
                                </View>
                                <Text style={{color:'#000'}}>持有查询</Text>
                            </View>
                            <IconIonicons name="ios-arrow-forward" size={20} color="#999"/>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.centerItem}>
                            <View style={{flexDirection:'row'}}>
                                <View style={{width:40}}>
                                    <IconEntypo name="swap" size={18} color='#999'/>
                                </View>
                                <Text style={{color:'#000'}}>转账</Text>
                            </View>
                            <IconIonicons name="ios-arrow-forward" size={20} color="#999"/>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.centerItem}>
                            <View style={{flexDirection:'row'}}>
                                <View style={{width:40}}>
                                    <IconEntypo name="log-out" size={18} color='#999'/>
                                </View>
                                <Text style={{color:'#000'}}>积分提现</Text>
                            </View>
                            <IconIonicons name="ios-arrow-forward" size={20} color="#999"/>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.centerItem}>
                            <View style={{flexDirection:'row'}}>
                                <View style={{width:40}}>
                                    <IconFontAwesome5 name="shopping-bag" size={18} color='#999'/>
                                </View>
                                <Text style={{color:'#000'}}>KUPO钱包</Text>
                            </View>
                            <IconIonicons name="ios-arrow-forward" size={20} color="#999"/>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.postBtn}>
                            <Text style={{color:'#fff',fontSize:14}}>退出</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    headerBackground: {
        height: 187,
        backgroundColor: '#6787bd',
        justifyContent: 'space-between',
        marginBottom: -115,
    },
    header: {
        alignItems: 'center',
        height: 170,
        marginLeft: 14,
        marginRight: 14,
        marginBottom: 21,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingTop: 18,
        paddingRight: 18,
        paddingBottom: 18,
        paddingLeft: 18,
        marginBottom: -200,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        // shadowColor: Color.CMHeaderBgColor,

    },
    userInfoWrapper: {
        height: 200,
        alignItems: 'center',
        // backgroundColor: 'green'
    },
    userIcon: {
        justifyContent: 'center',
        alignItems: 'center',  
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: '#fff'
    },
    headerContent: {
        flexDirection: 'row',       
        marginTop: 20
    },
    headerContentItem: {
        width: '35%',
        alignItems: 'center',
        padding: 10,
    },
    headerContentItemCenter: {
        width: '30%',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#efefef',
        padding: 10
    },
    // 金元贵酒
    product: {
        margin: 14
    },
    productTitle: {
        borderLeftWidth: 2,
        borderColor: '#6787bd',
        paddingLeft: 4
    },
    remittance: {
        padding: 14,
        backgroundColor: '#fff',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        borderRadius: 5,
        marginTop: 14,
    },
    remittanceItem: {
        flexDirection: 'row',
        padding: 5,
    },
    centerList: {
        marginTop: 14,
        backgroundColor: '#fff',
        padding: 14,
        marginBottom: 14
    },
    centerItem: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#eee',
        padding: 14,
        justifyContent:'space-between',
    },
    postBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        height: 40,
        backgroundColor: "#6787bd",
        borderRadius: 5
    },

    
})
export default center;