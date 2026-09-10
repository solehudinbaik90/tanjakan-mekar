import { Link } from "react-router-dom";

export default function BeritaCard({ item }) {
  return (
    <div className="card p-0 shadow-sm mb-2">
      <div className="card-body p-1">
        <div className="row align-items-center">
          <div className="col-3 pl-3">
            <Link to={`/${item.slug}`}>
              <img src={item.image} alt={item.judul} className="rounded img-fluid" />
            </Link>
          </div>
          <div className="col-9">
            <h3 className="title-card">
              <Link to={`/${item.slug}`}>{item.judul}</Link>
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
