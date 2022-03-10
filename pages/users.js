import { Card } from 'antd';
import LayoutApp from "../components/Layout"
import { Layout } from 'antd'
import { Row, Col, Input } from 'antd';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Table, Divider, Tag } from 'antd';

export default function Users() {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Last Name',
            dataIndex: 'last_name',
            key: 'last_name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a>Update</a>
                    <Divider type="vertical" />
                    <a>Delete</a>
                </span>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'Oscar',
            last_name: 'Morales',
            email: 'oscar.morales@jaxitank.com',
        },
        {
            key: '1',
            name: 'Oscar',
            last_name: 'Morales',
            email: 'oscar.morales@jaxitank.com',
        },
        {
            key: '1',
            name: 'Oscar',
            last_name: 'Morales',
            email: 'oscar.morales@jaxitank.com',
        },
    ];

    return (
        <div>
            <LayoutApp>
                <Card title="Users" bordered={false} style={{ minWidth: "100vh" }}>
                    <Row>
                        <Col span={3}>Name:</Col>
                        <Col span={21}><Input /></Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col span={3}>Email:</Col>
                        <Col span={21}><Input /></Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col span={24} style={{ textAlign: "center" }}>
                            <Button type="primary" icon={<SearchOutlined />}>
                                Search
                            </Button>
                        </Col>
                    </Row>
                </Card>
                <br></br>
                <br></br>
                <Card title="Results" bordered={false} style={{ minWidth: "100vh" }}>
                    <Table columns={columns} dataSource={data} />
                </Card>
            </LayoutApp>

        </div>

    )
}