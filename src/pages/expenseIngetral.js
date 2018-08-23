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
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
let navigation = null;
class expenseIngetral extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
        
        headerTitle: navigation.state.params?navigation.state.params.key:null,
        //设置滑动返回的距离
        gestureResponseDistance: {horizontal: 300},

        //是否开启手势滑动返回，android 默认关闭 ios打开
        // gesturesEnabled: true,

        //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题
        headerBackTitle: null,
        //导航栏的样式
        headerStyle: styles.headerStyle,
        //导航栏文字的样式
        headerTitleStyle: styles.headerTitleStyle,
        //返回按钮的颜色
        headerTintColor: 'white',

        //隐藏顶部导航栏
        // header: null,

        //设置顶部导航栏右边的视图  和 解决当有返回箭头时，文字不居中
        headerRight: (<View/>),

        //设置导航栏左边的视图
        // headerLeft: (<View/>),

        }

    );
    constructor(props) {
        super(props);
        navigation=this.props.navigation
    }
    render() {
        return (
            <ScrollView>            
                <View style={styles.address}>
                    <View style={styles.addressItem}>
                        <View style={{width: 30}}>
                            <IconFontAwesome5 name="user-alt" size={15} color="#999"/>
                        </View>
                        <TextInput placeholder="收货人"
                        style={styles.addressInput}
                        underlineColorAndroid='transparent'/>
                        <IconIonicons name="ios-arrow-forward" size={20} color="#4398ff"/>
                    </View>
                    <View style={styles.addressItem}>
                        <View style={{width: 30}}>
                            <IconEntypo name="location" size={14} color="#999"/>
                        </View>
                        <TextInput placeholder="收货地址"
                        style={styles.addressInput}
                        underlineColorAndroid='transparent'/>
                    </View>
                    <View style={styles.addressItem}>
                        <View style={{width: 30}}>
                            <IconFontAwesome5 name="mobile-alt" size={18} color="#999"/>
                        </View>
                        <TextInput placeholder="手机号"
                        style={styles.addressInput}
                        underlineColorAndroid='transparent'/>
                    </View>
                </View>
                <Image style={{width:'100%',height:4,marginBottom:14}}
                    source={require('../../Images/bottomAddress.jpg')}/>
                <View style={styles.expenseIngetral}>
                    <View style={[styles.expenseIngetralItem,{height:50}]}>
                        <View style={{width:90}}>
                            <Text style={{color:'#000',marginRight:14}}>购买数量</Text>
                        </View>
                        <View style={styles.addMinus}>
                            <TouchableOpacity style={styles.add}>
                                <View>
                                    <IconIonicons name="ios-add" size={15} color="#999"/>
                                </View>
                            </TouchableOpacity>
                            <TextInput underlineColorAndroid="transparent"/>
                            <TouchableOpacity style={styles.minus}>
                                <View>
                                    <IconIonicons name="ios-remove" size={15} color="#999"/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.expenseIngetralItem}>
                        <View style={{width:90}}>
                            <Text style={{color:'#000',marginRight:14}}>可用积分</Text>
                        </View>
                        <Text>0</Text>
                    </View>
                    <View style={styles.expenseIngetralItem}>
                        <View style={{width:90}}>
                            <Text style={{color:'#000',marginRight:14}}>所需积分</Text>
                        </View>
                        <Text>0</Text>
                    </View>
                    <View style={styles.expenseIngetralItem}>
                        <View style={{width:90}}>
                            <Text style={{color:'#000',marginRight:14}}>分配KUPO</Text>
                        </View>
                        <Text>0</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <View style={styles.postBtn}>
                        <Text style={{color:'#fff',fontSize:14}}>提交</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        width: 240,
        height: 45,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4398ff',
    },
    headerStyle: {
        backgroundColor: '#6787bd',
    },
    headerTitleStyle: {
        color: 'white',
        //设置标题的大小
        fontSize: 18,
        //居中显示
        alignSelf: 'center',
    },

    address: {
        padding: 14,
        backgroundColor: '#ffffff',
    },
    addressItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderBottomWidth: 1,
        borderColor: '#eeeeee',
        height: 50
    },
    addressInput:{
        flex: 1,
        marginLeft: 10
    },
    expenseIngetral: {
        padding: 14,
        backgroundColor: '#ffffff',
        marginBottom: 40
    },
    expenseIngetralItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        height: 40
    },
    postBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 14,
        marginRight: 14,
        height: 40,
        backgroundColor: "#6787bd",
        borderRadius: 5,
    },
    addMinus: {
        flexDirection: 'row',
        borderColor: '#efefef',
        borderWidth: 1,
        borderRadius: 2
    },
    add: {
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    minus: {
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10
    }
    
});

module.exports = expenseIngetral;