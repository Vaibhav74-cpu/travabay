import { Button } from "@/components/ui/button";
import { useLogoutMutation } from "@/redux/slices/adminApiSlice";
import { logout } from "@/redux/slices/authSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [logoutApi] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
      await logoutApi().unwrap();
      dispatch(logout());
      navigate("/admin/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <header className="w-full bg-[#0d2340] shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-16 py-3 text-white font-semibold text-lg">

        <Link
          to="/admin/packages"
          className="hover:text-yellow-400 transition duration-300 text-md"
        >
          Package List
        </Link>

        <Link
          to="/admin/enquiries"
          className="hover:text-yellow-400 transition duration-300 text-md"
        >
          Enquiries
        </Link>

        <Button
          onClick={logoutHandler}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg text-md"
        >
          Logout
        </Button>
      </div>
    </header>
  );
}

export default AdminDashboard;
