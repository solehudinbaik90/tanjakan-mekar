import { Link } from "react-router-dom";

export default function BeritaCard({ item, variant = "grid" }) {
  const isCompact = variant === "compact";

  const rowClass = isCompact
    ? "row align-items-center justify-content-center"
    : "row align-items-center";
  const imageColClass = isCompact ? "col-4 pr-2" : "col-3 p-0 pl-3";
  const textColClass = isCompact ? "col-8 pl-0" : "col-9";

  return (
    <div className="card p-0 shadow-sm" style={{ marginBottom: 10 }}>
      <div className="card-body p-1">
        <div className={rowClass}>
          <div className={imageColClass}>
            <Link to={`/${item.slug}`}>
              <img src={item.image} alt={item.judul} className="rounded" />
            </Link>
          </div>
          <div className={textColClass}>
            <h3 className="title-card">
              <Link to={`/${item.slug}`} tabIndex="-1">
                {item.judul}
              </Link>
            </h3>
            <span className="jl_post_meta">
              <span className="text-primary">
                <Link to={`/category/${item.kategoriSlug}`}>{item.kategori}</Link>
              </span>
              <span> | </span>
              <span className="post-date" style={{ color: "#647277" }}>
                {item.tanggal}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
