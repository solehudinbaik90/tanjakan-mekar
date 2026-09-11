import { Link } from "react-router-dom";
import SliderWrapper from "../components/common/SliderWrapper.jsx";
import { kategoriBerita, terpopuler } from "../data/beritaData.js";
import { infografisList } from "../data/infografisData.js";

export default function Sidebar({ showTerpopuler = false }) {
  return (
    <div id="sidebar-post">
      <div className="section-title">
        <h1 className="text-uppercase">
          <Link to="/berita">Kategori Berita</Link>
        </h1>
      </div>
      <div className="widget-body">
        {kategoriBerita.map((k) => (
          <div className="list-group m-1" key={k.slug}>
            <div className="list-group-item list-group-item-action">
              <i className="fas fa-folder text-warning" />{" "}
              <Link to={`/category/${k.slug}`}>
                {k.nama} <span className="text-danger">({k.jumlah})</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {showTerpopuler && (
        <>
          <div className="section-title mt-3">
            <h1>TERPOPULER</h1>
          </div>
          {terpopuler.map((t, i) => (
            <div className="card p-0 shadow-sm mb-2" key={t.slug}>
              <div className="card-body p-1">
                <div className="row align-items-center justify-content-center">
                  <div className="col-2 pr-0">
                    <h3 className="text-primary pl-3">{i + 1}</h3>
                  </div>
                  <div className="col-10 pl-0">
                    <h3 className="title-card">
                      <Link to={`/${t.slug}`}>{t.judul}</Link>
                    </h3>
                    <span className="jl_post_meta">
                      <span className="text-primary">{t.kategori}</span>
                      <span> | </span>
                      <span className="post-date" style={{ color: "#647277" }}>{t.tanggal}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}

      <div className="section-title mt-3">
        <h1><Link to="/infografis">INFOGRAFIS</Link></h1>
      </div>
      <SliderWrapper dots slidesToShow={1}>
        {infografisList.map((info) => (
          <div className="item-slide" key={info.id}>
            <div className="slide-inner">
              <div className="jl_grid_overlay jl_w_menu jl_clear_at">
                <div className="jl_grid_overlay_col">
                  <div className="jl_grid_verlay_wrap jl_radus_e">
                    <a href={info.image} download>
                      <div className="jl_f_img_bg" style={{ backgroundImage: `url(${info.image})` }} />
                      <span className="jl_post_type_icon"><i className="jli-gallery" /></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </SliderWrapper>
    </div>
  );
}
