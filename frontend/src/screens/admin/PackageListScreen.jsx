import { useGetPackagesQuery } from "@/redux/slices/packageApiSlice";
import React from "react";
import AdminDashboard from "./AdminDashboard";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function PackageListScreen() {
  const navigate = useNavigate();
  const { data: packages, isLoading, isError } = useGetPackagesQuery();
  console.log(packages);

  const packageEdit = (id) => {
    if (!id) {
      console.error("Invalid package ID");
      return;
    }

    navigate(`/admin/package/${id}/edit`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminDashboard />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex flex-col sm:flex-row justify-between items-center  gap-4">
          <h2 className="font-bold text-2xl text-gray-800">PACKAGES</h2>
          <div className="bg-slate-400 p mr-14 border rounded-lg">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              CREATE PACKAGE
            </Button>
          </div>
        </div>
        <div className="mt-6 bg-white shadow rounded-xl p-4 overflow-x-auto">
          <Table>
            <TableCaption>
              A list of <span className="text-blue-400">Packages</span>
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Days</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {packages?.map((pkg) => (
                <TableRow key={pkg._id}>
                  {/* Image */}
                  <TableCell>
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-16 h-12 object-cover rounded-md"
                    />
                  </TableCell>

                  {/* TITLE */}
                  <TableCell className="font-medium">{pkg.title}</TableCell>
                  {/* DAYS */}
                  <TableCell>{pkg.days}</TableCell>

                  {/* PRICE */}
                  <TableCell>₹{pkg.price}</TableCell>

                  {/* RATING */}
                  <TableCell>{pkg.rating} ⭐</TableCell>

                  {/* STATUS */}
                  <TableCell>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        pkg.inclusive
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {pkg.inclusive ? "Inclusive" : "Exclusive"}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center gap-4">
                      {/* Edit */}
                      <button
                        onClick={() => packageEdit(pkg._id)}
                        className="text-blue-500 hover:text-blue-700 text-lg"
                      >
                        <FaEdit />
                      </button>

                      {/* Delete */}
                      <button
                        onClick={() => handleDelete(pkg._id)}
                        className="text-red-500 hover:text-red-700 text-lg"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default PackageListScreen;
