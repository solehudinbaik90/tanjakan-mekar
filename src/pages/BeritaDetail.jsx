import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BeritaCard from "../components/cards/BeritaCard.jsx";
import Sidebar from "../layout/Sidebar.jsx";
import { getBeritaBySlug, getBeritaByKategori } from "../data/beritaData.js";
import { siteConfig } from "../data/siteConfig.js";

export default function BeritaDetail() {
  const { slug } = useParams();
  const item = getBeritaBySlug(slug);

  useEffect(() => {
    document.title = item
      ? `${item.judul} | ${siteConfig.siteName}`
      : `Berita Tidak Ditemukan | ${siteConfig.siteName}`;
  }, [item]);

  if (!item) {
    return (
      <section className="container py-5 text-center">
        <h2>Berita Tidak Ditemukan</h2>
        <p className="text-muted">
          Artikel yang Anda cari mungkin sudah dihapus atau alamatnya salah.
        </p>
        <Link to="/berita" className="btn btn-primary">
          Kembali ke Daftar Berita
        </Link>
      </section>
    );
  }

  const shareUrl = `${siteConfig.baseUrl}/${item.slug}`;

  const related = getBeritaByKategori(item.kategoriSlug)
    .filter((b) => b.slug !== item.slug)
    .slice(0, 4);

  const handleCopyLink = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert("Tautan berhasil disalin");
    } catch {
      window.prompt("Salin tautan berikut:", shareUrl);
    }
  };

  return (
    <section className="container">
      <div className="row main_content">
        <div className="col-md-8 col-sm-12" id="content">
          <div className="single_post_entry_content single_bellow_left_align jl_top_single_title jl_top_title_feature">
            <span className="meta-category-small single_meta_category">
              <Link className="post-category-color-text" style={{ background: "#305b90" }} to="/">
                <i className="fa fa-home" />
              </Link>
            </span>
            <span className="meta-category-small single_meta_category">
              <i className="fa fa-chevron-right" />
            </span>
            <span className="meta-category-small single_meta_category">
              <Link
                className="post-category-color-text"
                style={{ background: "#305b90" }}
                to={`/category/${item.kategoriSlug}`}
              >
                {item.kategori}
              </Link>
            </span>

            <div className="section-title">
              <h2>{item.judul}</h2>
            </div>

            <span className="jl_post_meta">
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <span>
                  <i className="fa fa-user mr-1" /> {item.penulis || "Redaksi"}
                </span>
                <span style={{ color: "#305b90" }}>{item.tanggal}</span>
              </div>
            </span>
          </div>

          <div className="single_content_header jl_single_feature_below">
            <img src={item.image} alt={item.judul} className="w-100 rounded" loading="lazy" />
          </div>

          <div className="post_content jl_content mt-3">
            <p style={{ textAlign: "justify" }}>{item.ringkasan}</p>
          </div>

          <div className="jl_single_share_wrapper jl_clear_at my-3">
            <ul className="single_post_share_icon_post">
              <li className="single_post_share_facebook">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="jli-facebook" />
                </a>
              </li>
              <li className="single_post_share_twitter">
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="jli-twitter" />
                </a>
              </li>
              <li className="single_post_share_whatsapp">
                <a
                  href={`whatsapp://send?text=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-whatsapp" />
                </a>
              </li>
              <li className="single_post_share_linkedin">
                <a href="#" onClick={handleCopyLink}>
                  <i className="jli-link" />
                </a>
              </li>
            </ul>
          </div>

          {related.length > 0 && (
            <>
              <div className="section-title mt-4">
                <h1 className="text-uppercase">Berita Terkait</h1>
              </div>
              <div className="row">
                {related.map((r) => (
                  <div className="col-md-6 col-12" key={r.slug}>
                    <BeritaCard item={r} variant="grid" />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="col-md-4 col-sm-12">
          <Sidebar showTerpopuler />
        </div>
      </div>
    </section>
  );
}
