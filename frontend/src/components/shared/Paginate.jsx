import { Link } from "react-router-dom";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function Paginate({ page, pages, isAdmin = false, keyword = "" }) {
  const totalPages = Math.ceil(pages);

  if (totalPages <= 1) return null;

  const createPageUrl = (pageNumber) => {
    return !isAdmin
      ? keyword
        ? `/search/${keyword}/page/${pageNumber}`
        : `/page/${pageNumber}`
      : `/admin/productlist/${pageNumber}`;
  };

  return (
    <div className="mt-10 flex justify-center">
      <Pagination>
        <PaginationContent>
          {/* PREVIOUS */}
          {page > 1 && (
            <PaginationItem>
              <PaginationPrevious
                asChild
              >
                <Link to={createPageUrl(page - 1)} />
              </PaginationPrevious>
            </PaginationItem>
          )}

          {/* PAGE NUMBERS */}
          {[...Array(totalPages).keys()].map((x) => {
            const pageNumber = x + 1;

            return (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  asChild
                  isActive={pageNumber === page}
                >
                  <Link to={createPageUrl(pageNumber)}>
                    {pageNumber}
                  </Link>
                </PaginationLink>
              </PaginationItem>
            );
          })}

          {/* NEXT */}
          {page < totalPages && (
            <PaginationItem>
              <PaginationNext
                asChild
              >
                <Link to={createPageUrl(page + 1)} />
              </PaginationNext>
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default Paginate;