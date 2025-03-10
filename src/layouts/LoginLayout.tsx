// src/pages/login/Login.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Card, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons'; // Icon cho input
import '../styles/layouts/_login.scss'

const { Title } = Typography;

const LoginLayout = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onFinish = (values: { username: string; password: string }) => {
    // Logic giả lập đăng nhập
    if (values.username === 'admin' && values.password === '123456') {
      navigate('/dashboard/company');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <Card
        style={{
          width: 400,
          margin: '0 auto', // Căn giữa
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Đổ bóng nhẹ
          borderRadius: 8, // Bo góc
        }}
      >
        <Title level={2} style={{ textAlign: 'center', marginBottom: 24 }}>
          Login
        </Title>
        <Form
          name="login_form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical" // Label trên input
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Enter your username"
              size="large"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Enter your password"
              size="large"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block // Nút full width
              style={{ marginTop: 16 }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginLayout;