import React, { useEffect, useState } from "react";
import { Form, useNavigate, useParams } from "react-router-dom";

import {
  useGetPackageByIdQuery,
  useUpdatePackageMutation,
} from "@/redux/slices/packageApiSlice";

function PackageEditScreen() {
  const { id: pkgId } = useParams();
  const navigate = useNavigate();
  const { data: pkg, isLoading, isError } = useGetPackageByIdQuery(pkgId);
  const [update, { isLoading: updating }] = useUpdatePackageMutation();

  const tagOptions = [
    "GROUP TOUR",
    "FAMILY",
    "BEACH",
    "ADVENTURE",
    "HONEYMOON",
    "TREKKING",
  ];

  const [formData, setFormData] = useState({
    title: "",
    badge: "",
    tags: [],
    rating: "",
    reviews: "",
    inclusive: false,
    days: "",
    destinations: "",
    departures: "",
    highlights: "",
    price: "",
    priceNote: "",
    image: "",
  });

  useEffect(() => {
    if (pkg) {
      setFormData({
        title: pkg.title || "",
        badge: pkg.badge || "",
        tags: pkg.tags?.join(", ") || "",
        rating: pkg.rating || "",
        reviews: pkg.reviews || "",
        inclusive: pkg.inclusive || false,
        days: pkg.days || "",
        destinations: pkg.destinations || "",
        departures: pkg.departures || "",
        highlights: pkg.highlights || "",
        price: pkg.price || "",
        priceNote: pkg.priceNote || "",
        image: pkg.image || "",
      });
    }
  }, [pkg]);

  const handleBadgeChange = (e) => {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      badge: value,
    }));
  };

  const handleTagChange = (tag) => {
    setFormData((prev) => {
      const isSelected = prev.tags.includes(tag);

      if (isSelected) {
        return {
          ...prev,
          tags: prev.tags.filter((t) => t !== tag),
        };
      } else {
        return {
          ...prev,
          tags: [...prev.tags, tag],
        };
      }
    });
  };

  const inputHandler = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updatePackage({
        id,
        ...formData,
        tags: formData.tags.split(",").map((tag) => tag.trim()),
      }).unwrap();

      alert("Package Updated Successfully");
      navigate("/admin/packages");
    } catch (error) {
      console.error(error);
      alert("Update Failed");
    }
  };
  return (
    <div>
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-2xl font-bold mb-6">Edit Package Details</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow space-y-6"
        >
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={inputHandler}
              placeholder="Title"
              className="input"
            />

            {/* BADGE */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                Badge
              </label>

              <select
                name="badge"
                value={formData.badge || ""}
                onChange={handleBadgeChange}
                className="input bg-white"
              >
                <option value="">Select Badge</option>
                <option value="HOT DEAL">HOT DEAL</option>
                <option value="LIMITED OFFER">LIMITED OFFER</option>
                <option value="BEST SELLER">BEST SELLER</option>
                <option value="NEW">NEW</option>
              </select>
            </div>

            {/* TAGS */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                Tags
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {tagOptions.map((tag) => (
                  <label
                    key={tag}
                    className={`flex items-center gap-2 border rounded-lg px-3 py-2 cursor-pointer transition ${
                      formData.tags.includes(tag)
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-gray- 50 hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="checkbox"
                      value={tag}
                      checked={formData.tags.includes(tag)}
                      onChange={() => handleTagChange(tag)}
                      className="hidden"
                    />

                    <span className="text-sm font-medium">{tag}</span>
                  </label>
                ))}
              </div>
            </div>

            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={inputHandler}
              placeholder="Rating"
              className="input"
            />

            <input
              type="number"
              name="reviews"
              value={formData.reviews}
              onChange={inputHandler}
              placeholder="Reviews"
              className="input"
            />

            <input
              type="text"
              name="days"
              value={formData.days}
              onChange={inputHandler}
              placeholder="Days (e.g. 7 Nights 8 Days)"
              className="input"
            />

            <input
              type="number"
              name="destinations"
              value={formData.destinations}
              onChange={inputHandler}
              placeholder="Destinations"
              className="input"
            />

            <input
              type="number"
              name="departures"
              value={formData.departures}
              onChange={inputHandler}
              placeholder="Departures"
              className="input"
            />

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={inputHandler}
              placeholder="Price"
              className="input"
            />

            <input
              type="text"
              name="priceNote"
              value={formData.priceNote}
              onChange={inputHandler}
              placeholder="Price Note"
              className="input"
            />
          </div>

          {/* Highlights */}
          <textarea
            name="highlights"
            value={formData.highlights}
            onChange={inputHandler}
            placeholder="Highlights"
            className="input w-full h-24"
          />

          {/* Image */}
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={inputHandler}
            placeholder="Image URL"
            className="input w-full"
          />

          {/* Preview */}
          {formData.image && (
            <img
              src={formData.image}
              alt="preview"
              className="w-40 rounded-lg"
            />
          )}

          {/* Checkbox */}
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="inclusive"
              checked={formData.inclusive}
              onChange={inputHandler}
            />
            Inclusive Package
          </label>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate("/admin/packages")}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded"
              disabled={updating}
            >
              {updating ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PackageEditScreen;
