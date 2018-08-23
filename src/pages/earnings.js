import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Platform
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Echarts from 'native-echarts';
import Dimensions from 'Dimensions';
const {width} = Dimensions.get('window');
export default class earnings extends Component {
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
        this.state = {
          item01:[3, 3, 7, 2, 2, 7, 13, 16,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
          item02: [6, 9, 9, 2, 8, 7, 17, 18,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
          item03: [6, 9, 9, 2, 8, 7, 17, 18,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
          state: {date:"2016-05-15"},
          date: '2016-05-16'
        }
    }
   
    render() {
      const optionBar = {
            //点击某一个点的数据的时候，显示出悬浮窗
            tooltip : {
                trigger: 'axis'
            },
            //可以手动选择现实几个图标
            legend: {
                data:['每日可解冻数','每日额外奖励','下线邀请每日获得'],
            },
            //各种表格
            // toolbox: {
            //     //改变icon的布局朝向
            //     //orient: 'vertical',
            //     show : true,
            //     showTitle:true,
            //     feature : {
            //         //show是否显示表格，readOnly是否只读
            //         dataView : {show: true, readOnly: false},
            //         magicType : {
            //           //折线图  柱形图    总数统计 分开平铺
            //           type: ['line', 'bar','stack','tiled'],
            //         },
   
            //     }
            // },
            xAxis : [
                {
                    //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                    boundaryGap:true,
                    type : 'category',
                    // name : '时间',
                    data : [
                        '2018-07-21','2018-07-22','2018-07-23','2018-07-24','2018-07-25','2018-07-26',
                        '2018-07-27','2018-07-28','2018-07-29','2018-07-30','2018-08-01','2018-08-02',
                        '2018-08-03','2018-08-04','2018-08-05','2018-08-06','2018-08-07','2018-08-08',
                        '2018-08-09','2018-08-10','2018-08-11','2018-08-12','2018-08-13','2018-08-14',
                        '2018-08-15','2018-08-16','2018-08-17','2018-08-18','2018-08-19','2018-08-20'
                    ]
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    // name : '销量(kg)'
                }
            ],
            dataZoom: [
                {   // 这个dataZoom组件，默认控制x轴。
                    type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                    start: 10,      // 左边在 10% 的位置。
                    end: 50,         // 右边在 60% 的位置。
                    zoomLock:true, 
                },
                
            ],
            //图形的颜色组
            color:['#d87a80','#5fb878','#ffb980'],
            //需要显示的图形名称，类型，以及数据设置
            series : [
                {
                    name:'每日可解冻数',
                    //默认显
                    type:'bar',
                    data:this.state.item01,
                    stack: 'test',
                },
                {
                    name:'每日额外奖励',
                    type:'bar',
                    data:this.state.item02,
                    stack: 'test'
                },
                {
                    name:'下线邀请每日获得',
                    type:'bar',
                    data:this.state.item03,
                    stack: 'test'
                }
            ]
          };
          const optionPie = {
            title : {
                // text: '某站点用户访问来源',
                // subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['每日可解冻数','每日额外奖励','下线邀请每日获得']
            },
            color:['#d87a80','#5fb878','#ffb980'],
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'每日可解冻数',shadowColor:'green'},
                        {value:310, name:'每日额外奖励'},
                        {value:234, name:'下线邀请每日获得'},
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
          };
    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={{padding:14,paddingBottom:5,backgroundColor:'#fff',flexDirection:'row',alignItems:'center'}}>                
                <Text style={{marginRight:14}}>开始时间</Text>
                <DatePicker
                style={{width: 200}}
                date={"2018-05-15"}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                // minDate="2016-05-01"
                // maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                    opacity:0
                },
                dateInput: {
                    borderColor: 'transparent',
                    marginLeft: 0,
                    backgroundColor:'#fff'
                }
                // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
                />
            </View>
            <View style={{padding:14,paddingTop:5,backgroundColor:'#fff',flexDirection:'row',alignItems:'center'}}>                
                <Text style={{marginRight:14}}>结束时间</Text>
                <DatePicker
                style={{width: 200}}
                date={"2018-05-15"}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                // minDate="2016-05-01"
                // maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                    opacity:0
                },
                dateInput: {
                    borderColor: 'transparent',
                    marginLeft: 0,
                    backgroundColor:'#fff'
                }
                // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
                />
            </View>
            <View style={{marginTop:14,backgroundColor:'#fff'}}>
                <Echarts option={optionBar} height={300} width={width}/>
            </View>
            <View style={{paddingTop:20,backgroundColor:'#fff'}}>
                <Echarts option={optionPie} height={300} width={width}/>
            </View>
        </View>
        </ScrollView>
      );
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



    container: {
        flex:1,
        overflow: 'hidden',

        paddingBottom: 20
      },
    
    
})