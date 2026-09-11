import { Link } from "react-router-dom";
import { mainMenu } from "../data/menuData.js";
import { siteConfig } from "../data/siteConfig.js";

export default function MobileMenu({ open, onClose }) {
  return (
    <>
      <div id="content_nav" className={`jl_mobile_nav_wrapper ${open ? "jl_mobile_nav_open" : ""}`}>
        <div id="nav" className="jl_mobile_nav_inner">
          <div className="menu_mobile_icons mobile_close_icons closed_menu" onClick={onClose}>
            <span className="jl_close_wapper">
              <span className="jl_close_1" /><span className="jl_close_2" />
            </span>
          </div>

          <ul id="mobile_menu_slide" className="menu_moble_slide">
            {mainMenu.map((item) => (
              <li
                key={item.label}
                className={
                  item.children
                    ? "menu-item menu-item-has-children"
                    : "menu-item current-menu-item current_page_item"
                }
              >
                {item.to ? (
                  <Link to={item.to} onClick={onClose}>{item.label}</Link>
                ) : (
                  <a href="#">{item.label}</a>
                )}
                {item.children && (
                  <ul className="sub-menu">
                    {item.children.map((child) => (
                      <li key={child.label} className="menu-item current-menu-item current_page_item">
                        <Link to={child.to} onClick={onClose}>{child.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div id="sprasa_about_us_widget-3" className="widget jellywp_about_us_widget">
            <div className="widget_jl_wrapper about_widget_content">
              <div className="jellywp_about_us_widget_wrapper">
                <div className="social_icons_widget">
                  <ul className="social-icons-list-widget icons_about_widget_display">
                    <li>
                      <a href={siteConfig.social.facebook} className="facebook" target="_blank" rel="noreferrer">
                        <i className="jli-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href={siteConfig.social.twitter} className="twitter" target="_blank" rel="noreferrer">
                        <i className="jli-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href={siteConfig.social.instagram} className="instagram" target="_blank" rel="noreferrer">
                        <i className="jli-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href={siteConfig.social.youtube} className="youtube" target="_blank" rel="noreferrer">
                        <i className="jli-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {open && <div className="mobile_menu_overlay" onClick={onClose} />}
    </>
  );
}
