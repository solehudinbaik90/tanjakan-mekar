import { Link } from "react-router-dom";

export default function SectionTitle({ title, to, showMore = true }) {
  const hasMoreLink = showMore && Boolean(to);

  return (
    <div className="section-title">
      <h1 className={hasMoreLink ? "d-flex justify-content-between" : ""}>
        <Link className="text-uppercase" to={to || "#"}>
          {title}
        </Link>
        {hasMoreLink && (
          <span className="pr-2" style={{ fontSize: 14, paddingTop: 2 }}>
            <Link to={to}>
              MORE <i className="fas fa-chevron-right" />
            </Link>
          </span>
        )}
      </h1>
    </div>
  );
}
