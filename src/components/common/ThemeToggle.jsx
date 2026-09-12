import { useTheme } from "../../context/ThemeContext.jsx";

export default function ThemeToggle({ className = "" }) {
  const { isDark, toggleTheme } = useTheme();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleTheme();
    }
  };

  return (
    <div
      className={`jl_day_night ${isDark ? "jl_night_en" : "jl_day_en"} ${className}`}
      onClick={toggleTheme}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-pressed={isDark}
      aria-label={isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      title={isDark ? "Mode Terang" : "Mode Gelap"}
    >
      <span className="jl-night-toggle-icon">
        <span className="jl_moon">
          <i className="jli-moon" />
        </span>
        <span className="jl_sun">
          <i className="jli-sun" />
        </span>
      </span>
    </div>
  );
}
