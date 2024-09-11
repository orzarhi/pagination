interface PaginationProps {
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  paginate,
}: PaginationProps) => {
  return (
    <div className="pagination">
      <p>
        Page {currentPage} of {totalPages}
      </p>
      <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};
