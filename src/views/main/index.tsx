import * as React from 'react';
import './index.css';
import { Layout } from 'antd';

import RouterView from '../../router/RouterView';

import { inject, observer } from 'mobx-react'

import { Menu, Icon, Button } from 'antd';





const { SubMenu } = Menu;



const { Header, Footer, Sider, Content } = Layout;

interface PropsInfo {
    routes: any,
    history: any,
}
class LoginPage extends React.Component<PropsInfo> {
    constructor(props: any) {
        super(props);


    }

    public state = {
        collapsed: false,
    };

    public toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };


    public render() {
        let { routes, history } = this.props;

        console.log(routes)
        return <div className="main">
            {/* <div className="head">
                
            </div> */}

            <Layout>
                <Header>
                    <div>
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" className="img" />
                    </div>
                    <div>
                        <span></span>
                        <p>qiaoyaru</p>
                    </div>
                </Header>
                <Layout>
                    <Sider>
                        {/* <Dao/> */}
                        <div style={{ width: 200 }}>
                            <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                            </Button>
                            <Menu
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                theme="dark"
                                inlineCollapsed={this.state.collapsed}
                            >

                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                            <Icon type="mail" />
                                            <span>试题管理</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="1" onClick={() => {
                                         history.push('/main/shou')
                                    }}>添加试题</Menu.Item>
                                    <Menu.Item key="2" onClick={() => {
                                         history.push('/main/sort')
                                    }}>试题分类</Menu.Item>
                                    <Menu.Item key="3" onClick={() => {
                                         history.push('/main/list')
                                    }}>查看试题</Menu.Item>

                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    title={
                                        <span>
                                            <Icon type="appstore" />
                                            <span>用户管理</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="5">添加用户</Menu.Item>
                                    <Menu.Item key="6">用户展示</Menu.Item>

                                </SubMenu>
                                <SubMenu
                                    key="sub4"
                                    title={
                                        <span>
                                            <Icon type="setting" />
                                            <span>考试管理</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="9">添加考试</Menu.Item>
                                    <Menu.Item key="10">试卷列表</Menu.Item>

                                </SubMenu>
                                <SubMenu
                                    key="sub5"
                                    title={
                                        <span>
                                            <Icon type="setting" />
                                            <span>班级管理</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="11">班级管理</Menu.Item>
                                    <Menu.Item key="12">教室管理</Menu.Item>
                                    <Menu.Item key="13">学生管理</Menu.Item>

                                </SubMenu>
                                <SubMenu
                                    key="sub6"
                                    title={
                                        <span>
                                            <Icon type="setting" />
                                            <span>阅卷管理</span>
                                        </span>
                                    }
                                >


                                </SubMenu>
                            </Menu>
                        </div>
                    </Sider>
                    <Content>
                        <RouterView routes={routes} />
                    </Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        </div>
    }
}

export default LoginPage;