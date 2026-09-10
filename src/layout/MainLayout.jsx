import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import BackToTop from "../components/common/BackToTop.jsx";

export default function MainLayout() {
  return (
    <div className="options_layout_wrapper jl_clear_at jl_radius jl_none_box_styles jl_border_radiuss jl_en_day_night">
      <div className="options_layout_container full_layout_enable_front">
        <Header />
        <main className="jl_home_bw">
          <Outlet />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}
