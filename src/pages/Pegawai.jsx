import { useState } from "react";
import PegawaiCard from "../components/cards/PegawaiCard.jsx";
import Modal from "../components/common/Modal.jsx";
import Pagination from "../components/common/Pagination.jsx";
import Sidebar from "../layout/Sidebar.jsx";
import { pegawaiList } from "../data/pegawaiData.js";

const PER_PAGE = 6;

export default function Pegawai() {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);

  const totalPages = Math.ceil(pegawaiList.length / PER_PAGE);
  const paged = pegawaiList.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <section className="container">
      <div className="row">
        <div className="col-md-9">
          <div className="section-title">
            <h1 className="text-uppercase">Data Pegawai</h1>
          </div>
          <div className="row text-center">
            {paged.map((p) => (
              <div className="col-md-4 mb-3" key={p.id}>
                <PegawaiCard pegawai={p} onView={setSelected} />
                <button className="btn btn-sm btn-success mt-2" onClick={() => setSelected(p)}>
                  <i className="fas fa-chalkboard-teacher" /> Lihat Detail
                </button>
              </div>
            ))}
          </div>
          <Pagination currentPage={page} totalPages={totalPages} onChange={setPage} />
        </div>
        <div className="col-md-3">
          <Sidebar />
        </div>
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.nama}>
        {selected && (
          <div className="text-center">
            <img src={selected.foto} alt={selected.nama} style={{ width: 150 }} className="rounded mb-2" />
            <p><b>Jabatan:</b> {selected.jabatan}</p>
          </div>
        )}
      </Modal>
    </section>
  );
}
