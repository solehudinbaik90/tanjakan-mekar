import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SliderWrapper from "../components/common/SliderWrapper.jsx";
import SectionTitle from "../components/common/SectionTitle.jsx";
import BeritaCard from "../components/cards/BeritaCard.jsx";
import PegawaiCard from "../components/cards/PegawaiCard.jsx";
import InfoServiceCard from "../components/cards/InfoServiceCard.jsx";
import Modal from "../components/common/Modal.jsx";
import Sidebar from "../layout/Sidebar.jsx";
import { fetchPenawaran } from "../services/penawaranService.js";

import { homeSliderBanner, midAdsBanner } from "../data/bannerData.js";
import { beritaUtama, beritaSamping, beritaList, artikelList } from "../data/beritaData.js";
import { pegawaiList, kepalaDinas } from "../data/pegawaiData.js";
import { agendaList } from "../data/agendaData.js";
import { pengumumanList } from "../data/pengumumanData.js";
import { layananShortcut } from "../data/layananData.js";
import { ebookList } from "../data/ebookData.js";
import { linkTerkaitList } from "../data/linkTerkaitData.js";
import { fotoList } from "../data/fotoData.js";
import { statistikList } from "../data/statistikData.js";
import { siteConfig } from "../data/siteConfig.js";

export default function Home() {
  const [pegawaiModal, setPegawaiModal] = useState(null);
  const [sambutanOpen, setSambutanOpen] = useState(false);
  const [pengumumanModal, setPengumumanModal] = useState(null);
  const [fotoModal, setFotoModal] = useState(null);
  const [infografisModal, setInfografisModal] = useState(null);
  const [penawaranModal, setPenawaranModal] = useState(null);

  useEffect(() => {
    let isMounted = true;
    fetchPenawaran().then((data) => {
      if (isMounted && data) setPenawaranModal(data);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="container">
      {/* Slider banner utama */}
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <SliderWrapper className="jl-w-slider jl_full_feature_w mb-0">
            {homeSliderBanner.map((b, i) => (
              <div className="item-slide jl_radus_e" key={i}>
                <div className="slide-inner">
                  <a href={b.to} target="_blank" rel="noreferrer">
                    <img src={b.image} title={b.title} alt={b.title} />
                  </a>
                </div>
              </div>
            ))}
          </SliderWrapper>
        </div>

        {/* Marquee pengumuman */}
        <div className="col-md-12 col-sm-12 mb-3">
          <div id="pengumuman" className="pengumuman">
            <div className="info-dinas-header">
              <span className="re-info">Pengumuman <i className="fas fa-bullhorn text-light" /></span>
            </div>
            <div className="dinas-info col-md-12">
              <marquee className="item" onMouseOver={(e) => e.currentTarget.stop()} onMouseOut={(e) => e.currentTarget.start()}>
                {pengumumanList.map((p) => (
                  <span key={p.id} style={{ marginRight: 40 }}>
                    <span style={{ color: "#f5f5f5", background: "orange", padding: "3px 5px" }}>
                      {p.tanggal}
                    </span>{" "}
                    <span className="pointer" onClick={() => setPengumumanModal(p)}>{p.judul}</span>
                  </span>
                ))}
              </marquee>
            </div>
          </div>
        </div>
      </div>

      <Modal open={!!pengumumanModal} onClose={() => setPengumumanModal(null)} title={pengumumanModal?.judul}>
        {pengumumanModal && (
          <div>
            <p className="text-muted">{pengumumanModal.tanggal}</p>
            <p style={{ textAlign: "justify" }}>{pengumumanModal.isi || pengumumanModal.judul}</p>
          </div>
        )}
      </Modal>

      {/* Berita utama + berita samping (BeritaCard variant="compact") */}
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <div className="jl_m_center blog-style-one blog-small-grid">
            <div className="jl-w-slider jl_full_feature_w">
              <div className="item-slide jl_m_center_w jl_radus_e">
                <div className="slide-inner">
                  <div className="jl_m_center_w jl_radus_e">
                    <div
                      className="jl_f_img_bg"
                      style={{ backgroundImage: `url(${beritaUtama.image})` }}
                    />
                    <Link to={`/${beritaUtama.slug}`} className="jl_f_img_link" />
                    <div className="text-box">
                      <div className="d-flex align-items-center">
                        <span className="badge badge-primary">
                          <Link to={`/category/${beritaUtama.kategoriSlug}`}>{beritaUtama.kategori}</Link>
                        </span>
                        <span className="jl_post_meta pl-2 pb-3">
                          <span className="post-date" style={{ color: "#305b90" }}> {beritaUtama.tanggal}</span>
                        </span>
                      </div>
                      <h3><Link to={`/${beritaUtama.slug}`}>{beritaUtama.judul}</Link></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          {beritaSamping.map((b) => (
            <BeritaCard item={b} variant="compact" key={b.slug} />
          ))}
        </div>
      </div>

      {/* ================= ROW UTAMA: KONTEN (col-md-8) + SIDEBAR (col-md-4) ================= */}
      <div className="row">
        <div className="col-md-8 col-sm-12">
          {/* Section Counter / Statistik */}
          <SliderWrapper slidesToShow={4} className="jl-w-slider jl_full_feature_w mb-1">
            {statistikList.map((s, i) => (
              <div className="item-slide" style={{ marginTop: 60 }} key={i}>
                <div className="container">
                  <div className="card card-profile text-center" style={{ borderColor: s.color }}>
                    <div className="card-body p-1">
                      <div className="d-flex justify-content-center">
                        <div className="profile-image-wrapper">
                          <div className="profile-image no-border shadow-none">
                            <div className="avatars" style={{ color: s.color }}>
                              <i className={`${s.icon} fa-4x`} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <h3 className="title-cardx" style={{ paddingTop: 20 }}>
                        <a href="#" tabIndex="-1">{s.jumlah}</a>
                      </h3>
                      <div className="font-small">
                        <span className="text-muted">{s.label}</span>
                      </div>
                      <a href={s.link || "#"} target="_blank" rel="noreferrer">
                        <span className="badge badge-light-primary profile-badge">
                          {s.sumber || "Sekretariat"} <i className="fas fa-arrow-right" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </SliderWrapper>

          {/* Section TERKINI (BeritaCard variant="grid") */}
          <SectionTitle title="TERKINI" to="/berita" />
          <div className="row mb-4">
            {beritaList.map((b) => (
              <div className="col-md-6 col-12" key={b.slug}>
                <BeritaCard item={b} variant="grid" />
              </div>
            ))}
          </div>

          {/* Iklan tengah */}
          <SliderWrapper className="jl-w-slider jl_full_feature_w mb-4">
            {midAdsBanner.map((b, i) => (
              <div className="item-slide jl_radus_e" key={i}>
                <div className="slide-inner">
                  <a href={b.href} target="_blank" rel="noreferrer" title={b.title}>
                    <img
                      src={b.image}
                      alt={b.title}
                      className="img-fluid position-relative rounded"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </a>
                </div>
              </div>
            ))}
          </SliderWrapper>

          {/* Section PEGAWAI */}
          <div className="box mt-2">
            <div className="container my-5">
              <SectionTitle title="PEGAWAI" to="/pegawai" />
              <SliderWrapper slidesToShow={4} className="jl-w-slider jl_full_feature_w mb-4">
                {pegawaiList.map((p) => (
                  <div className="item-slide" key={p.id}>
                    <PegawaiCard pegawai={p} onView={setPegawaiModal} />
                  </div>
                ))}
              </SliderWrapper>
            </div>
          </div>

          {/* Section ARTIKEL (BeritaCard variant="grid") */}
          <SectionTitle title="ARTIKEL" to="/category/artikel" />
          <div className="row mb-4">
            {artikelList.map((a) => (
              <div className="col-md-6 col-12" key={a.slug}>
                <BeritaCard item={a} variant="grid" />
              </div>
            ))}
          </div>

          {/* Section INFORMASI INSTANSI */}
          <SectionTitle title="INFORMASI INSTANSI" to="/layanan" showMore={false} />
          <SliderWrapper slidesToShow={3} className="jl-w-slider jl_full_feature_w">
            {layananShortcut.map((item) => (
              <div className="item-slide" style={{ marginTop: "60px" }} key={item.label}>
                <InfoServiceCard item={item} />
              </div>
            ))}
          </SliderWrapper>

          {/* Section EBOOK */}
          <SectionTitle title="EBOOK" to="/ebook" />
          <div className="row mb-4">
            {ebookList.map((eb) => (
              <div className="col-md-6 mb-4" key={eb.id}>
                <div className="jl_topik_center blog-style-one blog-small-grid">
                  <div className="jl_topik_center_w jl_radus_e" style={{ maxHeight: 350 }}>
                    <div className="jl_f_img_bg" style={{ backgroundImage: `url(${eb.thumb})` }} />
                    <a href={eb.file} target="_blank" rel="noreferrer" className="jl_f_img_link" title="Baca Buku" />
                    <div className="text-box">
                      <div className="jl_post_meta">
                        <span className="jl_post_meta jl_f_cat">
                          <a style={{ background: "#305b90" }} className="post-category-color-text">{eb.kategori}</a>
                        </span>
                      </div>
                      <h3><a href={eb.file} target="_blank" rel="noreferrer">{eb.judul}</a></h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section GALERI FOTO */}
          <SectionTitle title="GALERI FOTO" to="/foto" showMore={false} />
          <SliderWrapper slidesToShow={2} className="jl-w-slider jl_full_feature_w">
            {fotoList.map((f) => (
              <div className="item-slide jl_m_center_w jl_radus_e" key={f.id}>
                <div className="slide-inner m-1">
                  <div className="card-mod jl_grid_w shadow-sm">
                    <div className="jl_img_box jl_radus_e">
                      <a className="pointer" onClick={() => setFotoModal(f)}>
                        <span className="jl_post_type_icon"><i className="jli-gallery" /></span>
                        <img
                          width="500"
                          height="350"
                          src={f.image}
                          className="attachment-sprasa_slider_grid_small size-sprasa_slider_grid_small wp-post-image"
                          alt={f.judul}
                          loading="lazy"
                        />
                      </a>
                    </div>
                    <span className="jl_post_meta pl-2">
                      <span className="post-date" style={{ color: "#305b90" }}>{f.tanggal}</span>
                    </span>
                    <div className="video-text pl-2 pr-2 pb-2">
                      <h3><a className="pointer" onClick={() => setFotoModal(f)}>{f.judul}</a></h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </SliderWrapper>

          <Modal open={!!fotoModal} onClose={() => setFotoModal(null)} title={fotoModal?.judul}>
            {fotoModal && <img src={fotoModal.image} alt={fotoModal.judul} className="img-fluid rounded" />}
          </Modal>
        </div>

        {/* ================= SIDEBAR + theiaStickySidebar ================= */}
        <div className="col-md-4 col-sm-12">
          <div className="theiaStickySidebar">
            <div className="section-title">
              <h1 className="text-uppercase"><Link to="/opini">Kepala Dinas</Link></h1>
            </div>
            <div className="card p-0 shadow-sm">
              <div className="card-body p-1">
                <div className="justify-content-between align-items-center text-center">
                  <img
                    src={kepalaDinas.foto}
                    alt={kepalaDinas.nama}
                    className="pointer"
                    onClick={() => setSambutanOpen(true)}
                  />
                  <br />
                  <span className="badge badge-light-primary profile-badge text-center">
                    {kepalaDinas.nama} <i className="fas fa-arrow-right" />
                  </span>
                </div>
              </div>
            </div>

            <Modal open={sambutanOpen} onClose={() => setSambutanOpen(false)} title={`Sambutan ${kepalaDinas.nama}`}>
              <p style={{ textAlign: "justify", whiteSpace: "pre-line" }}>{kepalaDinas.sambutan}</p>
            </Modal>

            {/* showKategori dimatikan karena homepage tidak punya widget "Kategori Berita" di sidebar */}
            <Sidebar
              showKategori={false}
              showTerpopuler
              showInfografis
              showJajakPendapat
              onInfografisPreview={setInfografisModal}
            />

            <div className="section-title mt-3">
              <h1 className="text-uppercase"><Link to="/agenda">Agenda</Link></h1>
            </div>
            {agendaList.slice(0, 5).map((a) => (
              <div className="card p-0 shadow-sm mb-2" key={a.id}>
                <div className="card-body p-1">
                  <h3 className="title-card">{a.judul}</h3>
                  <span className="jl_post_meta">{a.lokasi} | {a.tanggalMulai} - {a.tanggalSelesai}</span>
                </div>
              </div>
            ))}

            <div className="card p-2 mt-3">
              <div className="card-body p-1">
                <h3 className="title-card">{siteConfig.visiMisiQuote}</h3>
              </div>
            </div>

            <div className="section-title mt-3">
              <h1 className="text-uppercase">
                <a href={siteConfig.mapUrl} target="_blank" rel="noreferrer">KANTOR KAMI</a>
              </h1>
            </div>
            <iframe
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Kantor"
            />
          </div>
        </div>
      </div>

      {/* Link terkait */}
      <div className="row mb-3">
        <SliderWrapper slidesToShow={4} className="jl-w-slider jl_full_feature_w mb-3">
          {linkTerkaitList.map((l) => (
            <div className="item-slide jl_radus_e" key={l.nama}>
              <div className="slide-inner">
                <div className="card p-0 m-2 shadow-sm">
                  <div className="card-body p-2">
                    <div className="d-flex justify-content-center">
                      <center>
                        <a href={l.url} target="_blank" rel="noreferrer">
                          <img src={l.logo} alt={l.nama} style={{ maxHeight: 47 }} />
                          {l.nama}
                        </a>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </SliderWrapper>
      </div>

      <Modal open={!!infografisModal} onClose={() => setInfografisModal(null)} title="Infografis">
        {infografisModal && <img src={infografisModal.image} alt="Infografis" className="img-fluid rounded" />}
      </Modal>

      <Modal open={!!penawaranModal} onClose={() => setPenawaranModal(null)} title={penawaranModal?.judul}>
        {penawaranModal && <div dangerouslySetInnerHTML={{ __html: penawaranModal.konten }} />}
      </Modal>

      <Modal open={!!pegawaiModal} onClose={() => setPegawaiModal(null)} title={pegawaiModal?.nama}>
        {pegawaiModal && (
          <div className="text-center">
            <img src={pegawaiModal.foto} alt={pegawaiModal.nama} style={{ width: 150 }} className="rounded mb-2" />
            <p><b>Jabatan:</b> {pegawaiModal.jabatan}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}
