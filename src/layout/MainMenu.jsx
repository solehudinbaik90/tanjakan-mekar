import { Link } from "react-router-dom";
import { mainMenu } from "../data/menuData.js";
import ThemeToggle from "../components/common/ThemeToggle.jsx";

function handleLiHover(e) {
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

function MenuItem({ item, depth = 0 }) {
  const hasChildren = Boolean(item.children?.length);
  const isRealLink = Boolean(item.to);

  const icon =
    depth === 0
      ? item.icon !== undefined && <i className={item.icon} />
      : item.icon && <i className={item.icon} style={{ fontSize: "small" }} />;

  const showTarget = isRealLink || depth > 0;

  const content = (
    <>
      {icon}
      {item.label}
      {depth === 0 && <span className="border-menu" />}
    </>
  );

  return (
    <li
      className={
        hasChildren
          ? "menu-item menu-item-has-children"
          : "menu-item current-menu-item current_page_item"
      }
      onMouseEnter={handleLiHover}
    >
      {isRealLink ? (
        <Link to={item.to} target={showTarget ? "_parent" : undefined}>
          {content}
        </Link>
      ) : (
        <a href="#" target={showTarget ? "_parent" : undefined}>
          {content}
        </a>
      )}

      {hasChildren && (
        <ul className="sub-menu">
          {item.children.map((child) => (
            <MenuItem key={child.label} item={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
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
                  <MenuItem key={item.label} item={item} depth={0} />
                ))}
              </ul>
              <ul>
                <li>
                  <div
                    className="search_header_wrapper search_form_menu_personal_click"
                    onClick={onSearchClick}
                  >
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
