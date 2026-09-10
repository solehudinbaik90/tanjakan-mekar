import Sidebar from "../layout/Sidebar.jsx";
import { tugasPokokFungsi } from "../data/profilData.js";

export default function TugasPokokFungsi() {
  const { judul, gambar, tugas, fungsiIntro, fungsi } = tugasPokokFungsi;

  return (
    <section className="container">
      <div className="row main_content">
        <div className="col-md-8">
          <h2 className="single_post_title_main">{judul}</h2>
          <hr />

          {gambar && (
            <div className="single_content_header jl_single_feature_below mb-3">
              <img
                src={gambar}
                alt={judul}
                className="img-fluid w-100 rounded"
                loading="lazy"
              />
            </div>
          )}

          <h5>
            <strong>Tugas</strong>
          </h5>
          <p style={{ textAlign: "justify" }}>{tugas}</p>

          <h5>
            <strong>Fungsi</strong>
          </h5>
          <p>{fungsiIntro}</p>
          <ul>
            {fungsi.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="col-md-4">
          <Sidebar showTerpopuler />
        </div>
      </div>
    </section>
  );
}
