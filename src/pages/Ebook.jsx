import { useMemo, useState } from "react";
import Sidebar from "../layout/Sidebar.jsx";
import { ebookList } from "../data/ebookData.js";

export default function Ebook() {
  const kategoriList = useMemo(() => {
    const unik = [...new Set(ebookList.map((e) => e.kategori))];
    return ["Semua", ...unik];
  }, []);

  const [filter, setFilter] = useState("Semua");
  const filtered =
    filter === "Semua" ? ebookList : ebookList.filter((e) => e.kategori === filter);

  return (
    <section className="container">
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <div className="ettitle jl_cat_mid_title text-center widget-title">
            <h4 className="categories-title title jl_title_c">Buku Digital</h4>
          </div>

          <div className="mb-3 text-center">
            {kategoriList.map((k) => (
              <button
                key={k}
                type="button"
                className={`btn btn-sm mr-2 mb-2 ${filter === k ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setFilter(k)}
              >
                {k}
              </button>
            ))}
          </div>

          <div className="row">
            {filtered.map((eb) => (
              <div className="col-12 col-md-6 col-lg-4" key={eb.id}>
                <div className="single-blog-post style-4 mb-10">
                  <div className="post-thumbnail">
                    <img
                      src={eb.thumb}
                      alt={eb.judul}
                      className="img-gallery image1 d-only"
                      style={{ background: "#fff", border: "1px solid #ddd", padding: 2, width: "100%" }}
                    />
                  </div>
                  <h3 className="title-card mt-2">{eb.judul}</h3>
                  <span className="badge badge-light-primary mb-2">{eb.kategori}</span>
                  <div className="pt-0 mb-0">
                    <a
                      className="btn btn-success btn-sm"
                      href={eb.file}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Baca Buku <i className="mdi mdi-arrow-right" />
                    </a>
                  </div>
                  <hr />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-4 col-sm-12">
          <Sidebar />
        </div>
      </div>
    </section>
  );
}
