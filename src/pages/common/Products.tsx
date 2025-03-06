import { List, Card, Typography } from 'antd';

const { Title } = Typography;

const mockProducts = [
  { id: 1, name: 'Sản phẩm 1', description: 'Mô tả sản phẩm 1' },
  { id: 2, name: 'Sản phẩm 2', description: 'Mô tả sản phẩm 2' },
  { id: 3, name: 'Sản phẩm 3', description: 'Mô tả sản phẩm 3' },
];

const Products = () => {
  return (
    <div>
      <Title level={2}>Danh sách sản phẩm</Title>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={mockProducts}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.name}>
              <p>{item.description}</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Products;