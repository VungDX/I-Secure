import { Button, Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div>
      <Title level={2}>Welcome to My Static SPA</Title>
      <Paragraph>
        Đây là một giao diện tĩnh sử dụng ReactJS, TypeScript và Ant Design.
      </Paragraph>
      <Card title="Featured Section" style={{ width: 300 }}>
        <p>Chào mừng bạn đến với trang chủ!</p>
        <Button type="primary">Learn More</Button>
      </Card>
    </div>
  );
};

export default Home;