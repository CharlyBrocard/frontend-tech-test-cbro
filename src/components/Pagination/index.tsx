import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  name: string;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, name }) => {
  const navigate = useNavigate();

  if (totalPages <= 1) return null;

  const goToPage = (page: number) => {
    navigate(`/?name=${encodeURIComponent(name)}&page=${page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <button
        className={styles.navButton}
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          className={`${styles.pageButton} ${p === currentPage ? styles.active : ""}`}
          onClick={() => goToPage(p)}
          aria-current={p === currentPage ? "page" : undefined}
        >
          {p}
        </button>
      ))}
      <button
        className={styles.navButton}
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </nav>
  );
};
