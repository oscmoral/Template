import { useState, useRef } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, HomeOutlined } from '@ant-design/icons';
import Link from 'next/link'
import "antd/dist/antd.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function LayoutApp({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="header">
        <div className="logo">
          <h1 className="title-logo">NEPANOA</h1>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="1" icon={<HomeOutlined />} >
              <Link href="/" passHref>
                <a>Home</a>
              </Link>
            </Menu.Item>

            <SubMenu key="sub1" icon={<UserOutlined />} title="Users">

              <Menu.Item key="6">
                <Link href="/users" passHref>
                  <a>Users Catalog</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">Users Privilege</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Applications">
              <Menu.Item key="5">Applications Catalog</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >

            {children}


          </Content>
          <Footer style={{ textAlign: "center" }}>
            JaxiTank ©2022 Created Oscar Morales and Jesus Pacheco
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}