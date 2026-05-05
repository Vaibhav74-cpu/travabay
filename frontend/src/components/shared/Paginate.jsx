import { Link } from "react-router-dom";

function Paginate({ page, pages, isAdmin = false, keyword = "" }) {
  const totalPages = Math.ceil(pages);

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-8 flex-wrap gap-2">
      {[...Array(totalPages).keys()].map((x) => {
        const pageNumber = x + 1;

        const url = !isAdmin
          ? keyword
            ? `/search/${keyword}/page/${pageNumber}`
            : `/page/${pageNumber}`
          : `/admin/productlist/${pageNumber}`;

        return (
          <Link
            key={pageNumber}
            to={url}
            className={`px-4 py-2 rounded-full text-sm border transition ${
              pageNumber === page
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {pageNumber}
          </Link>
        );
      })}
    </div>
  );
}

export default Paginate;