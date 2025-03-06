// src/components/Sidebar.tsx
import { Menu, Layout } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  HomeOutlined,
  ShoppingOutlined,
  InfoCircleOutlined,
  MailOutlined,
  DashboardOutlined,
  SecurityScanOutlined,
  WarningOutlined,
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { routes } from '../routes/routes';

const { Sider } = Layout;

const icons: { [key: string]: React.ReactElement } = {
  '/': <HomeOutlined />,
  '/products': <ShoppingOutlined />,
  '/about': <InfoCircleOutlined />,
  '/contact': <MailOutlined />,
  '/dashboard': <DashboardOutlined />,
  '/security-board': <SecurityScanOutlined />,
  '/violation': <WarningOutlined />,
  '/security': <LockOutlined />,
  '/administration': <UserOutlined />,
};

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = routes
    .filter((route) => route.label && !route.hideInMenu) // Loại bỏ Login bằng hideInMenu
    .map((route) =>
      route.children
        ? {
            key: route.path,
            icon: icons[route.path],
            label: route.label,
            children: route.children.map((child) => ({
              key: `${route.path}/${child.path}`,
              label: child.label,
              onClick: () => {
                navigate(`${route.path}/${child.path}`);
              },
            })),
          }
        : {
            key: route.path,
            icon: icons[route.path],
            label: route.label,
            onClick: () => navigate(route.path),
          }
    );

  return (
    <Sider width={200} collapsible>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        defaultOpenKeys={routes.filter((r) => r.children).map((r) => r.path)}
        style={{ height: '100%', borderRight: 0 }}
        items={menuItems}
      />
    </Sider>
  );
};

export default Sidebar;