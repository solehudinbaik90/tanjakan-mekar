import { useState } from "react";
import Swal from "sweetalert2";
import { submitKritikSaran } from "../services/api.js";

const initialForm = { nama: "", no_hpusr: "", email: "", judul: "", isi_kritik: "" };

export default function MasukanSaran() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitKritikSaran(form);
      await Swal.fire({ title: "Terima Kasih!", text: "Pesan Anda telah terkirim.", icon: "success" });
      setForm(initialForm);
    } catch {
      Swal.fire({ title: "Maaf...!", text: "Gagal mengirim data, coba lagi.", icon: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container">
      <h4 className="text-center">Masukan dan Saran</h4>
      <div className="alert p-3" style={{ background: "#f4f4f4" }}>
        Seluruh pesan yang masuk akan kami moderasi terlebih dahulu sebelum ditampilkan. Pesan
        yang mengandung unsur sara, hoax, pornografi, spam, ujaran kebencian, atau link tidak
        bermanfaat akan kami hapus.
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-md-6">
            <input name="nama" value={form.nama} onChange={handleChange} className="form-control" placeholder="Nama Lengkap*" required />
          </div>
          <div className="form-group col-md-6">
            <input name="no_hpusr" value={form.no_hpusr} onChange={handleChange} className="form-control" placeholder="Nomor Handphone (WA)*" required />
          </div>
          <div className="form-group col-md-6">
            <input type="email" name="email" value={form.email} onChange={handleChange} className="form-control" placeholder="Alamat Email*" required />
          </div>
          <div className="form-group col-md-6">
            <select name="judul" value={form.judul} onChange={handleChange} className="form-control" required>
              <option value="" disabled>-- Pilih Topik --</option>
              <option value="Pengaduan">Pengaduan</option>
              <option value="Aspirasi">Aspirasi</option>
              <option value="Permintaan Informasi">Permintaan Informasi</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <textarea
            name="isi_kritik"
            value={form.isi_kritik}
            onChange={handleChange}
            rows={3}
            className="form-control"
            placeholder="Tulis pertanyaan, keluhan, masukan atau saran anda disini*"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          <i className="fas fa-paper-plane" /> {loading ? "Mengirim..." : "Kirim Pesan"}
        </button>
      </form>
    </section>
  );
}
