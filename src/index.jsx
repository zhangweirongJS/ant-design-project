import 'core-js/fn/object/assign';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
require('styles/style.scss');
import {Layout, Menu, Icon, Row, Col, Input, Button,Card,Carousel,Tabs,Table } from 'antd';
const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;
const Search = Input.Search;
const TabPane = Tabs.TabPane;
const $ = require('jquery');
const newsData = require('data/news.json')
const selectData = require('data/select.json')
const data = require('data/sales.json')
const data1 = require('data/realtime.json')
const noticeData = require('data/notice.json')
function callback(key) {
    console.log(key);
}
//布局框架
class Wrapper extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <TopHeader/>
                <ContentTop/>
                <ContentFood/>
                <ContentSteel/>
                <ContentOre/>
                <Footer/>
            </Layout>
        )
    }
}
//首页头部
class TopHeader extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <Header className="header">
                    {/*页眉*/}
                    <div className="page-header">
                        <Row className="container">
                            <Col className="page-header-left" span={6}>
                                <a href="#">注册</a> | <a href="#">登录</a>
                            </Col>
                            <Col className="page-header-right" span={18}>
                                <a href="#">港港网首页</a> | <a href="#">客户服务</a> | <a href="#">热线：4001-336-337</a>
                            </Col>
                        </Row>
                    </div>
                    {/*logo-搜索*/}
                    <div className="container center-header">
                        <div className="logo"><img src={'images/logo.png'}/></div>
                        <Search
                            className="search-hd"
                            placeholder="请输入关键词"
                            style={{width: 450,margin:'43px 0 43px 65px'}}
                            onSearch={value => console.log(value)}
                        />
                        <div className="button-hd">
                            <Button className="button">采购发布</Button>
                            <Button className="button">销售发布</Button>
                        </div>
                    </div>
                    {/*导航*/}
                    <div className="botm-2px">
                        <div className="container">
                            <div className="menu-title">商品分类</div>
                            <Menu
                                className="navframe"
                                theme="light"
                                mode="horizontal"
                                defaultSelectedKeys={['2']}
                                style={{lineHeight: '50px'}}
                            >
                                    <Menu.Item className="navli" key="1">我要买货</Menu.Item>
                                    <Menu.Item className="navli" key="2">我要卖货</Menu.Item>
                                    <Menu.Item className="navli" key="3">我要运货</Menu.Item>
                                    <Menu.Item className="navli" key="4">供应链管理</Menu.Item>
                                    <Menu.Item className="navli" key="5">云签约</Menu.Item>
                            </Menu>
                            <div className="grdata"><a href="#">营口港港融大数据平台</a></div>
                        </div> 
                    </div>
                </Header>
            </Layout>
        )
    }
}
//内容区第一大模块-分类区
//NewsItem
class NewsItem extends React.Component {
  render(){
    console.log(this.props.val.content)
    return (
      <li><Icon type="caret-right" /><a href="#">{this.props.val.time}-{this.props.val.content}</a></li>
    )
  }
}
class ContentTop extends React.Component{
    constructor () {
        super();
        this.state = {selectData: null,newsData:null,nData:noticeData[0]};
    }
    componentDidMount(){
    //   $.getJSON("data/select.json",function(res){
    //       this.setState({selectData: res});
    //     }.bind(this))
    //   $.getJSON("data/news.json",function(res){
          
    //       this.setState({newsData: res});
    //       console.log(this.state.newsData)
    //     }.bind(this))
   // this.setState({nData: noticeData[0]});
        console.log(this.state.noticeData)
    }

