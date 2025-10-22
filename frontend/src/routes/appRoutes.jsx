import { Routes, Route, useLocation } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// import LayoutDehqon from "../components/layout/LayoutDehqon";
// import LayoutChorvador from "../components/layout/LayoutChorvador";
// import LayoutAdmin from "../components/layout/LayoutAdmin";
import LayoutMain from "../components/layout/LayoutMain"

// Dehqon sahifalari
import DashboardDehqon from "../pages/dehqon/Dashboard";
import FieldsDehqon from "../pages/dehqon/FieldsPage";
import CropsDehqon from "../pages/dehqon/CropsPage";
import IrrigationDehqon from "../pages/dehqon/IrrigationPage";
import FinanceDehqon from "../pages/dehqon/FinancePage";
import AlertsDehqon from "../pages/dehqon/AlertsPage";
import CommunityDehqon from "../pages/dehqon/CommunityPage";
import ProfileDehqon from "../pages/dehqon/Profile";
import SettingsDehqon from "../pages/dehqon/Settings";
import HelpDehqon from  "../pages/dehqon/HelpPage"

// Chorvador sahifalari
import DashboardChorvador from "../pages/chorvador/Dashboard";
import AnimalsChorvador from "../pages/chorvador/AnimalsPage/AnimalsPage";
import FeedChorvador from "../pages/chorvador/FeedingPage/FeedingPage";
import HealthChorvador from "../pages/chorvador/HealthPage";
import FinanceChorvador from "../pages/chorvador/FinancePage";
import AlertsChorvador from "../pages/chorvador/AlertsPage";
import CommunityChorvador from "../pages/chorvador/CommunityPage";
import ProfileChorvador from "../pages/chorvador/Profile";
import SettingsChorvador from "../pages/chorvador/Settings";
import HelpChorvador from  "../pages/chorvador/HelpPage"

// Admin sahifalari
import AdminDashboard from "../pages/admin/DashboardAdmin";
import ReportsAdmin from "../pages/admin/ReportsPage";
import UsersAdmin from "../pages/admin/UsersPage";
import CommunityAdmin from "../pages/admin/CommunityControl";
import SystemSettingsAdmin from "../pages/admin/SystemSettingsPage";
import { useEffect, useState } from "react";

function AppRoutes() {
const [role,setRole] = useState(() => {
  const user = JSON.parse(localStorage.getItem("currentUser"))
  return user?.role || null
})
const location = useLocation()

useEffect(() => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
    setRole(user?.role || null);
},[location])

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/dehqon/*"
        element={
              <LayoutMain role={role} />
        }
      >
        <Route path="dashboard" index element={<DashboardDehqon />} />
        <Route path="fields" element={<FieldsDehqon />} />
        <Route path="crops" element={<CropsDehqon />} />
        <Route path="irrigation" element={<IrrigationDehqon />} />
        <Route path="finance" element={<FinanceDehqon />} />
        <Route path="alerts" element={<AlertsDehqon />} />
        <Route path="community" element={<CommunityDehqon />} />
        <Route path="profile" element={<ProfileDehqon />} />
        <Route path="settings" element={<SettingsDehqon />} />
        <Route path="help" element={<HelpDehqon />} />
      </Route>

      <Route
        path="/chorvador/*"
        element={
              <LayoutMain role={role} />
        }
      >
        <Route path="dashboard" index element={<DashboardChorvador />} />
        <Route path="animals" element={<AnimalsChorvador />} />
        <Route path="feeding" element={<FeedChorvador />} />
        <Route path="health" element={<HealthChorvador />} />
        <Route path="finance" element={<FinanceChorvador />} />
        <Route path="alerts" element={<AlertsChorvador />} />
        <Route path="community" element={<CommunityChorvador />} />
        <Route path="profile" element={<ProfileChorvador />} />
        <Route path="settings" element={<SettingsChorvador />} />
        <Route path="help" element={<HelpChorvador />} />
      </Route>

      <Route
        path="/admin/*"
        element={
              <LayoutMain role={role} />
        }
      >
        <Route path="dashboard" index element={<AdminDashboard />} />
        <Route path="users" element={<UsersAdmin />} />
        <Route path="reports" element={<ReportsAdmin />} />
        <Route path="community" element={<CommunityAdmin />} />
        <Route path="settings" element={<SystemSettingsAdmin />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
