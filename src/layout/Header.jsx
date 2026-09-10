import { useState } from "react";
import { Link } from "react-router-dom";
import SliderWrapper from "../components/common/SliderWrapper.jsx";
import MainMenu from "./MainMenu.jsx";
import MobileMenu from "./MobileMenu.jsx";
import SearchOverlay from "./SearchOverlay.jsx";
import ThemeToggle from "../components/common/ThemeToggle.jsx";
import { siteConfig } from "../data/siteConfig.js";
import { topAdsBanner } from "../data/bannerData.js";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="header-wraper jl_header_magazine_style two_header_top_style header_layout_style3_custom jl_cus_top_share">
      <div className="header_top_bar_wrapper">
        <div className="container">
          <div className="row">
            <div className="logo_small_wrapper col-md-4 col-sm-12 d-flex align-items-center mt-3">
              <Link className="logo-mod-a text-center" to="/">
                <img className="jl_logo_n logo_mod" src={siteConfig.logo} alt="CMS Datagoe" />
              </Link>
              <div className="d-block d-sm-none search_header_menu jl_nav_mobile">
                <div className="menu_mobile_icons" onClick={() => setMobileOpen(true)}>
                  <div className="jlm_w">
                    <span className="jlma" /><span className="jlmb" /><span className="jlmc" />
                  </div>
                </div>
                <div className="search_header_wrapper" onClick={() => setSearchOpen(true)}>
                  <i className="jli-search" />
                </div>
                <ThemeToggle />
              </div>
            </div>

            <div className="col-md-8 col-sm-12 mt-3 mb-3 text-center">
              <SliderWrapper autoplaySpeed={7000}>
                {topAdsBanner.map((b, i) => (
                  <div className="item-slide jl_radus_e" key={i}>
                    <a href={b.href} target="_blank" rel="noreferrer" title={b.title}>
                      <img src={b.image} alt={b.title} className="img-fluid rounded" style={{ width: "100%" }} />
                    </a>
                  </div>
                ))}
              </SliderWrapper>
            </div>
          </div>
        </div>
      </div>

      <MainMenu onSearchClick={() => setSearchOpen(true)} />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
