export const produkHukumList = [
  {
    id: 8,
    kategori: "UNDANG-UNDANG",
    subkategori: [
      {
        nama: "UNDANG-UNDANG KEARSIPAN",
        items: [
          {
            nama: "Undang-undang kearsipan no 22",
            file: "/img/hukum/law1.pdf",
            tipe: "pdf",
          },
          {
            nama: "Undang -Undang No 30",
            file: "/img/hukum/law2.pdf",
            tipe: "pdf",
          },
          {
            nama: "Undang-undang no 50",
            file: "/img/hukum/law3.pdf",
            tipe: "pdf",
          },
        ],
      },
      {
        nama: "UNDANG-UNDANG KOMUNIKASI",
        items: [
          {
            nama: "Undang-undang Komunikasi no 1",
            file: "/img/hukum/law4.pdf",
            tipe: "pdf",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    kategori: "PERATURAN GUBERNUR",
    items: [
      {
        nama: "Pergub Perpustakaan 13 Tahun 2019",
        file: "/img/hukum/law5.pdf",
        tipe: "pdf",
      },
    ],
  },
  {
    id: 10,
    kategori: "PERATURAN DAERAH",
    items: [
      {
        nama: "Perda Perpustakaan 12 Tahun 2019",
        file: "/img/hukum/law6.pdf",
        tipe: "pdf",
      },
      {
        nama: "Perda Kearsipan 2021",
        file: "/img/hukum/law7.pdf",
        tipe: "pdf",
      },
    ],
    subkategori: [
      {
        nama: "Perda 2",
        items: [
          {
            nama: "Isi Perda 2",
            file: "/img/hukum/law8.pdf",
            tipe: "pdf",
          },
        ],
      },
    ],
  },
];


export function iconForTipe(tipe) {
  if (tipe === "pdf") return "fa fa-file-pdf text-danger";
  if (["png", "jpg", "jpeg"].includes(tipe)) return "fa fa-file-image text-info";
  return "fa fa-file-alt text-success";
}
