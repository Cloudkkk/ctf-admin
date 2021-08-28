import React from "react";
import { useState } from "react";
import { Layout, Menu, PageHeader } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

import { Link, Route } from "react-router-dom";
import One from "./pages/One";
import Two from "./pages/Two";
import Three from "./pages/Three";
import Four from "./pages/Four";
import Five from "./pages/Five";
import Six from "./pages/Six";
import Seven from "./pages/Seven";
import Eight from "./pages/Eight";
import Nine from "./pages/Nine";
import "./App.css";
const { Header, Content, Footer, Sider } = Layout;
export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout>
      <Sider
        trigger={null}
        width={256}
        // breakpoint="lg"
        collapsible
        collapsed={collapsed}
      >
        <div className="logo">DMU_CTF</div>

        <Menu theme="dark" mode="inline">
          <Menu.Item key="a" icon={<UserOutlined />}>
            <Link to="/pageOne">显示当前网络拓扑结构</Link>
         
          </Menu.Item>

          <Menu.Item key="b" icon={<UserOutlined />}>
            <Link to="/pageTwo">管理交换机配置文件和程序</Link>
          </Menu.Item>

          <Menu.Item key="c" icon={<UserOutlined />}>
            <Link to="/pageThree">管理交换机用户</Link>
          </Menu.Item>

          <Menu.Item key="d" icon={<UserOutlined />}>
            <Link to="/pageFour">小程序配置用户身份</Link>
          </Menu.Item>
          <Menu.Item key="e" icon={<UserOutlined />}>
            <Link to="/pageFive">交换机动态安装库文件</Link>
          </Menu.Item>
          <Menu.Item key="f" icon={<UserOutlined />}>
            <Link to="/pageSix">实时监控交换机状态</Link>
          </Menu.Item>
          <Menu.Item key="g" icon={<UserOutlined />}>
            <Link to="/pageSeven">显示和管理控制器应用</Link>
          </Menu.Item>
          <Menu.Item key="h" icon={<UserOutlined />}>
            <Link to="/pageEight">可视化当前通信主机的数据流</Link>
          </Menu.Item>
          <Menu.Item key="i" icon={<UserOutlined />}>
            <Link to="/pageNine">显示当前密钥和小程序</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          // className="site-layout-sub-header-background"
          // style={{ padding: 0 }}
          className="site-layout-background"
          style={{ padding: 0 }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
          {/* <PageHeader title={"Header"}></PageHeader> */}
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 800 }}
          >
            <Route path="/pageOne" component={One} />
            <Route path="/pageTwo" component={Two} />
            <Route path="/pageThree" component={Three} />
            <Route path="/pageFour" component={Four} />
            <Route path="/pageFive" component={Five} />
            <Route path="/pageSix" component={Six} />
            <Route path="/pageSeven" component={Seven} />
            <Route path="/pageEight" component={Eight} />
            <Route path="/pageNine" component={Nine} />
          </div>
        </Content>

        <Footer style={{ textAlign: "center" }}>©2021 Created by C1oud</Footer>
      </Layout>
    </Layout>
  );
}
