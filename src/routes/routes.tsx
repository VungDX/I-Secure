import React from "react";
// Common pages
import PageNotFound from "../components/common/PageNotFound";
// Dashboard group
import Company from "../pages/dashboard/Company";
import Team from "../pages/dashboard/Team";
// Security Board group
import SecurityBoard from "../pages/security-board/SecurityBoard";
import SecurityBoardRegister from "../pages/security-board/SecurityBoardRegister";
// Violation group
import MySecurity from "../pages/violation/MySecurity";
import RegisterViolation from "../pages/violation/RegisterViolation";
import ViolationList from "../pages/violation/ViolationList";
// Security group
import Standard from "../pages/security/Standard";
import Document from "../pages/security/Document";
// Administration group
import UserManagement from "../pages/administration/UserManagement";
import Organization from "../pages/administration/Organization";
import RoleManagement from "../pages/administration/RoleManagement";
import AccountManagement from "../pages/administration/AccountManagement";
import LoginLayout from "../layouts/LoginLayout";

interface AppRoute {
  path: string;
  element?: React.ReactElement;
  label?: string;
  icon?: React.ReactElement;
  isPrivate?: boolean;
  hideInMenu?: boolean;
  children?: AppRoute[];
}

export const routes: AppRoute[] = [
  {
    path: "/login",
    label: "Login",
    isPrivate: false,
    element: <LoginLayout />,
    hideInMenu: true, // Ẩn khỏi Sidebar
  },
  {
    path: "/dashboard",
    label: "Dashboard",
    isPrivate: true,
    children: [
      { path: "company", element: <Company />, label: "Company" },
      { path: "team", element: <Team />, label: "Team" },
    ],
  },
  {
    path: "/security-board",
    label: "Security Board",
    isPrivate: true,
    children: [
      { path: "list", element: <SecurityBoard />, label: "Security Board" },
      {
        path: "register",
        element: <SecurityBoardRegister />,
        label: "Register Security Board",
      },
    ],
  },
  {
    path: "/violation",
    label: "Violation",
    isPrivate: true,
    children: [
      { path: "my-security", element: <MySecurity />, label: "My Security" },
      {
        path: "register",
        element: <RegisterViolation />,
        label: "Register Violation",
      },
      { path: "list", element: <ViolationList />, label: "Violation List" },
    ],
  },
  {
    path: "/security",
    label: "Security",
    isPrivate: true,
    children: [
      { path: "standard", element: <Standard />, label: "Standard" },
      { path: "document", element: <Document />, label: "Document" },
    ],
  },
  {
    path: "/administration",
    label: "Administration",
    isPrivate: true,
    children: [
      {
        path: "user-management",
        element: <UserManagement />,
        label: "User Management",
      },
      {
        path: "organization",
        element: <Organization />,
        label: "Organization",
      },
      {
        path: "role-management",
        element: <RoleManagement />,
        label: "Role Management",
      },
      {
        path: "account-management",
        element: <AccountManagement />,
        label: "Account Management",
      },
    ],
  },
  { path: "*", element: <PageNotFound /> },
];

// Làm phẳng routes cho react-router-dom
export const flatRoutes = routes
  .filter((group) => group && typeof group === "object")
  .flatMap((group) => {
    if (group.children && group.children.length > 0) {
      return group.children.map((child) => ({
        path: `${group.path}/${child.path}`.replace("//", "/"),
        element: child.element,
        isPrivate: group.isPrivate,
        label: child.label,
        hideInMenu: group.hideInMenu || false,
      }));
    }
    return [
      {
        path: group.path,
        element: group.element,
        isPrivate: group.isPrivate,
        label: group.label,
        hideInMenu: group.hideInMenu || false,
      },
    ];
  });
