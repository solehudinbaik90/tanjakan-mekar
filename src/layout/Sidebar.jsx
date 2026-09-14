import { useState } from "react";
import { Link } from "react-router-dom";
import SliderWrapper from "../components/common/SliderWrapper.jsx";
import { kategoriBerita, terpopuler } from "../data/beritaData.js";
import { infografisList } from "../data/infografisData.js";
import { pollData } from "../data/pollData.js";
export default function Sidebar({
  showKategori = true,
  showTerpopuler = false,
  showInfografis = true,
  showJajakPendapat = false,
  onInfografisPreview,
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmitPoll = async () => {
    if (!selectedOption) {
      setError("Silahkan pilih salah satu jawaban diatas.");
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      await Promise.resolve();
      alert("Sukses! Terima kasih atas partisipasi Anda.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="sidebar-post">
      {showKategori && (
        <>
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
        </>
      )}

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
                      <Link to={`/${t.slug}`} tabIndex="-1">{t.judul}</Link>
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

      {showInfografis && (
        <section className="home_section1">
          <div className="section-title">
            <h1><Link to="/infografis">INFOGRAFIS</Link></h1>
          </div>
          <SliderWrapper dots slidesToShow={1} className="jl-w-slider jl_full_feature_w mb-4">
            {infografisList.map((info) => (
              <div className="item-slide" key={info.id}>
                <div className="slide-inner">
                  <div className="jl_grid_overlay jl_w_menu jl_clear_at">
                    <div className="jl_grid_overlay_col">
                      <div className="jl_grid_verlay_wrap jl_radus_e">
                        <button
                          type="button"
                          className="p-0 border-0 bg-transparent w-100"
                          style={{ display: "block" }}
                          onClick={() => onInfografisPreview?.(info)}
                        >
                          <div className="jl_f_img_bg" style={{ backgroundImage: `url(${info.image})` }} />
                        </button>
                        <a href={info.image} download>
                          <span className="jl_post_type_icon"><i className="jli-gallery" /></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </SliderWrapper>
        </section>
      )}

      {showJajakPendapat && (
        <>
          <hr />
          <div className="section-title">
            <h1 className="text-uppercase"><Link to="/opini">Jajak Pendapat</Link></h1>
          </div>
          <div className="card p-0 shadow-sm mb-2">
            <div className="card-body p-2">
              <div className="text-left text-primary">
                <b>{pollData.pertanyaan}</b>
                <hr />
                {pollData.opsi.map((op) => (
                  <label key={op.id} className="d-block pointer" style={{ color: "#666", fontSize: 14, padding: 2 }}>
                    <input
                      type="radio"
                      name="poling_id"
                      value={op.id}
                      checked={selectedOption === op.id}
                      onChange={() => setSelectedOption(op.id)}
                    />{" "}
                    {op.label}
                  </label>
                ))}
                {error && <div className="invalid-feedback d-block">{error}</div>}
                <br />
                <center className="mb-2">
                  <button
                    type="button"
                    className="btn btn-primary btnsimpanisipoling"
                    style={{ width: 110, padding: 2, fontSize: 12 }}
                    disabled={submitting}
                    onClick={handleSubmitPoll}
                  >
                    {submitting ? "Loading..." : "PILIH"}
                  </button>{" "}
                  <button type="button" className="btn btn-info btnlihatpoling" style={{ width: 110, padding: 2, fontSize: 12 }}>
                    LIHAT HASIL
                  </button>
                </center>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
