import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { routes } from './routes/routes';


const { Content } = Layout;

function App() {
  // Tạo mảng route phẳng từ routes.js, xử lý trường hợp undefined
  const flatRoutes = routes
    .filter((group) => group && typeof group === 'object' && Array.isArray(group.children))
    .flatMap((group) =>
      (group.children || []).map((child) => ({
        path: `${group.path}/${child.path}`,
        element: child.element,
      }))
    );

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Layout>
          <Sidebar />
          <Content style={{ padding: '24px', background: '#fff' }}>
            <Routes>
              {flatRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
            </Routes>
          </Content>
        </Layout>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;