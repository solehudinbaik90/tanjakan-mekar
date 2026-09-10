import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOverlay({ open, onClose }) {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/cari?keyword=${encodeURIComponent(keyword)}`);
    onClose();
  };

  return (
    <div className="search_form_menu_personal" style={{ display: "block" }}>
      <div className="menu_mobile_large_close" onClick={onClose}>
        <span className="jl_close_wapper">
          <span className="jl_close_1" /><span className="jl_close_2" />
        </span>
      </div>
      <form className="searchform_theme" onSubmit={handleSubmit}>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Pencarian..."
          className="search_btn"
        />
        <button type="submit" className="button">
          <i className="jli-search" />
        </button>
      </form>
    </div>
  );
}
