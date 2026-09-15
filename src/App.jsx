import { Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import VisiMisi from "./pages/VisiMisi.jsx";
import StrukturOrganisasi from "./pages/StrukturOrganisasi.jsx";
import TugasPokokFungsi from "./pages/TugasPokokFungsi.jsx";
import Pegawai from "./pages/Pegawai.jsx";
import Berita from "./pages/Berita.jsx";
import BeritaDetail from "./pages/BeritaDetail.jsx";
import KategoriBerita from "./pages/KategoriBerita.jsx";
import Layanan from "./pages/Layanan.jsx";
import Pengumuman from "./pages/Pengumuman.jsx";
import Agenda from "./pages/Agenda.jsx";
import BankData from "./pages/BankData.jsx";
import Foto from "./pages/Foto.jsx";
import Video from "./pages/Video.jsx";
import MasukanSaran from "./pages/MasukanSaran.jsx";
import Survey from "./pages/Survey.jsx";
import BukuTamu from "./pages/BukuTamu.jsx";
import ProdukHukum from "./pages/ProdukHukum.jsx";
import Infografis from "./pages/Infografis.jsx";
import Transparansi from "./pages/Transparansi.jsx";
import Ebook from "./pages/Ebook.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/page/visi-dan-misi" element={<VisiMisi />} />
        <Route path="/page/struktur-organisasi" element={<StrukturOrganisasi />} />
        <Route path="/page/tugas-pokok-dan-fungsi" element={<TugasPokokFungsi />} />
        <Route path="/pegawai" element={<Pegawai />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/pengumuman" element={<Pengumuman />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/bankdata" element={<BankData />} />
        <Route path="/foto" element={<Foto />} />
        <Route path="/video" element={<Video />} />
        <Route path="/masukansaran" element={<MasukanSaran />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/bukutamu" element={<BukuTamu />} />
        <Route path="/produkhukum" element={<ProdukHukum />} />
        <Route path="/infografis" element={<Infografis />} />
        <Route path="/transparansi" element={<Transparansi />} />
        <Route path="/ebook" element={<Ebook />} />
        <Route path="/category/:kategoriSlug" element={<KategoriBerita />} />
        <Route path="/:slug" element={<BeritaDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
