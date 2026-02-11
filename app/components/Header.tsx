export default function Header() {
  return (
    <header className="headerWrap">
      <div className="container">
        <div className="headerTop">
          <nav className="navLeft">
            <a href="#company">Our Company</a>
            <a href="/book">Book an Appointment</a>
            <a href="#gallery">Gallery</a>
          </nav>

          <div className="brandCenter">TEELUXENAILS</div>

          <nav className="navRight">
            <a href="https://www.tiktok.com/@teeluxenails" target="_blank" rel="noreferrer">
              TikTok
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </nav>
        </div>

        <div className="subNav">
          <div className="subNavInner">
            <a href="/services#acrylic">Acrylic</a>
            <a href="/services#gel">Gel</a>
            <a href="/services#presson">Press-on</a>
            <a href="/services#art">Nail Art</a>
            <a href="/services#addons">Add-ons</a>
          </div>
        </div>
      </div>
    </header>
  );
}
