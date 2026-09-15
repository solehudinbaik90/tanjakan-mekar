import { Link } from "react-router-dom";
import { bankdataList } from "../data/bankdataData.js";
import Sidebar from "../layout/Sidebar.jsx";

export default function BankData() {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="section-title">
            <h1 className="text-uppercase">Bank Data</h1>
          </div>

          <div className="alert p-2 shadow-sm" style={{ background: "#AFEEEE" }}>
            Informasi mengenai peraturan, keputusan, dan/atau kebijakan yang mengikat
            dan/atau berdampak bagi publik dapat diunduh pada list dibawah. Jika data
            yang dicari tidak ditemukan, silahkan{" "}
            <Link to="/masukansaran">
              <b>klik disini</b>
            </Link>
            , untuk melakukan permintaan Informasi.
          </div>

          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  {bankdataList.map((b, i) => (
                    <tr key={b.id}>
                      <td>
                        <span className="badge badge-pill badge-light-primary">
                          {i + 1}
                        </span>{" "}
                        <span>{b.judul}</span>
                      </td>
                      <td className="text-center">
                        <span className="text-primary" style={{ fontSize: 12 }}>
                          {b.tanggal}
                        </span>
                      </td>
                      <td className="text-center">
                        <a href={b.file} target="_blank" rel="noreferrer">
                          <span className="badge badge-primary">
                            <i className="fas fa-download" />
                          </span>
                        </a>
                      </td>
                    </tr>
                  ))}
                  {bankdataList.length === 0 && (
                    <tr>
                      <td colSpan={3} className="text-center text-muted py-3">
                        Belum ada data bank data yang tersedia.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <Sidebar />
        </div>
      </div>
    </section>
  );
}
