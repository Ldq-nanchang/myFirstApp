import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SrollView,
    TouchableOpacity
} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconIonicons from 'react-native-vector-icons/Ionicons'
let navigation = null;

export default class HomeInfo extends Component {

    constructor(props) {
        super(props);
        navigation=this.props.navigation
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.navigation.dispatch(resetAction)
    //     },1000)
    //     navigation.dispatch(resetAction)
    // }
    render() {
        return (
            <View>
                {/* <TouchableOpacity onPress={() => {navigation.navigate('Test',{key:'sss'})}}>
                    <View>
                        <Text>222222222222222222222</Text>                   
                    </View>
                </TouchableOpacity> */}
                <View style={styles.header}>
                    <View style={styles.headerTop}>
                        <View style={styles.headerTopIcon}>
                        <IconFontAwesome name="user" size={20} color="#999999"/>
                        </View>
                        <Text style={{color:'#ffffff'}}>17393925659</Text>
                        <View style={styles.userType}>
                            <View style={styles.headerStarIcon}>
                                <IconFontAwesome name="star" size={15} color="#ffffff"/>
                            </View>
                            <Text style={{color: '#ffffff',fontSize: 12}}>普通用户</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.headerInfo}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:27}}>
                        <View>
                            <Text style={{color:'#000000',fontSize:12}}>数字资产</Text>
                            <Text style={{color:'#000000',fontSize: 24}}>0</Text>
                        </View>
                        <View>
                            <View style={styles.headerInfoBtn}>
                                <Text style={{color:'#6787bd',fontSize:12}}>消费明细</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <View style={styles.headerContent}>
                            <Text style={{color: '#727272',fontSize:12}}>市值</Text>
                            <Text style={{fontSize: 18}}>0</Text>
                        </View>
                        <View style={[styles.headerContent,styles.headerContentCenter]}>
                            <Text style={{color: '#727272',fontSize:12}}>交易资产</Text>
                            <Text style={{fontSize: 18}}>0</Text>
                        </View>
                        <View style={styles.headerContent}>
                            <Text style={{color: '#727272',fontSize:12}}>交易资产市值</Text>
                            <Text style={{fontSize: 18}}>0</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.headerBottom}>
                    <Text>当前KUPO消费兑换率</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{color:'#6787bd',marginRight:8}}>1.100000</Text>
                        <IconIonicons name="ios-arrow-forward" size={15} color="#6787bd"/>
                    </View>
                </View>
                <View style={styles.earnings}>
                    <View style={styles.earningsTitle}>
                        <View style={{borderLeftWidth:2,borderColor:'#6787bd',paddingLeft:5}}>
                            <Text style={{color:'#000000'}}>推广收益</Text>
                        </View>
                        <Text style={{color: '#6787bd'}}>积分明细</Text>
                    </View>
                    <View style={styles.earningsContent}>
                        <View style={styles.earningsContentAction}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <IconFontAwesome name="diamond" size={15} color="#61b9e2"/>
                                
                                <Text style={{color:'#000000',marginLeft:10}}>我的总积分0</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <View style={[styles.earningsBtn,{marginRight:10}]}>
                                    <Text style={{color:'#ffffff',fontSize:12}}>提现</Text>
                                </View>
                                <View style={styles.earningsBtn}>
                                    <Text style={{color:'#ffffff',fontSize:12}}>兑换</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                            <View style={styles.headerContent}>
                                <Text style={{color: '#727272',fontSize:12}}>未使积分</Text>
                                <Text style={{fontSize: 18}}>0</Text>
                            </View>
                            <View style={styles.headerContent}>
                                <Text style={{color: '#727272',fontSize:12}}>已使用积分</Text>
                                <Text style={{fontSize: 18}}>0</Text>
                            </View>
                            <View style={styles.headerContent}>
                                <Text style={{color: '#727272',fontSize:12}}>昨日收益积分</Text>
                                <Text style={{fontSize: 18}}>0</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: 187,
        backgroundColor: '#6787bd',
        justifyContent: 'space-between',
        marginBottom: -115,
        // borderBottomLeftRadius: 20,
        // borderBottomRightRadius: 20
    },
    headerTop: {
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 14,
        paddingRight: 14,
        flexDirection: 'row',
        alignItems: 'center' 
    },
    headerTopIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        backgroundColor: '#ffffff',
        borderRadius: 30,
        marginRight: 10
    },
    userType: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        height: 18,
        backgroundColor: 'rgba(0,0,0,0.3)',
        marginLeft: 10,
        paddingRight: 10,
    },
    headerStarIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 18,
        height: 18,
        borderRadius: 18,
        backgroundColor: "#eba642",
        marginRight: 10,
    },
    // 头部实时信息
    headerInfo: {
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
    },
    headerInfoBtn: {
        paddingLeft:10,
        paddingRight:10,
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:'#eceff4',
        borderRadius: 15,
    },
    headerContent: {
        width: '33%',
        alignItems: 'center'
    },
    headerContentCenter: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#eeeeee'
    },
    headerBottom: {
        marginLeft: 14,
        marginRight: 14,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        padding: 19,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 21,
    },
    // 推广收益
    earnings: {
        marginLeft: 14,
        marginRight: 14
    },
    earningsTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
        paddingBottom: 5,
    },
    earningsContent: {
        padding: 19,
        backgroundColor: '#ffffff',
    },
    earningsContentAction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    earningsBtn: {
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 12,
        backgroundColor: '#6787bd',
    }

})