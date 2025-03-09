import { Table, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { companyApi } from "../../api";
import { CompanyData } from "../../types/company";
import { useTranslation } from "react-i18next";
import { Button } from 'antd'; 
import useAppContext from "../../hooks/useAppContext";


const { Title } = Typography;

const columns: ColumnsType<CompanyData> = [
  { title: "ID", dataIndex: "id", key: "id", sorter: (a, b) => a.id - b.id },
  {
    title: "Tên công ty",
    dataIndex: "company",
    key: "company",
    sorter: (a, b) => a.company.localeCompare(b.company),
  },
  { title: "Địa chỉ", dataIndex: "address", key: "address" },
];

const Company = () => {
  const [companies, setCompanies] = useState<CompanyData[]>([]);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const { theme, setTheme } = useAppContext();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await companyApi.getCompanies();
        setCompanies(response.data.companies);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <p>Current Theme: {theme}</p>
      <Button
        type="primary"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Toggle Theme
      </Button>
      <Title level={2}>{t("dashboard.company.title")}</Title>
      <Title level={4}>{t("dashboard.company.annual")}</Title>
      <Table
        columns={columns}
        dataSource={companies}
        rowKey="id"
        pagination={{ pageSize: 5 }}
        bordered
        loading={loading}
      />
    </div>
  );
};

export default Company;
