import { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import ViewData from './ViewData/ViewData';

const { Header, Sider, Content } = Layout;

const Dashboard = () => {

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [menuItem, setMenuitem] = useState('https://localhost:7104/api/Users?pageNumber=1&pageSize=1000');
    const [api, setApi] = useState('https://localhost:7104/api/Users?pageNumber=1&pageSize=1000');


    const switchMenuitem = (key) => {
        switch (key) {
            case 'https://localhost:7104/api/Users?pageNumber=1&pageSize=1000':
                return <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 100,
                        background: colorBgContainer,
                    }}
                >
                    <ViewData api={api} title={'Users'} />
                </Content>
            case 'https://jsonplaceholder.typicode.com/todos':
                return <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 100,
                        background: colorBgContainer,
                    }}
                >
                    <ViewData api={api} title={'Todos'} />
                </Content>
            case 'https://jsonplaceholder.typicode.com/posts':
                return <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 100,
                        background: colorBgContainer,
                    }}
                >
                    <ViewData api={api} title={'Posts'} />
                </Content>
            default:
                return new Error('Có lỗi');
        }
    }

    return (
        <Layout style={{ height: '100%' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    onClick={e => {setMenuitem(e.key); setApi(e.key)}}
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['https://localhost:7104/api/Users?pageNumber=1&pageSize=1000']}
                    items={[
                        {
                            key: 'https://localhost:7104/api/Users?pageNumber=1&pageSize=1000',
                            icon: <UserOutlined />,
                            label: 'User',
                        },
                        {
                            key: 'https://jsonplaceholder.typicode.com/todos',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: 'https://jsonplaceholder.typicode.com/posts',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 100,
                        background: colorBgContainer,
                    }}
                >
                    {switchMenuitem(menuItem)}
                </Content>
            </Layout>
        </Layout>
    );
};
export default Dashboard;

