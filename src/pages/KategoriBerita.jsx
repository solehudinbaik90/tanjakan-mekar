import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BeritaCard from "../components/cards/BeritaCard.jsx";
import Sidebar from "../layout/Sidebar.jsx";
import { getBeritaByKategori, kategoriBerita } from "../data/beritaData.js";
import { siteConfig } from "../data/siteConfig.js";

export default function KategoriBerita() {
  const { kategoriSlug } = useParams();
  const items = getBeritaByKategori(kategoriSlug);
  const kategori = kategoriBerita.find((k) => k.slug === kategoriSlug);
  const namaKategori = kategori?.nama || items[0]?.kategori;

  useEffect(() => {
    document.title = namaKategori
      ? `Kategori: ${namaKategori} | ${siteConfig.siteName}`
      : `Kategori Tidak Ditemukan | ${siteConfig.siteName}`;
  }, [namaKategori]);

  return (
    <section className="container">
      <div className="row main_content">
        <div className="col-md-8 col-sm-12" id="content">
          {/* Breadcrumb: Home > Kategori */}
          <span className="meta-category-small single_meta_category">
            <Link className="post-category-color-text" style={{ background: "#305b90" }} to="/">
              <i className="fa fa-home" />
            </Link>
          </span>
          <span className="meta-category-small single_meta_category">
            <i className="fa fa-chevron-right" />
          </span>
          <span className="meta-category-small single_meta_category">
            {namaKategori || "Kategori"}
          </span>

          <div className="section-title">
            <h1 className="text-uppercase">
              {namaKategori ? namaKategori : "Kategori Tidak Ditemukan"}
            </h1>
          </div>

          {items.length > 0 ? (
            items.map((b) => <BeritaCard item={b} key={b.slug} />)
          ) : (
            <p className="text-muted">
              Belum ada berita untuk kategori ini.{" "}
              <Link to="/berita">Lihat semua berita</Link>
            </p>
          )}
        </div>
        <div className="col-md-4">
          <Sidebar />
        </div>
      </div>
    </section>
  );
}
