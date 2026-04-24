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
    ],
  },
]);
function App() {
  return <RouterProvider router={appRouter}></RouterProvider>;
}

export default App;
