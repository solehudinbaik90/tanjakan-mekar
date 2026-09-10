export const mainMenu = [
  { label: "HOME", icon: "fas fa-home", to: "/" },
  {
    label: "PROFIL",
    children: [
      { label: "Visi dan Misi", to: "/page/visi-dan-misi", icon: "far fa-clone" },
      { label: "Struktur Organisasi", to: "/page/struktur-organisasi", icon: "fa fa-users" },
      { label: "Tugas Pokok dan Fungsi", to: "/page/tugas-pokok-dan-fungsi", icon: "far fa-list-alt" },
      { label: "Data Pegawai", to: "/pegawai", icon: "fas fa-user-tie" },
    ],
  },
  { label: "BERITA", to: "/berita" },
  {
    label: "INFORMASI",
    children: [
      { label: "Layanan", to: "/layanan", icon: "fas fa-chalkboard-teacher" },
      { label: "Pengumuman", to: "/pengumuman", icon: "fas fa-bullhorn" },
      { label: "Agenda", to: "/agenda", icon: "far fa-calendar-check" },
      { label: "Bank Data", to: "/bankdata", icon: "fas fa-database" },
      { label: "Produk Hukum", to: "/produkhukum", icon: "fa fa-balance-scale" },
      { label: "Infografis", to: "/infografis", icon: "far fa-images" },
      { label: "Transparansi Anggaran", to: "/transparansi", icon: "fas fa-chart-pie" },
    ],
  },
  {
    label: "GALERI",
    children: [
      { label: "Foto", to: "/foto", icon: "far fa-image" },
      { label: "Video", to: "/video", icon: "fas fa-video" },
    ],
  },
  {
    label: "INTERAKSI",
    children: [
      { label: "Survei", to: "/survey", icon: "far fa-check-square" },
      { label: "Masukan Saran", to: "/masukansaran", icon: "far fa-comments" },
      { label: "Buku Tamu", to: "/bukutamu", icon: "far fa-comment-alt" },
    ],
  },
  { label: "E-BOOK", to: "/ebook", icon: "mdi mdi-book-open-page-variant" },
];
