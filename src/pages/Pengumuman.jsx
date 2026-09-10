import { pengumumanList } from "../data/pengumumanData.js";
import Sidebar from "../layout/Sidebar.jsx";

export default function Pengumuman() {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="section-title">
            <h1 className="text-uppercase">Daftar Pengumuman</h1>
          </div>
          {pengumumanList.map((p) => (
            <div className="list-group mt-2" key={p.id}>
              <div className="list-group-item list-group-item-action pointer">
                <div>{p.judul}</div>
                <div className="list-posted">
                  <i className="far fa-calendar-alt" /> {p.tanggal} | <i className="far fa-eye" /> {p.dibaca} kali
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
