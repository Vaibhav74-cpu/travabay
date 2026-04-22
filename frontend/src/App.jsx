import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/shared/MainLayout";
import HomeScreen from "./screens/HomeScreen";
import PackageDatailsScreen from "./screens/PackageDatailsScreen";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "/package/:id",
        element: <PackageDatailsScreen />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={appRouter}></RouterProvider>;
}

export default App;
