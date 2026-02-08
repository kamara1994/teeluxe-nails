import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";

const categories = [
  { name: "Acrylic Sets", img: "/categories/acrylic.jpg" },
  { name: "Gel Manicure", img: "/categories/gel.jpg" },
  { name: "Top Coats", img: "/categories/designs.jpg" },
  { name: "Pedicure", img: "/categories/pedicure.jpg" },
];

export default function Home() {
  return (
    <main>
      <Header />

      {/* HERO */}
      <section className="container py-0">
        <div className="heroCard">
          <div className="heroWrap">
            <Image
              src="/hero/hero.jpg"
              alt="Hero"
              fill
              className="object-cover"
              priority
            />

            <div className="heroOverlay">
              <div className="heroTextBox">
                <div className="h-serif heroTitle">
                  WELCOME TO
                  <br />
                  TEELUXE NAILS
                </div>

                <div className="heroBtns">
                  <Link href="/book" className="btn btn-gold">
                    Book your appointment
                  </Link>
                  <Link href="/services" className="btn btn-red">
                    View nail services (SLE)
                  </Link>
                </div>

                <div className="mt-4 text-sm text-black/60">
                  Founder & Executive: <span className="font-semibold">Patricia Elizabeth Bao</span>
                </div>
              </div>
            </div>
          </div>

          {/* Gold strip like screenshot */}
          <div className="goldStrip">
            <div className="container">
              <div className="flex flex-wrap justify-center">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="stripItem">
                    <span className="star">★</span> MADE IN SL <span className="star">★</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section id="category" className="container pb-16">
        <div className="sectionHead">
          <h2 className="h-serif">SHOP BY CATEGORY</h2>
        </div>

        <div className="mt-10 grid4">
          {categories.map((c) => (
            <div key={c.name} className="tile">
              <div className="tileImg">
                <Image src={c.img} alt={c.name} fill className="object-cover" />
              </div>
              <div className="tileLabel">
                <div className="name">{c.name}</div>
                <div className="cta">SHOP NOW</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
