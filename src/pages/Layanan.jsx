import { Link } from "react-router-dom";
import { layananList } from "../data/layananData.js";
import Sidebar from "../layout/Sidebar.jsx";

export default function Layanan() {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="section-title">
            <h1 className="text-uppercase">Daftar Layanan Kami</h1>
          </div>
          <div className="alert p-2 shadow-sm" style={{ background: "#AFEEEE" }}>
            Anda punya pertanyaan, keluhan, masukan atau saran seputar pelayanan kami?{" "}
            <Link to="/masukansaran"><b>Klik disini</b></Link>.
          </div>
          {layananList.map((l) => (
            <div className="list-group mt-2" key={l.id}>
              <div className="list-group-item list-group-item-action pointer">
                <div className="media-body">
                  <div>{l.judul}</div>
                  <div className="list-posted">
                    <i className="fas fa-user-alt" /> {l.penulis} | <i className="far fa-calendar-alt" /> {l.tanggal} |{" "}
                    <i className="far fa-eye" /> {l.dilihat} kali
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <Sidebar />
        </div>
      </div>
    </section>
  );
}
