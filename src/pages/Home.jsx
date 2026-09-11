import { Link } from "react-router-dom";
import SliderWrapper from "../components/common/SliderWrapper.jsx";
import SectionTitle from "../components/common/SectionTitle.jsx";
import BeritaCard from "../components/cards/BeritaCard.jsx";
import PegawaiCard from "../components/cards/PegawaiCard.jsx";
import InfoServiceCard from "../components/cards/InfoServiceCard.jsx";
import Modal from "../components/common/Modal.jsx";
import Sidebar from "../layout/Sidebar.jsx";
import { useState } from "react";

import { homeSliderBanner, midAdsBanner } from "../data/bannerData.js";
import { beritaUtama, beritaSamping, beritaList } from "../data/beritaData.js";
import { pegawaiList, kepalaDinas } from "../data/pegawaiData.js";
import { agendaList } from "../data/agendaData.js";
import { pengumumanList } from "../data/pengumumanData.js";
import { layananShortcut } from "../data/layananData.js";
import { ebookList } from "../data/ebookData.js";
import { linkTerkaitList } from "../data/linkTerkaitData.js";
import { siteConfig } from "../data/siteConfig.js";

export default function Home() {
  const [pegawaiModal, setPegawaiModal] = useState(null);
  const [sambutanOpen, setSambutanOpen] = useState(false);

  return (
    <div className="container">
      {/* Slider banner utama */}
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <SliderWrapper className="mb-0">
            {homeSliderBanner.map((b, i) => (
              <div className="item-slide jl_radus_e" key={i}>
                <div className="slide-inner">
                  <Link to={b.to}>
                    <img src={b.image} title={b.title} alt={b.title} className="img-fluid" />
                  </Link>
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
              <marquee className="item" onMouseOver={(e) => e.target.stop()} onMouseOut={(e) => e.target.start()}>
                {pengumumanList.map((p) => (
                  <span key={p.id} style={{ marginRight: 40 }}>
                    <span style={{ color: "#f5f5f5", background: "orange", padding: "3px 5px" }}>
                      {p.tanggal}
                    </span>{" "}
                    <span className="pointer">{p.judul}</span>
                  </span>
                ))}
              </marquee>
            </div>
          </div>
        </div>
      </div>

      {/* Berita utama + 4 berita samping */}
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
          {beritaSamping.map((b) => <BeritaCard item={b} key={b.slug} />)}
        </div>
      </div>

      {/* Section TERKINI */}
      <SectionTitle title="TERKINI" to="/berita" />
      <div className="row mb-4">
        {beritaList.map((b) => (
          <div className="col-md-6 col-12" key={b.slug}>
            <BeritaCard item={b} />
          </div>
        ))}
      </div>

      {/* Iklan tengah */}
      <SliderWrapper className="mb-4">
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
      <SectionTitle title="PEGAWAI" to="/pegawai" />
      <SliderWrapper slidesToShow={4} className="mb-4">
        {pegawaiList.map((p) => (
          <div className="item-slide" key={p.id}>
            <PegawaiCard pegawai={p} onView={setPegawaiModal} />
          </div>
        ))}
      </SliderWrapper>

      <Modal open={!!pegawaiModal} onClose={() => setPegawaiModal(null)} title={pegawaiModal?.nama}>
        {pegawaiModal && (
          <div className="text-center">
            <img src={pegawaiModal.foto} alt={pegawaiModal.nama} style={{ width: 150 }} className="rounded mb-2" />
            <p><b>Jabatan:</b> {pegawaiModal.jabatan}</p>
          </div>
        )}
      </Modal>

      {/* Section ARTIKEL / INFORMASI INSTANSI */}
      <SectionTitle title="INFORMASI INSTANSI" to="/layanan" />
      <SliderWrapper slidesToShow={3} className="mb-4">
        {layananShortcut.map((item) => (
          <div className="item-slide" key={item.label}><InfoServiceCard item={item} /></div>
        ))}
      </SliderWrapper>

      {/* EBOOK */}
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

      {/* Layout dua kolom: konten (kiri sudah selesai di atas) + sidebar kanan */}
      <div className="row">
        <div className="col-md-8 col-sm-12" />
        <div className="col-md-4 col-sm-12">
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

          <Sidebar showTerpopuler />

          <div className="section-title mt-3">
            <h1 className="text-uppercase"><Link to="/agenda">Agenda</Link></h1>
          </div>
          {agendaList.slice(0, 4).map((a) => (
            <div className="card p-0 shadow-sm mb-2" key={a.id}>
              <div className="card-body p-1">
                <h3 className="title-card">{a.judul}</h3>
                <span className="jl_post_meta">{a.lokasi} | {a.tanggalMulai} - {a.tanggalSelesai}</span>
              </div>
            </div>
          ))}

          <div className="card p-2 mt-3">
            <div className="card-body p-1">
              <h3 className="title-card">
                “Mewujudkan Kabupaten Lembata sebagai{" "}
                <i style={{ color: "#AC0C0C" }}>kota budaya</i> yang Modern, Tangguh, Gesit,
                Kreatif dan Sejahtera”
              </h3>
            </div>
          </div>

          <div className="section-title mt-3">
            <h1 className="text-uppercase">KANTOR KAMI</h1>
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

      {/* Link terkait */}
      <div className="row mb-3 mt-4">
        <SliderWrapper slidesToShow={4} className="mb-3">
          {linkTerkaitList.map((l) => (
            <div className="item-slide jl_radus_e" key={l.nama}>
              <div className="card p-0 m-2 shadow-sm">
                <div className="card-body p-2 text-center">
                  <a href={l.url} target="_blank" rel="noreferrer">
                    <img src={l.logo} alt={l.nama} style={{ maxHeight: 47 }} />
                    <div>{l.nama}</div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </SliderWrapper>
      </div>
    </div>
  );
}
