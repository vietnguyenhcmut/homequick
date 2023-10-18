import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { Outlet, Link } from 'react-router-dom';
import HeaderDetail from '../shared/HeaderDetail';

import { DesktopOutlined, AppstoreOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const LogoSider = () => {
  return(
    <div 
      style={{
        height: '64px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div style={{
        flex: 1
      }}>
        Logo
      </div>
      <div style={{
        flex: 1
      }}>
        Homequick
      </div>
    </div>
  )
}

const MenuSider = () => {
  return(
    <Menu defaultSelectedKeys={['1']} mode="inline" theme='light' >
      <Menu.Item key='1' icon={<DesktopOutlined />}>
        <Link to="/overview"> Overview </Link>
      </Menu.Item>
      <Menu.Item key='2' icon={<AppstoreOutlined />}>
        <Link to="/devices"> Devices </Link>
      </Menu.Item>
    </Menu>
  )
}

const RootRoute = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>

      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={(value) => setCollapsed(value)} 
        theme='light'
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 5px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'
        }}
      >
        <LogoSider />
        <MenuSider />
      </Sider>

      <Layout>
        <Header style={{background: colorBgContainer, padding: 0 }}>
          <HeaderDetail/>
        </Header>

        <Content style={{ margin: '20px' }}>
          <div id='detail'>
            <Outlet />
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>

      </Layout>

    </Layout>
  );
};

export default RootRoute;


// const RootRoute = () => {
//   return(
//     <div className="root-route">

//     </div>
//   )
// }