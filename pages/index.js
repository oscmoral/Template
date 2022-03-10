import { Card } from 'antd';
import LayoutApp from "../components/Layout"

export default function Home() {
    return (
        <div>
            <LayoutApp>
                <Card title="Home" bordered={false} style={{ minWidth: "100vh" }}>
                    <p>Content</p>
                    <p></p>
                    <p></p>
                </Card>
            </LayoutApp>

        </div>

    )
}