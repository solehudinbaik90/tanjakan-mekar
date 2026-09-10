import Sidebar from "../layout/Sidebar.jsx";

const videoList = [
  { id: "DWeFC9MRLLg", judul: "UPDATE DAN IMPORT DATA PEGAWAI PADA CMS DATAGOE" },
  { id: "87Wb47fmNWA", judul: "UPGRADE APLIKASI DAN SETTING MENU" },
  { id: "LIoT2USNYHE", judul: "MEMBUAT SPT DAN SPPD (SURAT PERINTAH PERJALANAN DINAS)" },
  { id: "LIoT2USNYHE", judul: "Update CMS DATAGOE To Versi 3.0.2" },
];

export default function Video() {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-8">
          <h4 className="text-center">Galeri Video</h4>
          <div className="row">
            {videoList.map((v) => (
              <div className="col-md-6 mb-3" key={v.id}>
                <iframe
                  width="100%"
                  height="220"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.judul}
                  allowFullScreen
                />
                <h3 className="mt-2">{v.judul}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4"><Sidebar /></div>
      </div>
    </section>
  );
}
