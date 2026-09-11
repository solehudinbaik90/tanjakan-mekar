import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import BackToTop from "../components/common/BackToTop.jsx";
import { useTheme } from "../context/ThemeContext.jsx";

export default function MainLayout() {
  const { isDark } = useTheme();

  return (
    <div
      className={`options_layout_wrapper jl_clear_at jl_radius jl_none_box_styles jl_border_radiuss jl_en_day_night ${
        isDark ? "options_dark_skin" : ""
      }`}
    >
      <div className="options_layout_container full_layout_enable_front">
        <Header />
        <div className="jl_home_bw">
          <Outlet />
        </div>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}
