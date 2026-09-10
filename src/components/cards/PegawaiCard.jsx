export default function PegawaiCard({ pegawai, onView }) {
  return (
    <div className="pegawai-card shadow-sm bg-white p-2 mx-1 text-center">
      <div className="pegawai-avatar-wrapper">
        <img
          src={pegawai.foto}
          alt={pegawai.nama}
          className="pointer"
          onClick={() => onView(pegawai)}
        />
      </div>
      <div className="pegawai-nama fw-bold mt-2">
        <b>{pegawai.nama}</b>
      </div>
      <div className="pegawai-jabatan">{pegawai.jabatan}</div>
    </div>
  );
}
