import { useState } from "react";
import Swal from "sweetalert2";
import { submitBukuTamu } from "../services/api.js";

const initialForm = { nama: "", telp: "", instansi: "", bidang_id: "", keperluan: "" };

export default function BukuTamu() {
  const [form, setForm] = useState(initialForm);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitBukuTamu(form);
      Swal.fire({ title: "Terima Kasih!", text: "Data tamu tersimpan.", icon: "success" });
      setForm(initialForm);
    } catch {
      Swal.fire({ title: "Maaf...!", text: "Gagal mengirim data.", icon: "error" });
    }
  };

  return (
    <section className="container">
      <h4 className="text-center">Buku Tamu</h4>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <tbody>
            <tr><td>Nama</td><td><input name="nama" value={form.nama} onChange={handleChange} className="form-control" required /></td></tr>
            <tr><td>No Hp</td><td><input name="telp" value={form.telp} onChange={handleChange} className="form-control" required /></td></tr>
            <tr><td>Instansi</td><td><input name="instansi" value={form.instansi} onChange={handleChange} className="form-control" required /></td></tr>
            <tr>
              <td>Bidang Tujuan</td>
              <td>
                <select name="bidang_id" value={form.bidang_id} onChange={handleChange} className="form-control" required>
                  <option value="">-- Pilih Bidang --</option>
                  <option value="4">Infrastruktur dan Telematika</option>
                  <option value="6">Persandian</option>
                </select>
              </td>
            </tr>
            <tr><td>Keperluan</td><td><textarea name="keperluan" value={form.keperluan} onChange={handleChange} className="form-control" required /></td></tr>
          </tbody>
        </table>
        <button type="submit" className="btn btn-primary"><i className="fas fa-paper-plane" /> Kirim</button>
      </form>
    </section>
  );
}
