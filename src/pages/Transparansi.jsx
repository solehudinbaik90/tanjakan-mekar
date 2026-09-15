import { useMemo, useState } from "react";
import Sidebar from "../layout/Sidebar.jsx";
import {
  transparansiTahunList,
  transparansiJudulByTahun,
  transparansiChartData,
} from "../data/transparansiData.js";

export default function Transparansi() {
  const [tahun, setTahun] = useState("");
  const [judul, setJudul] = useState("");
  const [terapkan, setTerapkan] = useState(false);

  const opsiJudul = tahun ? transparansiJudulByTahun[tahun] || [] : [];
  const chart = terapkan && judul ? transparansiChartData[judul] : null;

  const maxNilai = useMemo(
    () => (chart ? Math.max(...chart.items.map((i) => i.nilai)) : 0),
    [chart]
  );

  return (
    <section className="container">
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <div className="section-title">
            <h1 className="text-uppercase">Transparansi</h1>
          </div>

          <div
            className="row pt-3"
            style={{ background: "#fff8dc", borderRadius: 5, border: "1px solid #ffdb92" }}
          >
            <div className="col-lg-10 col-md-12 col-sm-12">
              <div className="mb-3 d-flex flex-wrap">
                <div className="col-lg-4 col-md-6 col-sm-12 px-0 pr-md-2 mb-2">
                  <select
                    className="form-control pointer"
                    value={tahun}
                    onChange={(e) => {
                      setTahun(e.target.value);
                      setJudul("");
                      setTerapkan(false);
                    }}
                  >
                    <option value="">-- Pilih Tahun --</option>
                    {transparansiTahunList.map((t) => (
                      <option value={t} key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-grow-1 px-0">
                  <select
                    className="form-control pointer"
                    value={judul}
                    onChange={(e) => {
                      setJudul(e.target.value);
                      setTerapkan(false);
                    }}
                    disabled={!tahun}
                  >
                    <option value="" disabled>-- Silahkan Pilih Judul --</option>
                    {opsiJudul.map((j) => (
                      <option value={j} key={j}>{j}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-12 col-sm-12 mb-3">
              <button
                type="button"
                className="btn btn-block btn-primary"
                disabled={!judul}
                onClick={() => setTerapkan(true)}
              >
                Terapkan
              </button>
            </div>
          </div>

          <div className="card m-b-20 mt-3">
            <div className="card-body">
              {!terapkan && (
                <p className="text-center text-muted mb-0">
                  Pilih tahun dan judul data, lalu klik <b>Terapkan</b> untuk menampilkan grafik.
                </p>
              )}

              {terapkan && !chart && (
                <p className="text-center text-muted mb-0">
                  Data untuk tahun/judul ini belum tersedia.
                </p>
              )}

              {chart && (
                <div>
                  <h5 className="text-center mb-4">{judul}</h5>
                  {chart.items.map((item) => (
                    <div className="mb-3" key={item.label}>
                      <div className="d-flex justify-content-between">
                        <span>{item.label}</span>
                        <span>
                          <b>{item.nilai.toLocaleString("id-ID")} {chart.satuan}</b>
                        </span>
                      </div>
                      <div className="progress" style={{ height: 22 }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: `${(item.nilai / maxNilai) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div
            className="alert p-2 shadow-sm mt-3"
            style={{ background: "#AFEEEE", borderColor: "#e3e3e3" }}
          >
            Anda punya pertanyaan, keluhan, masukan atau saran seputar pelayanan kami?{" "}
            <Link to="/masukansaran"><b>Klik disini</b></Link>, untuk sampaikan.
          </div>
        </div>

        <div className="col-md-4 col-sm-12">
          <Sidebar />
        </div>
      </div>
    </section>
  );
}
