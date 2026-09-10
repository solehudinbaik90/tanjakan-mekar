import { useState } from "react";
import AgendaCard from "../components/cards/AgendaCard.jsx";
import Modal from "../components/common/Modal.jsx";
import Sidebar from "../layout/Sidebar.jsx";
import { agendaList } from "../data/agendaData.js";

export default function Agenda() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="section-title">
            <h1 className="text-uppercase">Daftar Agenda</h1>
          </div>
          {agendaList.map((a) => <AgendaCard agenda={a} key={a.id} onView={setSelected} />)}
        </div>
        <div className="col-md-4">
          <Sidebar />
        </div>
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.judul}>
        {selected && (
          <p>
            <b>Lokasi:</b> {selected.lokasi} <br />
            <b>Tanggal:</b> {selected.tanggalMulai} - {selected.tanggalSelesai}
          </p>
        )}
      </Modal>
    </section>
  );
}
