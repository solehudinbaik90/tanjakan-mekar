export const pollData = {
  id: 1,
  pertanyaan:
    "Bagaimanakah menurut Anda dengan Pelayanan dan Kinerja Website Desa ?",
  opsi: [
    { id: 2, label: "Sangat Baik" },
    { id: 3, label: "Baik" },
    { id: 4, label: "Cukup Baik" },
    { id: 6, label: "Belum Tahu" },
  ],
};

export const pollResultData = {
  totalVote: 128,
  hasil: [
    { id: 2, label: "Sangat Baik", jumlah: 62, persen: 48.4 },
    { id: 3, label: "Baik", jumlah: 41, persen: 32.0 },
    { id: 4, label: "Cukup Baik", jumlah: 18, persen: 14.1 },
    { id: 6, label: "Belum Tahu", jumlah: 7, persen: 5.5 },
  ],
};

export default pollData;
