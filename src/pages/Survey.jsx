import { useState } from "react";
import Swal from "sweetalert2";
import { submitSurvey } from "../services/api.js";

const pertanyaan = [
  { id: 1, teks: "Bagaimana pendapat Saudara tentang kesesuaian persyaratan pelayanan dengan jenis pelayanannya", opsi: ["Tidak sesuai", "Kurang sesuai", "Sesuai", "Sangat Sesuai"] },
  { id: 2, teks: "Bagaimana pemahaman Saudara tentang kemudahan prosedur pelayanan di unit ini", opsi: ["Tidak Mudah", "Kurang Mudah", "Mudah", "Sangat Mudah"] },
  { id: 3, teks: "Bagaimana pendapat saudara tentang kecepatan pelayanan di unit ini", opsi: ["Tidak Tepat Waktu", "Kadang Tepat waktu", "Banyak Tepat Waktu", "Selalu Tepat Waktu"] },
];

export default function Survey() {
  const [biodata, setBiodata] = useState({ nama: "", usia: "", jk: "", nohp: "" });
  const [jawaban, setJawaban] = useState({});
  const [saran, setSaran] = useState("");

  const handleJawab = (idPertanyaan, nilai) =>
    setJawaban((prev) => ({ ...prev, [idPertanyaan]: nilai }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(jawaban).length < pertanyaan.length) {
      return Swal.fire({ title: "Maaf..!", text: "Silahkan pilih salah satu jawaban diatas.", icon: "error" });
    }
    try {
      await submitSurvey({ ...biodata, jawaban_id: jawaban, saran });
      Swal.fire({ title: "Sukses!", text: "Terima kasih atas partisipasi Anda.", icon: "success" });
    } catch {
      Swal.fire({ title: "Maaf..!", text: "Gagal mengirim survei.", icon: "error" });
    }
  };

  return (
    <section className="container">
      <h4 className="text-center">Lembar Quisioner</h4>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-md-4">
            <label>Nama</label>
            <input className="form-control" required value={biodata.nama} onChange={(e) => setBiodata({ ...biodata, nama: e.target.value })} />
          </div>
          <div className="form-group col-md-2">
            <label>Umur</label>
            <input type="number" className="form-control" required value={biodata.usia} onChange={(e) => setBiodata({ ...biodata, usia: e.target.value })} />
          </div>
          <div className="form-group col-md-3">
            <label>Jenis Kelamin</label>
            <select className="form-control" value={biodata.jk} onChange={(e) => setBiodata({ ...biodata, jk: e.target.value })}>
              <option value="">Pilih</option>
              <option value="L">Laki-Laki</option>
              <option value="P">Perempuan</option>
            </select>
          </div>
        </div>

        {pertanyaan.map((p) => (
          <div key={p.id} className="mb-3">
            <b>{p.id}. {p.teks}</b>
            <hr />
            {p.opsi.map((opsi, idx) => (
              <label key={opsi} className="d-block">
                <input
                  type="radio"
                  name={`jawaban_${p.id}`}
                  value={idx + 1}
                  checked={jawaban[p.id] === idx + 1}
                  onChange={() => handleJawab(p.id, idx + 1)}
                  required
                />{" "}
                {opsi}
              </label>
            ))}
          </div>
        ))}

        <label><b className="text-primary">Saran dan masukan Anda</b></label>
        <textarea className="form-control mb-3" value={saran} onChange={(e) => setSaran(e.target.value)} />

        <button type="submit" className="btn btn-primary">
          <i className="fas fa-paper-plane" /> Kirim Data
        </button>
      </form>
    </section>
  );
}
