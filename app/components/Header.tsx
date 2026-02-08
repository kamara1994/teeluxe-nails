import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      {/* Top bar */}
      <div className="topbar">
        <div className="container py-3 flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs tracking-widest uppercase">
            <a href="#story">Our company</a>
            <Link href="/book">Book an appointment</Link>
            <a href="#salons">Our salons</a>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded overflow-hidden border border-white/10 bg-white">
              <Image
                src="/teeluxe-nails.png"
                alt="TEELUXE Nails"
                width={64}
                height={64}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="h-serif text-xl text-[var(--gold)]">
              TEELUXE
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 text-xs tracking-widest uppercase muted">
            <span>English</span>
            <a href="https://www.tiktok.com/@teeluxenails" target="_blank" rel="noreferrer">
              TikTok
            </a>
            {/* Replace # with your real FB page link */}
            <a href="#" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Second nav row */}
      <div className="navbar">
        <div className="container py-2 flex flex-wrap gap-6">
          <a className="navlink" href="#category">Shop by category</a>
          <Link className="navlink" href="/services">Acrylic</Link>
          <Link className="navlink" href="/services">Gel</Link>
          <Link className="navlink" href="/services">Top coat</Link>
          <Link className="navlink" href="/services">Base coat</Link>
          <Link className="navlink" href="/services">Air bits</Link>
          <Link className="navlink" href="/services">UV/LED</Link>
          <Link className="navlink" href="/services">Pedicure</Link>
        </div>
      </div>
    </header>
  );
}
