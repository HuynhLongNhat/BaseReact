import { Outlet } from "react-router-dom";
import styles from "./DashboardLayout.module.css";
import Header from "@/components/Header";
import SidebarDashBoard from "./SidebarDashboard";
const DashboardLayout = () => {
  return (
    <>
      <Header />
      <div className={styles.dashboardLayout}>
        <SidebarDashBoard />
        <div className={styles.mainContent}>
          <Outlet />
        </div>
      </div>
  
    </>
  );
};

export default DashboardLayout;
