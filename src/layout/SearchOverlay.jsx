import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOverlay({ open, onClose }) {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.toggle("active_mobile_nav_class", open);
    return () => document.body.classList.remove("active_mobile_nav_class");
  }, [open]);

  const handleClose = () => {
    document.body.classList.remove("active_mobile_nav_class");
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/cari?keyword=${encodeURIComponent(keyword)}`);
    handleClose();
  };

  return (
    <div
      className={
        "search_form_menu_personal" +
        (open ? " search_form_menu_personal_active" : "")
      }
    >
      <div className="menu_mobile_large_close">
        <span
          className="jl_close_wapper search_form_menu_personal_click"
          onClick={handleClose}
        >
          <span className="jl_close_1" />
          <span className="jl_close_2" />
        </span>
      </div>

      <form
        method="POST"
        className="searchform_theme"
        action="tanjakan-mekar.vercel.app/cari"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="csrf_tokentanjakanmekar" value="" />
        <input type="hidden" name="jenis" value="berita" />
        <input type="hidden" name="kategori" id="kategori" value="" />
        <input
          type="text"
          name="keyword"
          id="keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Pencarian..."
          className="search_btn"
          autoComplete="off"
        />
        <button type="submit" className="button">
          <i className="jli-search" />
        </button>
      </form>
    </div>
  );
}
