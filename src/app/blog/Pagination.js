import styles from "./blog.module.css";

const Pagination = ({ currentPage, totalPages, handlePagination }) => {
  const generatePageNumbers = (currentPage, totalPages) => {
    const visiblePages = 3; // Number of page numbers to show on either side of the current page
    const pageNumbers = [];

    if (totalPages <= visiblePages * 2 + 1) {
      // If total pages are less than or equal to the twice the visible pages plus one
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // If there are more pages, show a subset with ellipsis
      const startPage = Math.max(1, currentPage - visiblePages);
      const endPage = Math.min(totalPages, currentPage + visiblePages);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (startPage > 1) {
        // Add ellipsis if not starting from the first page
        pageNumbers.unshift("...");
        pageNumbers.unshift(1);
      }

      if (endPage < totalPages) {
        // Add ellipsis if not ending at the last page
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };
  const pageNumbers = generatePageNumbers(currentPage, totalPages);

  return (
    <div className={styles.pagination}>
      {pageNumbers.map((pageNumber, index) => (
        <button
          className={`${styles.paginationButton} ${
            currentPage === pageNumber ? styles.active : ""
          }`}
          key={index}
          onClick={() => handlePagination(pageNumber)}
          disabled={pageNumber === "..."}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
