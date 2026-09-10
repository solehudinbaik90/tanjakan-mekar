import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container text-center py-5">
      <h1>404</h1>
      <p>Halaman yang Anda cari tidak ditemukan.</p>
      <Link to="/" className="btn btn-primary">Kembali ke Beranda</Link>
    </div>
  );
}
