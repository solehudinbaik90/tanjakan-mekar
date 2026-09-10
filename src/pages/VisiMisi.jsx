import Sidebar from "../layout/Sidebar.jsx";
import { siteConfig } from "../data/siteConfig.js";

export default function VisiMisi() {
  const { visi, misi } = siteConfig.visiMisi;

  return (
    <section className="container">
      <div className="row main_content">
        <div className="col-md-8">
          <h2 className="single_post_title_main">Visi dan Misi</h2>
          <hr />
          <p><b>VISI PEMERINTAH DAERAH KABUPATEN TANGERANG:</b></p>
          <p>{visi}</p>
          <p><b>MISI PEMERINTAH DAERAH KABUPATEN TANGERANG:</b></p>
          <ul>
            {misi.map((m, i) => <li key={i}>{m}</li>)}
          </ul>
        </div>
        <div className="col-md-4">
          <Sidebar showTerpopuler />
        </div>
      </div>
    </section>
  );
}
