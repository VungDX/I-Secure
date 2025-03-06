import { Typography, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div>
      <Title level={2}>About Us</Title>
      <Paragraph>
        Đây là trang giới thiệu tĩnh. Chúng tôi sử dụng Ant Design để tạo giao diện đẹp và chuyên nghiệp.
      </Paragraph>
      <Divider />
      <Title level={4}>Our Mission</Title>
      <Paragraph>
        Cung cấp một giao diện tĩnh đơn giản nhưng mạnh mẽ với React và TypeScript.
      </Paragraph>
    </div>
  );
};

export default About;