    render() {
        const newsList = [];
         $.each(newsData,function(k,v){
           newsList.push(<NewsItem val={v} key={k}/>)
        })
        
        return (
            <Layout className="container layout contenttop" >
                <Sider className="sider-menu" width={200} style={{background: '#fff'}}>
                    <Menu
                        mode="horizontal"
                        style={{height: '100%'}}
                    >
                        <SubMenu className="submenu" key="sub1" title={<span><span className="menuicon"><img src={'images/food.png'}/></span><span className="submenutxt">粮食</span><Icon className="righticon" type="right"/></span>} >
                            <Content className="submenu-cont" style={{top:-69}} >
                                <dl>
                                    <dt>品牌1</dt>
                                    <dd><a href="#">玉米</a></dd>
                                    <dd><a href="#">大豆</a></dd>
                                    <dd><a href="#">稻谷</a></dd>
                                    <dd><a href="#">小麦</a></dd>
                                    <dd><a href="#">高粱</a></dd>
                                    <dd><a href="#">深红芸豆</a></dd>
                                    <dd><a href="#">海军白芸豆</a></dd>
                                    <dd><a href="#">芝麻</a></dd>
                                    <dd><a href="#">亚麻籽</a></dd>
                                </dl>
                                <dl>
                                    <dt>库存地</dt>
                                    <dd><a href="#">华南地区</a></dd>
                                    <dd><a href="#">东北地区</a></dd>
                                    <dd><a href="#">华北地区</a></dd>
                                    <dd><a href="#">华东地区</a></dd>
                                    <dd><a href="#">西南地区</a></dd>
                                    <dd><a href="#">西北地区</a></dd>
                                    <dd><a href="#">台港澳地区</a></dd>
                                </dl>
                                <dl>
                                    <dt>交货地</dt>
                                    <dd><a href="#">营口港</a></dd>
                                    <dd><a href="#">上海港</a></dd>
                                    <dd><a href="#">深圳港</a></dd>
                                    <dd><a href="#">青岛港</a></dd>
                                    <dd><a href="#">宁波港</a></dd>
                                    <dd><a href="#">天津港</a></dd>
                                    <dd><a href="#">大连港</a></dd>
                                    <dd><a href="#">连云港</a></dd>
                                </dl>
                                <dl className="supplier">
                                    <dt>供应商</dt>
                                    <dd><img src={'images/gxicon.jpg'}/></dd>
                                    <dd><img src={'images/gxicon.jpg'}/></dd>
                                    <dd><img src={'images/gxicon.jpg'}/></dd>
                                    <dd><img src={'images/gxicon.jpg'}/></dd>
                                </dl>
                            </Content>
                        </SubMenu>
                        <SubMenu className="submenu" key="sub2" title={<span><span className="menuicon"><img src={'images/steel.png'}/></span><span className="submenutxt">钢材</span><Icon className="righticon" type="right"/></span>}>
                            <Content className="submenu-cont" style={{top:-132}}>
                                <dl>
                                    <dt>品牌2</dt>
                                    <dd><a href="#">玉米</a></dd>
                                    <dd><a href="#">大豆</a></dd>
                                    <dd><a href="#">稻谷</a></dd>
                                    <dd><a href="#">小麦</a></dd>
                                    <dd><a href="#">高粱</a></dd>
                                    <dd><a href="#">深红芸豆</a></dd>
                                    <dd><a href="#">海军白芸豆</a></dd>
                                    <dd><a href="#">芝麻</a></dd>
                                    <dd><a href="#">亚麻籽</a></dd>
                                </dl>
                                <dl>
                                    <dt>库存地</dt>
                                    <dd><a href="#">华南地区</a></dd>
                                    <dd><a href="#">东北地区</a></dd>
                                    <dd><a href="#">华北地区</a></dd>
                                    <dd><a href="#">华东地区</a></dd>
                                    <dd><a href="#">西南地区</a></dd>
                                    <dd><a href="#">西北地区</a></dd>
                                    <dd><a href="#">台港澳地区</a></dd>
                                </dl>
                                <dl>
                                    <dt>交货地</dt>
                                    <dd><a href="#">营口港</a></dd>
                                    <dd><a href="#">上海港</a></dd>
                                    <dd><a href="#">深圳港</a></dd>
                                    <dd><a href="#">青岛港</a></dd>
                                    <dd><a href="#">宁波港</a></dd>
                                    <dd><a href="#">天津港</a></dd>
                                    <dd><a href="#">大连港</a></dd>
                                    <dd><a href="#">连云港</a></dd>
                                </dl>
                                <dl className="supplier">
                                    <dt>供应商</dt>
                                    <dd><img src={'images/gxicon.jpg'}/></dd>
                                    <dd><img src={'images/gxicon.jpg'}/></dd>
                                    <dd><img src={'images/gxicon.jpg'}/></dd>
                                    <dd><img src={'images/gxicon.jpg'}/></dd>
                                </dl>
                            </Content>
                        </SubMenu>
                        <SubMenu className="submenu" key="sub3" title={<span><span className="menuicon"><img src={'images/coal.png'}/></span><span className="submenutxt">矿石</span><Icon className="righticon" type="right"/></span>}>
                            <Content className="submenu-cont" style={{top:-195}}>
                                <dl>
                                    <dt>品牌3</dt>
                                    <dd><a href="#">玉米</a></dd>
                                    <dd><a href="#">大豆</a></dd>
                                    <dd><a href="#">稻谷</a></dd>
                                    <dd><a href="#">小麦</a></dd>
                                    <dd><a href="#">高粱</a></dd>
                                    <dd><a href="#">深红芸豆</a></dd>
                                    <dd><a href="#">海军白芸豆</a></dd>
                                    <dd><a href="#">芝麻</a></dd>
                                    <dd><a href="#">亚麻籽</a></dd>
                                </dl>
                                <dl>
                                    <dt>库存地</dt>
                                    <dd><a href="#">华南地区</a></dd>
                                    <dd><a href="#">东北地区</a></dd>
                                    <dd><a href="#">华北地区</a></dd>
                                    <dd><a href="#">华东地区</a></dd>
                                    <dd><a href="#">西南地区</a></dd>
                                    <dd><a href="#">西北地区</a></dd>
                                    <dd><a href="#">台港澳地区</a></dd>
                                </dl>
                                <dl>
                                    <dt>交货地</dt>
                                    <dd><a href="#">营口港</a></dd>
                                    <dd><a href="#">上海港</a></dd>
                                    <dd><a href="#">深圳港</a></dd>
                                    <dd><a href="#">青岛港</a></dd>
                                    <dd><a href="#">宁波港</a></dd>
                                    <dd><a href="#">天津港</a></dd>
                                    <dd><a href="#">大连港</a></dd>
                                    <dd><a href="#">连云港</a></dd>
                                </dl>
                                <dl className="supplier">
                                    <dt>供应商</dt>
                                    <dd><img src={'images/gxicon.jpg'}/></dd>
                                    <dd><img src={'images/gxicon.jpg'}/></dd>
                                    <dd><img src={'images/gxicon.jpg'}/></dd>
                                    <dd><img src={'images/gxicon.jpg'}/></dd>
                                </dl>
                            </Content>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content className="banner">
                    <Carousel autoplay>
                        <div className="custom-image">
                            <img src={'images/img1.jpg'} alt="" />
                        </div>
                        <div className="custom-image">
                            <img src={'images/img1.jpg'} alt="" />
                        </div>
                    </Carousel>
                </Content>
                <Content className="tabframe">
                    <div className="login-new">
                        <div className="login-reg">
                            <Button className="lobtn login"><img src={'images/login.png'} alt="" /><span>登录</span></Button>
                            <Button className="lobtn register"><img src={'images/zc.png'} alt="" /><span>免费注册</span></Button>
                        </div>
                        <Tabs className="tabsli" type="card">
                            <TabPane tab="公告" key="1">
                                <ul>
                                  {newsList}
                                
                                </ul>
                            </TabPane>
                            <TabPane tab="新闻" key="2">Content of Tab Pane 2</TabPane>
                            <TabPane tab="资讯" key="3">Content of Tab Pane 3</TabPane>
                        </Tabs>
                    </div>
                    <div className="button-tip-frame">
                        <Button className="btn-tip zxmy"><img src={'images/computer.png'} alt="" /><span>在线贸易</span></Button>
                        <Button className="btn-tip dtgz"><img src={'images/car.png'} alt="" /><span>动态跟踪</span></Button>
                        <Button className="btn-tip qcwl"><img src={'images/logistics.png'} alt="" /><span>全程物流</span></Button>
                        <Button className="btn-tip lwjr"><img src={'images/internet.png'} alt="" /><span>联网金融</span></Button>
                    </div>
                    <p className="notice"><Icon type="sound"/>{this.state.nData.content}</p>
                </Content>
            </Layout>
        )
    }
}

