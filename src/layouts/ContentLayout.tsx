import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const { Content } = Layout;

const ContentLayout = () => (
  <Layout className="content-layout">
    <Header />
    <Layout>
      <Sidebar />
      <Content className="content">
        <Outlet /> 
      </Content>
    </Layout>
    <Footer />
  </Layout>
);

export default ContentLayout;