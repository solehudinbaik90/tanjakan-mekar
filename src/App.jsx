import { Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import VisiMisi from "./pages/VisiMisi.jsx";
import StrukturOrganisasi from "./pages/StrukturOrganisasi.jsx";
import TugasPokokFungsi from "./pages/TugasPokokFungsi.jsx";
import Pegawai from "./pages/Pegawai.jsx";
import Berita from "./pages/Berita.jsx";
import Layanan from "./pages/Layanan.jsx";
import Pengumuman from "./pages/Pengumuman.jsx";
import Agenda from "./pages/Agenda.jsx";
import Foto from "./pages/Foto.jsx";
import Video from "./pages/Video.jsx";
import MasukanSaran from "./pages/MasukanSaran.jsx";
import Survey from "./pages/Survey.jsx";
import BukuTamu from "./pages/BukuTamu.jsx";
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
        <Route path="/foto" element={<Foto />} />
        <Route path="/video" element={<Video />} />
        <Route path="/masukansaran" element={<MasukanSaran />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/bukutamu" element={<BukuTamu />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
