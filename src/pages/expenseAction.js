import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from 'react-native';
let navigation = null;
import IconIonicons from 'react-native-vector-icons/Ionicons'
export default class expenseAction extends Component {
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
            <ScrollView style={{flex:1}}>
            <View style={{paddingBottom:20}}>   
                <View style={styles.expenseAction}>
                    <View style={[styles.expenseActionItem,{borderColor:'transparent'}]}>
                        <View style={{width:90}}>
                            <Text style={styles.expenseInputTitle}>手机号</Text>
                        </View>
                        <Text>123321646</Text>
                    </View>
                    <View style={styles.expenseActionItem}>
                        <View style={{width:90}}>
                            <Text style={styles.expenseInputTitle}>推荐人</Text>
                        </View>
                        <Text>无</Text>
                    </View>
                    <View style={styles.expenseActionItem}>
                        <View style={{width:80}}>
                            <Text style={styles.expenseInputTitle}>付款人</Text>
                        </View>
                        <TextInput
                        placeholder="收款人姓名"
                            style={styles.expenseTextInput}
                            underlineColorAndroid='transparent'
                        />
                        <IconIonicons name="ios-arrow-forward" size={25} color="#4398ff"/>

                    </View>
                    <View style={styles.expenseActionItem}>
                        <View style={{width:80}}>
                            <Text style={styles.expenseInputTitle}>付款银行</Text>
                        </View>
                        <TextInput
                        placeholder="请输入银行卡号"
                            style={styles.expenseTextInput}
                            underlineColorAndroid='transparent'
                        />
                    </View>
                    <View style={[styles.expenseActionItem,{marginBottom:20}]}>
                        <View style={{width:80}}>
                            <Text style={styles.expenseInputTitle}>付款卡号</Text>
                        </View>
                        <TextInput
                        placeholder="请输入银行名称"
                            style={styles.expenseTextInput}
                            underlineColorAndroid='transparent'
                        />
                    </View>
                    <View style={[styles.expenseActionItem,{borderColor:'transparent'}]}>
                        <View style={{width:90}}>
                            <Text style={{color:'#000'}}>购买数量</Text>
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
                    <View style={styles.expenseActionItem}>
                        <View style={{width:80}}>
                            <Text style={styles.expenseInputTitle}>购买金额</Text>
                        </View>
                        <TextInput
                        placeholder="请输入金额"
                            style={styles.expenseTextInput}
                            underlineColorAndroid='transparent'
                        />
                    </View>
                    <View style={styles.expenseActionItem}>
                        <View style={{width:80}}>
                            <Text style={styles.expenseInputTitle}>分配KUPO</Text>
                        </View>
                        <TextInput
                        placeholder=""
                            style={styles.expenseTextInput}
                            underlineColorAndroid='transparent'
                        />
                    </View>
                    <View style={[styles.expenseActionItem,{marginBottom:14}]}>
                        <View style={{width:80}}>
                            <Text style={styles.expenseInputTitle}>备注</Text>
                        </View>
                        <TextInput
                        placeholder="请输入"
                            style={styles.expenseTextInput}
                            underlineColorAndroid='transparent'
                        />
                    </View>
                    <View style={[styles.expenseActionItem,{borderColor:'transparent'}]}>
                        <Text>上传付款电子凭证附件可加快审核进度</Text>
                    </View>
                    <View style={[styles.expenseActionItem,{borderColor:'transparent'}]}>
                        <TouchableOpacity>
                            <View style={styles.uploadBtn}>
                                <IconIonicons name="md-cloud-upload" size={15} color="#fff"/>
                                <Text style={{marginLeft:10,color:'#fff'}}>附件上传</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity>
                    <View style={styles.postBtn}>
                        <Text style={{color:'#fff',fontSize:14}}>提交</Text>
                    </View>
                </TouchableOpacity>
            </View>
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
    
    expenseAction: {
        margin: 10,
        padding: 14,
        backgroundColor: '#ffffff',
        borderRadius: 5
    },
    expenseActionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#eeeeee',
        height: 50
    },
    expenseInputTitle: {
        color: '#000000'
    },
    expenseTextInput: {
        flex:1,
        height: 30,
        marginRight: 14
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
    uploadBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#6787bd',
        borderRadius: 5,
        padding:10
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