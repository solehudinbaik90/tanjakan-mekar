import { useEffect } from "react";

export default function useHeaderScrollEffects() {
  useEffect(() => {
    const largeMenuLogo = document.querySelector(".jl_large_menu_logo");
    const darkHeader = document.querySelector(".options_dark_header");
    const goTopBtn = document.getElementById("go-top");

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop >= 100) {
        largeMenuLogo?.classList.add("jl_custom_height_small");
        darkHeader?.classList.add("dark_header_menu");
      } else {
        largeMenuLogo?.classList.remove("jl_custom_height_small");
        darkHeader?.classList.remove("dark_header_menu");
      }

      if (goTopBtn) {
        goTopBtn.style.display = scrollTop > 500 ? "block" : "none";
      }
    };

    const handleGoTopClick = (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", handleScroll);
    goTopBtn?.addEventListener("click", handleGoTopClick);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      goTopBtn?.removeEventListener("click", handleGoTopClick);
    };
  }, []);
}
