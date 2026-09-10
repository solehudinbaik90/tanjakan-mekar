import Sidebar from "../layout/Sidebar.jsx";
import { strukturOrganisasi } from "../data/profilData.js";

export default function StrukturOrganisasi() {
  const { judul, gambar, keterangan, jabatan } = strukturOrganisasi;

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

          {keterangan && (
            <p>
              <i>{keterangan}</i>
            </p>
          )}

          {jabatan?.length > 0 && (
            <>
              <h5 className="mt-4 mb-3">Susunan Jabatan</h5>
              <ul className="list-group">
                {jabatan.map((j, i) => (
                  <li
                    key={i}
                    className="list-group-item"
                    style={{ paddingLeft: `${(j.level - 1) * 24 + 16}px` }}
                  >
                    {j.level > 1 && (
                      <i className="fas fa-angle-right text-muted mr-2" />
                    )}
                    {j.nama}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div className="col-md-4">
          <Sidebar showTerpopuler />
        </div>
      </div>
    </section>
  );
}
