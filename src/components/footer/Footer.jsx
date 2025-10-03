import PropTypes from "prop-types";
import "./Footer.css";

export function Footer({ currentPage, totalPages, onPageChange }) {
  // Si aucune page, ne rien afficher
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="footer">
      <div className="tabulation">
        <ul>
          {pages.map((p) => (
            <li
              key={p}
              className={p === currentPage ? "active" : ""}
              onClick={() => onPageChange(p)}
            >
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Footer.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};