/*****
 <ContentFood/>
 <ContentSteel/>
 <ContentOre/>
 Table数据
 *****/
const columns = [{
    title: '挂单标题',
    dataIndex: '挂单标题',
    key: '挂单标题',
}, {
    title: '价格类',
    dataIndex: '价格类',
    key: '价格类',
}, {
    title: '报价',
    dataIndex: '报价',
    key: '报价',
}, {
    title: '挂单总量',
    dataIndex: '挂单总量',
    key: '挂单总量',
}, {
    title: '交货地',
    dataIndex: '交货地',
    key: '交货地',
}, {
    title: '挂单时间',
    dataIndex: '挂单时间',
    key: '挂单时间',
}, {
    title: '操作',
    dataIndex: '操作',
    key: '操作',
    render: text => <a href="#" style={{color:'green'}}>{text}</a>,
}];
const columns1 = [{
    title: '价格类型',
    dataIndex: '价格类型',
    key: '价格类型',
}, {
    title: '价格',
    dataIndex: '价格',
    key: '价格',
}, {
    title: '交货地',
    dataIndex: '交货地',
    key: '交货地',
}];
//内容区第二大模块-粮食区
class ContentFood extends React.Component{
    constructor () {
        super();
        this.state = {data: null,data1:null};
    }
    // componentDidMount(){
    //     $.get("data/sales.json",function(res){
    //         this.setState({data: res});
    //        // console.log(this.state.data)
    //     }.bind(this))
    //     $.get("data/realtime.json",function(reh){
    //         this.setState({data1: reh});
    //     }.bind(this))
    // }
    render(){
        return(
            <Layout className="container layout mar-top-30 contentframe">
                <Row>
                    <Col xs={5} style={{width:228}}>
                        <h3 className="content-title">
                            <img src={'images/view.jpg'}/>
                            <sapn className="num">1</sapn>
                            <span style={{marginLeft:-20}}>粮食类</span>
                        </h3>
                        <Card  className="content-card" style={{ width: 228,height:430}} bodyStyle={{ padding: 0 }}>
                            <div className="custom-image">
                                <img alt="example" width="100%" src={'images/food1.jpg'} />
                            </div>
                            <div className="custom-card">
                                <p>港口快讯：2017年3月13日</p>
                                <p>玉米价格走势(截止2017年3月)</p>
                                <p>国外玉米期现货日报(2017年)</p>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={19} style={{width:972}}>
                        <Tabs className="content-tab" onChange={callback} type="card">
                            <TabPane tab="营口港" key="1">
                                <Row>
                                    <Col xs={18} className="xs18 xstab">
                                        <Tabs>
                                            <TabPane className="sales" tab="销售报价" key="1">
                                                <Table className="conttab" columns={columns} dataSource={data}/>
                                                <div className="imgframe"><img src={'images/salesimg.jpg'}/></div>
                                            </TabPane>
                                            <TabPane className="procurement" tab="采购报价" key="2">采购报价</TabPane>
                                        </Tabs>
                                    </Col>
                                    <Col xs={6} className="xs6 xstab">
                                        <h4>实时成交</h4>
                                        <Table className="conttab deal" columns={columns1} dataSource={data1}/>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tab="厦门港" key="2">厦门港</TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </Layout>
        )
    }
}
//内容区第三大模块-钢材区
class ContentSteel extends React.Component{
    constructor () {
        super();
        this.state = {data: null,data1:null};
    }
    // componentDidMount(){
    //     $.get("data/sales.json",function(res){
    //         this.setState({data: res});
    //         // console.log(this.state.data)
    //     }.bind(this))
    //     $.get("data/realtime.json",function(reh){
    //         this.setState({data1: reh});
    //     }.bind(this))
    // }
    render(){
        return(
            <Layout className="container layout mar-top-30 contentframe">
                <Row>
                    <Col xs={5} style={{width:228}}>
                        <h3 className="content-title">
                            <img src={'images/view.jpg'}/>
                            <sapn className="num">2</sapn>
                            <span style={{marginLeft:-20}}>钢材类</span>
                        </h3>
                        <Card  className="content-card" style={{ width: 228,height:430}} bodyStyle={{ padding: 0 }}>
                            <div className="custom-image">
                                <img alt="example" width="100%" src={'images/steel1.jpg'} />
                            </div>
                            <div className="custom-card">
                                <p>港口快讯：2017年3月13日</p>
                                <p>玉米价格走势(截止2017年3月)</p>
                                <p>国外玉米期现货日报(2017年)</p>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={19} style={{width:972}}>
                        <Tabs className="content-tab" onChange={callback} type="card">
                            <TabPane tab="营口港" key="1">
                                <Row>
                                    <Col xs={18} className="xs18 xstab">
                                        <Tabs>
                                            <TabPane className="sales" tab="销售报价" key="1">
                                                <Table className="conttab" columns={columns} dataSource={data}/>
                                                <div className="imgframe"><img src={'images/salesimg.jpg'}/></div>
                                            </TabPane>
                                            <TabPane className="procurement" tab="采购报价" key="2">采购报价</TabPane>
                                        </Tabs>
                                    </Col>
                                    <Col xs={6} className="xs6 xstab">
                                        <h4>实时成交</h4>
                                        <Table className="conttab deal" columns={columns1} dataSource={data1}/>
                                    </Col>
                                </Row>
                            </TabPane>
                           <TabPane tab="厦门港" key="2">厦门港</TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </Layout>
        )
    }
}
//内容区第四大模块-矿石区
class ContentOre  extends React.Component{
    constructor () {
        super();
        this.state = {data: null,data1:null};
    }
    // componentDidMount(){
    //     $.get("data/sales.json",function(res){
    //         this.setState({data: res});
    //         // console.log(this.state.data)
    //     }.bind(this))
    //     $.get("data/realtime.json",function(reh){
    //         this.setState({data1: reh});
    //     }.bind(this))
    // }
    render(){
        return(
            <Layout className="container layout mar-top-30 contentframe">
                <Row>
                    <Col xs={5} style={{width:228}}>
                        <h3 className="content-title">
                            <img src={'images/view.jpg'}/>
                            <sapn className="num">3</sapn>
                            <span style={{marginLeft:-20}}>矿石类</span>
                        </h3>
                        <Card  className="content-card" style={{ width: 228,height:430}} bodyStyle={{ padding: 0 }}>
                            <div className="custom-image">
                                <img alt="example" width="100%" src={'images/ore1.jpg'} />
                            </div>
                            <div className="custom-card">
                                <p>港口快讯：2017年3月13日</p>
                                <p>玉米价格走势(截止2017年3月)</p>
                                <p>国外玉米期现货日报(2017年)</p>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={19} style={{width:972}}>
                        <Tabs className="content-tab" onChange={callback} type="card">
                            <TabPane tab="营口港" key="1">
                                <Row>
                                    <Col xs={18} className="xs18 xstab">
                                        <Tabs>
                                            <TabPane className="sales" tab="销售报价" key="1">
                                                <Table className="conttab" columns={columns} dataSource={data}/>
                                                <div className="imgframe"><img src={'images/salesimg.jpg'}/></div>
                                            </TabPane>
                                            <TabPane className="procurement" tab="采购报价" key="2">采购报价</TabPane>
                                        </Tabs>
                                    </Col>
                                    <Col xs={6} className="xs6 xstab">
                                        <h4>实时成交</h4>
                                        <Table className="conttab deal" columns={columns1} dataSource={data1}/>
                                    </Col>
                                </Row>
                            </TabPane>
                          <TabPane tab="厦门港" key="2">厦门港</TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </Layout>
        )
    }
}
//底部
class Footer extends React.Component{
    render() {
        return (
            <Layout className="container layout footer">
                <Row className="footer-menu">
                    <Col className="footer-menu-li" span={5}>
                        <dl>平台规则</dl>
                        <dd><a href="#">交易商入市协议</a></dd>
                    </Col>
                    <Col className="footer-menu-li" span={5}>
                        <dl>新手上路</dl>
                        <dd><a href="#">用户手册</a> <a href="#">开户入市</a></dd>
                        <dd><a href="#">运行环境</a> <a href="#">常见问题</a></dd>
                        <dd><a href="#">软件下载</a></dd>
                    </Col>
                    <Col className="footer-menu-li" span={5}>
                        <dl>挂单指南</dl>
                        <dd><a href="#">挂单交易流程</a></dd>
                    </Col>
                    <Col className="footer-menu-li" span={5}>
                        <dl>特色服务</dl>
                        <dd><a href="#">物流查询</a></dd>
                        <dd><a href="#">资讯共享</a></dd>
                    </Col>
                    <Col className="footer-menu-li" span={4}>
                        <dl>关于我们</dl>
                        <dd><a href="#">关于我们</a></dd>
                        <dd><a href="#">联系我们</a></dd>
                        <dd><a href="#">加入我们</a></dd>
                        <dd><a href="#">法律声明</a></dd>
                    </Col>
                </Row>
                <Row className="copyright">
                    <Col className="copyright-txt" span={14}>
                        <p>违法和不良信息举报电话:0417-6177777<span>传真:0755-21628516</span></p>
                        <p>本站郑重声明:营口港（融）大数据股份有限公司版权所有</p>
                        <p>所有文章数据仅供参考，使用前请核实，风险自负</p>
                    </Col>
                    <Col className="linknum" span={4} style={{paddingRight:0}}>
                        <a href="#">辽ICP备05003328号-1</a>
                    </Col>
                    <Col className="linkimg" span={6}>
                        <a href="#"><img src={'images/gxicon.jpg'}/></a><a href="#"><img src={'images/gxicon1.jpg'}/></a>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

// Render the main component into the dom
ReactDOM.render(<Wrapper/>, document.getElementById('app'));
