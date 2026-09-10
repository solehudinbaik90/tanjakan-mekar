import { Link } from "react-router-dom";

export default function InfoServiceCard({ item }) {
  return (
    <div className="container" style={{ marginTop: 60 }}>
      <div className="card card-profile shadow-sm text-center">
        <div className="card-body p-1">
          <div className="profile-image-wrapper">
            <div className="profile-image">
              <div className="avatar">
                <img src={item.icon} alt={item.label} />
              </div>
            </div>
          </div>
          <h3 className="title-card" style={{ paddingTop: 60 }}>
            <Link to={item.to}>{item.label}</Link>
          </h3>
          <Link to={item.to}>
            <span className="badge badge-light-primary profile-badge">
              Kunjungi <i className="fas fa-arrow-right" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
