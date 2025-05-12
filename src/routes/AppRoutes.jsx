import Loading from "@/components/Loading";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoute from "./PublicRoutes";
import PrivateRoute from "./PrivateRoutes";
import Layout from "@/components/Layout";
import UserProfile from "@/components/UserProfile";
import DashboardLayout from "@/components/DashboardLayout";
import DashboardAdmin from "@/components/DashboardAdmin";
import UserList from "@/components/admin/User/UserList";
import CreateNewUser from "@/components/admin/User/CreateNewUser";
import NotFoundPage from "@/pages/NotFoundPage";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage";
import ResetPasswordPage from "@/pages/ResetPasswordPage";
import ConfirmCodePage from "@/pages/ConfirmCodePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";


const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
        
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/verify-code" element={<ConfirmCodePage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
          </Route>
          <Route
            path="/"
            element={
              <PrivateRoute allowedRoles={[1, 2, 3]}>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route path="/profile/:userId" element={<UserProfile />} />
          
          </Route>
          <Route
            path="/admin"
            element={
              <PrivateRoute allowedRoles={[1]}>
                <DashboardLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<DashboardAdmin />} />
            <Route path="dashboard" element={<DashboardAdmin />} />
            <Route path="users" element={<UserList />} />
            <Route path="users/create" element={<CreateNewUser />} />
            <Route path="users/:userId" element={<UserProfile />} />
          </Route>

          {/* Doctor + Admin Shared Section */}
       

          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
