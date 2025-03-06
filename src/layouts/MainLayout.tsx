// src/components/MainLayout.tsx
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom'; // Outlet để render route con
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const { Content } = Layout;

const MainLayout = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Header />
    <Layout>
      <Sidebar />
      <Content style={{ padding: '24px', background: '#fff' }}>
        <Outlet /> {/* Render các route private tại đây */}
      </Content>
    </Layout>
    <Footer />
  </Layout>
);

export default MainLayout;