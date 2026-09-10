export default function Pagination({ currentPage, totalPages, onChange }) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        {pages.map((p) => (
          <li key={p} className={`page-item ${p === currentPage ? "active" : ""}`}>
            <button className="page-link" onClick={() => onChange(p)}>
              {p}
            </button>
          </li>
        ))}
        {currentPage < totalPages && (
          <li className="page-item">
            <button className="page-link" onClick={() => onChange(currentPage + 1)}>
              ›
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
