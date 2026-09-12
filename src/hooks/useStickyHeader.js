import { useEffect } from "react";

export default function useStickyHeader() {
  useEffect(() => {
    const stickyEls = document.querySelectorAll(".jl_menu_sticky.jl_stick");
    if (!stickyEls.length) return undefined;

    const firstEl = stickyEls[0];
    const stickAt = firstEl.getBoundingClientRect().top + window.scrollY;
    const blankNav = document.querySelector(".jl_blank_nav");

    const handleScroll = () => {
      if (window.scrollY > stickAt) {
        stickyEls.forEach((el) => el.classList.add("jl_sticky"));
        if (blankNav) blankNav.style.height = `${firstEl.offsetHeight}px`;
      } else {
        stickyEls.forEach((el) => el.classList.remove("jl_sticky"));
        if (blankNav) blankNav.style.height = "0px";
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
