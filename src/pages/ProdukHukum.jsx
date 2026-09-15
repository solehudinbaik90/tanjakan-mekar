import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../layout/Sidebar.jsx";
import { produkHukumList, iconForTipe } from "../data/produkHukumData.js";

export default function ProdukHukum() {
  const [openId, setOpenId] = useState(produkHukumList[0]?.id ?? null);

  return (
    <section className="container">
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <div className="section-title">
            <h1 className="text-uppercase">Daftar Produk Hukum</h1>
          </div>

          <div
            className="alert alert-light p-2 mb-3"
            style={{ background: "#f4f4f4", borderColor: "#e3e3e3" }}
          >
            Informasi mengenai peraturan, keputusan, dan/atau kebijakan yang mengikat
            dan/atau berdampak bagi publik dapat diunduh pada list dibawah. Jika data
            yang dicari tidak ditemukan, silahkan klik{" "}
            <Link to="/masukansaran"><b>disini</b></Link>, untuk lakukan permintaan
            informasi.
          </div>

          <div className="accordion" id="accordionProduk">
            {produkHukumList.map((kat) => {
              const isOpen = openId === kat.id;

              return (
                <div className="card shadow-sm mb-2 border-0 rounded" key={kat.id}>
                  <div
                    className="card-header bg-light p-2 pointer"
                    onClick={() => setOpenId(isOpen ? null : kat.id)}
                  >
                    <h6 className="mb-0 d-flex justify-content-between align-items-center">
                      <span className="text-dark font-weight-bold">
                        <i className="fa fa-balance-scale text-primary mr-2" />
                        {kat.kategori}
                      </span>
                      <i className={`fa fa-chevron-${isOpen ? "up" : "down"} text-muted`} />
                    </h6>
                  </div>

                  {isOpen && (
                    <div className="card-body p-3" style={{ background: "#f8f9fa" }}>
                      {kat.items && (
                        <ul className="list-group list-group-flush mb-2">
                          {kat.items.map((item, i) => (
                            <li className="list-group-item d-flex align-items-center" key={item.nama}>
                              <span className="mr-2 text-muted">{i + 1}.</span>
                              <a href={item.file} target="_blank" rel="noreferrer" className="text-primary">
                                <i className={`${iconForTipe(item.tipe)} mr-1`} />
                                {item.nama}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}

                      {kat.subkategori?.map((sub) => (
                        <ul className="list-group list-group-flush mb-2" key={sub.nama}>
                          <li className="list-group-item text-uppercase font-weight-bold bg-light">
                            <i className="fa fa-folder-open text-warning mr-1" />
                            {sub.nama}
                          </li>
                          {sub.items.map((item, i) => (
                            <li className="list-group-item pl-4" key={item.nama}>
                              <span className="mr-2 text-muted">{i + 1}.</span>
                              <a href={item.file} target="_blank" rel="noreferrer" className="text-dark">
                                <i className={`${iconForTipe(item.tipe)} mr-1`} />
                                {item.nama}
                              </a>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-md-4 col-sm-12">
          <Sidebar />
        </div>
      </div>
    </section>
  );
}
