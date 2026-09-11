export default function AgendaCard({ agenda, onView }) {
  return (
    <div className="card p-0 shadow-sm mb-2 pointer" onClick={() => onView(agenda)}>
      <div className="card-body p-1">
        <div className="row align-items-center">
          <div className="col-3 pl-3">
            <img
              src="/img/informasi/agenda/agenda128.png"
              alt="agenda"
              className="rounded"
              style={{ width: 75, height: "auto" }}
            />
          </div>
          <div className="col-9">
            <h3 className="title-card">{agenda.judul}</h3>
            <span className="jl_post_meta">
              <span className="text-primary">{agenda.lokasi}</span>
              <span> | </span>
              <span className="post-date" style={{ color: "#647277" }}>
                {agenda.tanggalMulai} - {agenda.tanggalSelesai}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
