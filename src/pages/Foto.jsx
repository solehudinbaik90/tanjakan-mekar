import Sidebar from "../layout/Sidebar.jsx";

const albumFoto = [
  { id: 7, judul: "CMS Datagoe", jumlah: 4, cover: "/img/galeri/katfoto/1.jpg" },
  { id: 6, judul: "Sistem Informasi Administrasi Desa (SIAD)", jumlah: 1, cover: "/img/galeri/katfoto/2.png" },
  { id: 2, judul: "Bidang Pembangunan", jumlah: 2, cover: "/img/galeri/katfoto/3.png" },
  { id: 1, judul: "Kegiatan Rutin", jumlah: 6, cover: "/img/galeri/katfoto/4.jpg" },
];

export default function Foto() {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-8">
          <h4 className="text-center">Album Foto</h4>
          <div className="row">
            {albumFoto.map((f) => (
              <div className="col-md-6 mb-4" key={f.id}>
                <div className="jl_topik_center_w jl_radus_e" style={{ position: "relative", height: 260 }}>
                  <div className="jl_f_img_bg" style={{ backgroundImage: `url(${f.cover})`, height: "100%", backgroundSize: "cover" }} />
                  <div className="text-box">
                    <span className="jl_f_cat"><a style={{ background: "#305b90" }} className="post-category-color-text">{f.jumlah} Foto</a></span>
                    <h3>{f.judul}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4"><Sidebar /></div>
      </div>
    </section>
  );
}
