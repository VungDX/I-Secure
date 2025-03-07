import { useNavigate } from "react-router-dom";
import { Layout, Menu, Dropdown, Space } from "antd";
import {
  UserOutlined,
  GlobalOutlined,
  ClockCircleOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const { Header: AntHeader } = Layout;

const Header = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  // State cho timezone
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  // Cập nhật thời gian mỗi giây
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer); // Cleanup khi component unmount
  }, []);

  // Menu dropdown cho ngôn ngữ
  const languageMenu = (
    <Menu
      items={[
        {
          key: "en",
          label: "English",
          onClick: () => i18n.changeLanguage("en"), // Thay bằng logic i18n
        },
        {
          key: "vi",
          label: "Tiếng Việt",
          onClick: () => i18n.changeLanguage("vi"), // Thay bằng logic i18n
        },
      ]}
    />
  );

  // Menu dropdown cho profile
  const profileMenu = (
    <Menu
      items={[
        {
          key: "profile",
          label: "Profile",
          onClick: () => navigate("/profile"), // Điều hướng đến trang profile nếu có
        },
        {
          key: "logout",
          label: "Logout",
          onClick: () => console.log("Logout"), // Thay bằng logic đăng xuất
        },
      ]}
    />
  );

  // Các mục trong Header
  const headerItems = [
    {
      key: "timezone",
      label: (
        <Space>
          <ClockCircleOutlined />
          {currentTime}
        </Space>
      ),
    },
    {
      key: "language",
      label: (
        <Dropdown overlay={languageMenu}>
          <Space>
            <GlobalOutlined />
            Language
            <DownOutlined />
          </Space>
        </Dropdown>
      ),
    },
    {
      key: "profile",
      label: (
        <Dropdown overlay={profileMenu}>
          <Space>
            <UserOutlined />
            Profile
            <DownOutlined />
          </Space>
        </Dropdown>
      ),
    },
  ];

  return (
    <AntHeader>
      <Menu
        theme="dark"
        mode="horizontal"
        items={headerItems}
        style={{ lineHeight: "64px", justifyContent: "flex-end" }} // Căn phải
      />
    </AntHeader>
  );
};

export default Header;
