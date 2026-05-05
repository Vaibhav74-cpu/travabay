import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/shared/MainLayout";
import HomeScreen from "./screens/HomeScreen";
import PackageDatailsScreen from "./screens/PackageDatailsScreen";

import AboutUsScreen from "./screens/AboutUsScreen";
import ContactScreen from "./screens/ContactScreen";
import TermsConditonsScreen from "./screens/TermsConditonsScreen";
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen";
import FAQScreen from "./screens/FAQScreen";
import PackagesScreen from "./screens/PackagesScreen";
import CorporateTravelScreen from "./screens/CorporateTravelScreen";
// import Login from "./components/shared/Login";
import LoginScreen from "./screens/admin/LoginScreen";
import VerifyOtpScreen from "./screens/admin/VerifyOtpScreen";
// import AdminDashboard from "./screens/admin/AdminDashboard";
import PackageListScreen from "./screens/admin/PackageListScreen";
import EnquirysScreen from "./screens/admin/EnquirysScreen";
import BookingScreen from "./screens/admin/BookingScreen";
import PackageEditScreen from "./screens/admin/PackageEditScreen";
import PackageCreateScreen from "./screens/admin/PackageCreateScreen";
import AdminRoutes from "./components/shared/AdminRoutes";
import PackagesByCityScreen from "./screens/PackagesByCityScreen";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      // Mega Navbar
      { path: "/corporate-travel", element: <CorporateTravelScreen /> },
      { path: "/contact-us", element: <ContactScreen /> },

      { path: "/packages", element: <PackagesScreen /> },
      { path: "/package/:id", element: <PackageDatailsScreen /> },
      { path: "/about-us", element: <AboutUsScreen /> },
      { path: "/faq", element: <FAQScreen /> },
      { path: "/terms-and-conditions", element: <TermsConditonsScreen /> },
      { path: "/privacy-policy", element: <PrivacyPolicyScreen /> },
      { path: "/india/list", element: <PrivacyPolicyScreen /> },
      { path: "/city/:city", element: <PackagesByCityScreen /> },
    ],
  },

  { path: "/admin/login", element: <LoginScreen /> },
  { path: "/admin/verify-email", element: <VerifyOtpScreen /> },
  {
    //admin
    element: <AdminRoutes />,
    children: [
      // { path: "/admin/dashboard", element: <AdminDashboard /> },
      { path: "/admin/package/create", element: <PackageCreateScreen /> },
      { path: "/admin/packages", element: <PackageListScreen /> },
      { path: "/admin/enquiries", element: <EnquirysScreen /> },
      { path: "/admin/bookings", element: <BookingScreen /> },
      { path: "/admin/package/:id/edit", element: <PackageEditScreen /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={appRouter}></RouterProvider>;
}

export default App;
