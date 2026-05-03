import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function AdminRoutes() {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div>
      {userInfo && userInfo.isAdmin ? <Outlet /> : <Navigate to="/" replace />}
    </div>
  );
}

export default AdminRoutes;
