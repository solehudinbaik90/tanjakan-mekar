import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteConfig.js";

export default function Footer() {
  return (
    <footer id="footer-container" className="jl_footer_act enable_footer_columns_dark">
      <div className="footer-columns p-1">
        <div className="container">
          <div className="row justify-content-between align-items-center text-center">
            <div className="col-md-6 pt-2">
              <img src={siteConfig.logo} alt={siteConfig.siteName} width="300" />
              <hr />
              <span className="text-light">
                Website Tanjakan Mekar, menampilkan informasi terkait perkembangan desa baik itu dari segi sumber daya alam, ekonomi maupun mata pencaharian warga.
              </span>
            </div>
            <div className="col-md-6 pt-2">
              <h4 className="text-white mt-2">Kontak Kami</h4>
              <span>
                {siteConfig.siteName} | {siteConfig.address}
                <br />
                No. Telp: {siteConfig.phone} | Email:{" "}
                <a className="text-light" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </span>
              <ul className="social-icons-list-widget icons_about_widget_display mt-2">
                <li><a href={siteConfig.social.facebook} target="_blank" rel="noreferrer"><i className="jli-facebook" /></a></li>
                <li><a href={siteConfig.social.youtube} target="_blank" rel="noreferrer"><i className="jli-youtube" /></a></li>
                <li><a href={siteConfig.social.instagram} target="_blank" rel="noreferrer"><i className="jli-instagram" /></a></li>
                <li><a href={siteConfig.social.twitter} target="_blank" rel="noreferrer"><i className="jli-twitter" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom enable_footer_copyright_dark">
        <div className="container text-center">
          <p style={{ color: "#fff", marginBottom: 1 }}>
            <Link className="text-light" to="/page/redaksi">Redaksi</Link> |{" "}
            <Link className="text-light" to="/page/syarat-dan-kondisi">Syarat &amp; Kondisi</Link> |{" "}
            <Link className="text-light" to="/petasitus">Peta Situs</Link> |{" "}
            <span>&copy; {new Date().getFullYear()} - {siteConfig.siteName}</span>
            <br />
            <span>Desain Oleh <a href="https://tanjakan-mekar.vercel.app" target="_blank" rel="noreferrer">Tanjakan Mekar</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
}
