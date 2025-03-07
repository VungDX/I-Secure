import { Table, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { companyApi } from "../../api";
import { CompanyData } from "../../types/company";
import { useTranslation } from "react-i18next";

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
  const [loading, setLoading] = useState(false); // Thêm state để quản lý loading
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Bật loading trước khi gọi API
      try {
        const response = await companyApi.getCompanies();
        console.log("response=>", response.data);
        setCompanies(response.data.companies);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      } finally {
        setLoading(false); // Tắt loading sau khi hoàn tất (dù thành công hay lỗi)
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>{t("dashboard.company.title")}</Title>
      <Title level={4}>{t("dashboard.company.annual")}</Title>
      <Table
        columns={columns}
        dataSource={companies}
        rowKey="id"
        pagination={{ pageSize: 5 }}
        bordered
        loading={loading} // Thêm prop loading vào Table
      />
      <Title level={4}>{t("dashboard.company.currentPeriod")}</Title>
      <Table
        columns={columns}
        dataSource={companies}
        rowKey="id"
        pagination={{ pageSize: 5 }}
        bordered
        loading={loading} // Thêm prop loading vào Table
      />
    </div>
  );
};

export default Company;
