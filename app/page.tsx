export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="heroPro">
        <div className="heroProInner">
          <div className="heroLeft">
            <div className="logoRow">
              <img
                src="/teeluxe-nails.png"
                alt="Teeluxenails logo"
                className="logoImg"
              />
            </div>

            <p className="kicker">Luxury Nails • Clean • Classy • Bold</p>

            <h1 className="heroHeadline">Luxury nails, done with precision.</h1>

            <p className="heroSub">
              Welcome to <b>Teeluxenails</b>, where elegance meets precision. We specialize in luxury nail care,
              custom designs, press-on nails, and long-lasting finishes tailored to enhance your confidence and personal style.
            </p>

            <div className="heroActions">
              <a className="btnPrimary" href="/book">Book an Appointment</a>
              <a className="btnSecondary" href="/services">View Prices (SLE)</a>
            </div>

            <p className="founderLine">
              Founder & Executive: <b>Patricia Elizabeth Bao</b>
            </p>

            <div className="socialRow">
              <a href="https://www.tiktok.com/@teeluxenails" target="_blank" rel="noreferrer">
                TikTok: @teeluxenails
              </a>
              <span className="dot">•</span>
              <a href="#" target="_blank" rel="noreferrer">
                Facebook: Teeluxenails
              </a>
            </div>
          </div>

          <div className="heroRight">
            <div className="imageFrame">
              {/* Put a real nail photo at /public/hero.jpg */}
              <img className="heroPhoto" src="/hero.jpg" alt="Luxury nail photo" />
            </div>
          </div>
        </div>
      </section>

      {/* SHOP BY CATEGORY / GALLERY PLACEHOLDERS */}
      <section className="section" id="gallery">
        <div className="container">
          <h2 className="sectionTitle">Shop by Category</h2>
          <div className="sectionLine" />

          <div className="grid4">
            <div className="card">
              <img className="cardImg" src="/gallery/acrylic.jpg" alt="Acrylic" />
              <div className="cardBody">
                <div className="cardTitle">Acrylic Sets</div>
                <a className="cardCta" href="/services#acrylic">View Prices</a>
              </div>
            </div>

            <div className="card">
              <img className="cardImg" src="/gallery/gel.jpg" alt="Gel" />
              <div className="cardBody">
                <div className="cardTitle">Gel Manicure</div>
                <a className="cardCta" href="/services#gel">View Prices</a>
              </div>
            </div>

            <div className="card">
              <img className="cardImg" src="/gallery/presson.jpg" alt="Press-on" />
              <div className="cardBody">
                <div className="cardTitle">Press-on Nails</div>
                <a className="cardCta" href="/services#presson">View Prices</a>
              </div>
            </div>

            <div className="card">
              <img className="cardImg" src="/gallery/pedicure.jpg" alt="Pedicure" />
              <div className="cardBody">
                <div className="cardTitle">Pedicure</div>
                <a className="cardCta" href="/services#addons">View Prices</a>
              </div>
            </div>
          </div>

          <p className="lead" style={{ marginTop: 18 }}>
             
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section" id="company">
        <div className="container">
          <h2 className="sectionTitle">Our Story</h2>
          <div className="sectionLine" />

          <div className="storyGrid">
            <img className="storyImg" src="/story.jpg" alt="Studio photo" />

            <div>
              <p className="lead">
                Hi, I’m <b>Patricia</b>, a certified nail technician with a passion for creating clean, elegant,
                and luxury nail designs. At Teeluxenails, every set, whether in-studio or press-on is crafted
                with care, hygiene, and attention to detail.
              </p>

              <p className="lead" style={{ marginTop: 14 }}>
                My goal is to deliver a premium nail experience that leaves every client feeling confident,
                polished, and beautiful.
              </p>

              <h3 className="sectionTitle" style={{ fontSize: 28, marginTop: 22 }}>
                Why Choose Teeluxenails
              </h3>

              <ul className="ul">
                <li>Premium-quality products</li>
                <li>Strict hygiene standards</li>
                <li>Custom-made press-on nails</li>
                <li>Trend-focused designs</li>
                <li>Luxury customer experience</li>
              </ul>
            </div>
          </div>

          <p className="lead" style={{ marginTop: 18 }}>
            
          </p>
        </div>
      </section>

      {/* BOOKING POLICY */}
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Booking Policy</h2>
          <div className="sectionLine" />

          <ul className="ul">
            <li>A non-refundable deposit is required to confirm all appointments</li>
            <li>Appointments are confirmed only after deposit payment</li>
            <li>Late arrivals beyond 15 minutes may be cancelled</li>
            <li>No-shows result in loss of deposit</li>
            <li>Deposits are transferable once with at least 24 hours notice</li>
            <li>Press-on orders require full payment before production</li>
          </ul>

          <div style={{ marginTop: 18 }}>
            <a className="btnPrimary" href="/book">Book Now</a>
          </div>
        </div>
      </section>
    </>
  );
}
