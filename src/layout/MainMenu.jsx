import { Link } from "react-router-dom";
import { mainMenu } from "../data/menuData.js";
import ThemeToggle from "../components/common/ThemeToggle.jsx";

function handleMouseEnter(e) {
  const li = e.currentTarget;
  const submenu = li.querySelector(":scope > ul.sub-menu");
  if (!submenu) return;

  const marginAdjust = 100;
  const navWidth = li.parentElement.offsetWidth;
  const thisRight = li.offsetLeft + submenu.offsetWidth - marginAdjust;

  if (thisRight > navWidth) {
    submenu.classList.add("jl_menu_tls");
  }
}

export default function MainMenu({ onSearchClick }) {
  return (
    <div id="menu_wrapper" className="menu_wrapper jl_menu_sticky jl_stick d-none d-md-block">
      <div className="container">
        <div className="main_menu">
          <div className="menu-primary-container navigation_wrapper">
            <div className="d-flex justify-content-between">
              <ul id="mainmenu" className="jl_main_menu">
                {mainMenu.map((item) => (
                  <li
                    key={item.label}
                    onMouseEnter={item.children ? handleMouseEnter : undefined}
                    className={
                      item.children
                        ? "menu-item menu-item-has-children"
                        : "menu-item current-menu-item current_page_item"
                    }
                  >
                    {item.to ? (
                      <Link to={item.to}>
                        {item.icon && <i className={item.icon} />} {item.label}
                        <span className="border-menu" />
                      </Link>
                    ) : (
                      <a href="#">
                        {item.label}
                        <span className="border-menu" />
                      </a>
                    )}
                    {item.children && (
                      <ul className="sub-menu">
                        {item.children.map((child) => (
                          <li key={child.label} className="menu-item current-menu-item current_page_item">
                            <Link to={child.to}>
                              <i className={child.icon} style={{ fontSize: "small" }} /> {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <ul>
                <li>
                  <div className="search_header_wrapper search_form_menu_personal_click" onClick={onSearchClick}>
                    <i className="jli-search text-white" />
                  </div>
                </li>
                <li>
                  <ThemeToggle />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
