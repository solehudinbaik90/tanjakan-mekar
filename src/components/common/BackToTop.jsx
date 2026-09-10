export default function BackToTop() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div id="go-top">
      <a href="#top" onClick={(e) => { e.preventDefault(); scrollTop(); }}>
        <i className="jli-up-chevron" />
      </a>
    </div>
  );
}
