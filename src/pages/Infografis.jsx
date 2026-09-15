import { useState } from "react";
import Modal from "../components/common/Modal.jsx";
import Pagination from "../components/common/Pagination.jsx";
import Sidebar from "../layout/Sidebar.jsx";
import { infografisFullList } from "../data/infografisData.js";

const PER_PAGE = 6;

export default function Infografis() {
  const [page, setPage] = useState(1);
  const [preview, setPreview] = useState(null);

  const totalPages = Math.ceil(infografisFullList.length / PER_PAGE);
  const paged = infografisFullList.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleChangePage = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="container">
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <div className="ettitle jl_cat_mid_title text-center widget-title">
            <h4 className="categories-title title jl_title_c">Kumpulan Infografis</h4>
          </div>

          <div className="row">
            {paged.map((info) => (
              <div className="col-md-6 mb-4" key={info.id}>
                <div className="jl_topik_center blog-style-one blog-small-grid">
                  <div
                    className="jl_topik_center_w jl_radus_e pointer"
                    style={{ maxHeight: 350, position: "relative" }}
                    onClick={() => setPreview(info)}
                  >
                    <div
                      className="jl_f_img_bg"
                      style={{ backgroundImage: `url(${info.image})` }}
                    />
                    <div className="text-box">
                      <h3>
                        <span>{info.judul}</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-center mt-4 mb-3">
            <Pagination currentPage={page} totalPages={totalPages} onChange={handleChangePage} />
          </div>
        </div>

        <div className="col-md-4 col-sm-12">
          <Sidebar showInfografis={false} />
        </div>
      </div>

      <Modal open={!!preview} onClose={() => setPreview(null)} title={preview?.judul}>
        {preview && (
          <img src={preview.image} alt={preview.judul} className="img-fluid rounded" />
        )}
      </Modal>
    </section>
  );
}
