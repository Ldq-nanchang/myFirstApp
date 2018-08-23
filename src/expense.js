import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    PixelRatio,
    TouchableNativeFeedback,
    TouchableOpacity
} from 'react-native';

let navigation = null
export default class Expense extends Component {
    constructor(props) {
        super(props);
        navigation = this.props.navigation;
    }
    expenseList() {
        let list = [];
        let test = ['','','','','','',''];
        for(let i=0;i<test.length;i++) {
            list.push(
                <View key={i} style={styles.expenseItem}>
                    <View style={styles.expenseItemInfo}>
                        <Text>2018-06-20</Text>
                    </View>
                    <View style={styles.expenseItemInfo}>
                        <Text>5394</Text>
                    </View>
                    <View style={styles.expenseItemInfo}>
                        <Text>5400</Text>
                    </View>
                    <View style={styles.expenseItemInfo}>
                        <View style={styles.expenseItemBtn}>
                            <Text style={{color: '#ffffff',fontSize:12}}>编辑</Text>
                        </View>
                    </View>
                </View> 
            )
        }
        return list;
    }
    render() {
        return (
            <View>
                <View style={styles.expenseTitle}>
                    <Text style={{color:'#000000',fontSize:14}}>消费</Text>
                </View>
                <View style={styles.expenseHeader}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View style={styles.expenseHeaderUnit}>
                            <Text style={{color:'rgba(255,251,240,0.7)',marginBottom:10}}>消费额</Text>
                            <Text style={{color:'#ffffff',fontSize:16}}>666666</Text>
                        </View>
                        <View style={{borderRightWidth:0.5,height:20,borderColor:'rgba(255,255,255,0.7)'}}></View>
                        <View style={styles.expenseHeaderUnit}>
                            <Text style={{color:'rgba(255,251,240,0.7)',marginBottom:10}}>配额</Text>
                            <Text style={{color:'#ffffff',fontSize:16}}>666666</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.expenseHeaderBtns}>
                    <TouchableOpacity  onPress={() => navigation.navigate('expenseAction', { key: '消费额登记' })}>
                        <View style={[styles.expenseHeaderBtn,{marginRight:14}]}>
                            <Text style={{color:'#fff',fontSize:12}}>消费登记</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('expenseIngetral', { key: '积分兑换' })}>
                        <View style={styles.expenseHeaderBtn}>
                            <Text style={{color:'#fff',fontSize:12}}>积分兑换</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.expenseListTitle}>
                    <Text>消费信息</Text>
                </View>
                <View style={styles.expenseList}>
                    <View style={styles.expenseItem}>
                        <View style={styles.expenseItemInfo}>
                            <Text>时间</Text>
                        </View>
                        <View style={styles.expenseItemInfo}>
                            <Text>消费额</Text>
                        </View>
                        <View style={styles.expenseItemInfo}>
                            <Text>配额</Text>
                        </View>
                        <View style={styles.expenseItemInfo}>
                            <Text>操作</Text>
                        </View>
                    </View>
                    <ScrollView style={{height:210,width:'100%'}}>
                        {this.expenseList()}                 
                    </ScrollView>
                </View>
            </View>
        )
    }   
}

const styles = StyleSheet.create({
    expenseTitle: {
        paddingTop: 15,
        paddingBottom: 15,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    expenseHeader: {
        alignItems:'center',
        height: 167,
        backgroundColor: '#6787bd',
        paddingTop: 29,
        marginBottom: -40,
    },
    expenseHeaderUnit: {
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: 'center',
        width: '49%'
    },
    // 顶部按钮
    expenseHeaderBtns: {
        marginLeft: 28,
        marginRight: 28,
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 24,
        justifyContent: 'space-around',
        borderRadius: 5
    },
    expenseHeaderBtn: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        // borderWidth: 1,
        // borderColor: '#6787bd',
        backgroundColor: '#6787bd',
        borderRadius: 15,
        
    },
    expenseListTitle: {
        padding: 14
    },
    expenseList: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#ffffff'
    },
    expenseItem: {
        paddingTop: 10,
        paddingBottom:10,
        flexDirection: 'row',
    },
    expenseItemInfo: {
        width: '25%',
        alignItems: 'center'
    },
    expenseItemBtn: {
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#6787bd',
        borderRadius: 10
    }
});