import React from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { BrowserRouter } from "react-router-dom";
import { Link, Route } from "react-router-dom";
import One from "./pages/One";
import Two from "./pages/Two";
import Three from "./pages/Three";
import Four from "./pages/Four";
import "./App.css";
const { Header, Content, Footer, Sider } = Layout;
export default function App() {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo">DMU_CTF</div>

        <Menu theme="dark" mode="inline">
          <Menu.Item key="a">
            <Link to="/pageOne">
              <UserOutlined />
              Page 1
            </Link>
          </Menu.Item>

          <Menu.Item key="b">
            <Link to="/pageTwo">
              <VideoCameraOutlined />
              Page 2
            </Link>
          </Menu.Item>

          <Menu.Item key="c">
            <Link to="/pageThree">
              <UploadOutlined />
              Page 3
            </Link>
          </Menu.Item>

          <Menu.Item key="d">
            <Link to="/pageFour">
              <UserOutlined />
              Page 4
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 800 }}
          >
            <Route path="/pageOne" component={One} />
            <Route path="/pageTwo" component={Two} />
            <Route path="/pageThree" component={Three} />
            <Route path="/pageFour" component={Four} />
          </div>
        </Content>

        <Footer style={{ textAlign: "center" }}>©2021 Created by C1oud</Footer>
      </Layout>
    </Layout>
  );
}
