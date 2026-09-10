import BeritaCard from "../components/cards/BeritaCard.jsx";
import Sidebar from "../layout/Sidebar.jsx";
import { beritaList } from "../data/beritaData.js";

export default function Berita() {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="section-title">
            <h1 className="text-uppercase">Semua Berita</h1>
          </div>
          {beritaList.map((b) => <BeritaCard item={b} key={b.slug} />)}
        </div>
        <div className="col-md-4">
          <Sidebar />
        </div>
      </div>
    </section>
  );
}
