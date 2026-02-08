import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";

type Service = {
  name: string;
  category: string;
  priceSLE: number;
  minutes: number;
};

const services: Service[] = [
  { name: "Short Acrylic Full Set", category: "Acrylic", priceSLE: 450, minutes: 75 },
  { name: "Medium Acrylic Full Set", category: "Acrylic", priceSLE: 550, minutes: 90 },
  { name: "Long Acrylic Full Set", category: "Acrylic", priceSLE: 650, minutes: 105 },
  { name: "Acrylic Fill-In", category: "Acrylic", priceSLE: 350, minutes: 60 },

  { name: "Gel Manicure", category: "Gel", priceSLE: 300, minutes: 45 },
  { name: "Builder Gel", category: "Gel", priceSLE: 420, minutes: 60 },

  { name: "Classic Pedicure", category: "Pedicure", priceSLE: 350, minutes: 50 },
  { name: "Deluxe Spa Pedicure", category: "Pedicure", priceSLE: 500, minutes: 70 }
];

const gallery = [
  "/gallery/nails-1.jpg",
  "/gallery/nails-2.jpg",
  "/gallery/nails-3.jpg",
];

function formatSLE(amount: number) {
  return `SLE ${amount.toLocaleString("en-US")}`;
}

export default function ServicesPage() {
  return (
    <main>
      <Header />

      <section className="glitter">
        <div className="container py-12">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <span className="badge">💅 Styles & pricing</span>
              <h1 className="mt-3 text-3xl md:text-4xl font-extrabold">
                Choose your style
              </h1>
              <p className="mt-2 text-black/70">
                Prices are shown in Sierra Leone Leones (SLE).
              </p>
              <p className="mt-2 text-black/60">
                Founder & Executive:{" "}
                <span className="font-semibold">Patricia Elizabeth Bao</span>
              </p>
            </div>

            <Link href="/book" className="btn btn-primary">
              Book an appointment
            </Link>
          </div>

          {/* MINI GALLERY */}
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {gallery.map((src) => (
              <div key={src} className="card p-3">
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src={src}
                    alt="Nail style"
                    width={1200}
                    height={900}
                    className="w-full h-[180px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* SERVICES GRID */}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.name} className="card p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="pill text-xs font-semibold">{s.category}</span>
                  <span className="text-sm text-black/60">{s.minutes} min</span>
                </div>

                <h2 className="mt-3 font-bold text-lg">{s.name}</h2>

                <div className="mt-3 text-2xl font-extrabold">
                  {formatSLE(s.priceSLE)}
                </div>

                <div className="mt-5">
                  <Link href="/book" className="btn btn-primary w-full">
                    Book this ✨
                  </Link>
                </div>

                <p className="mt-3 text-xs text-black/55">
                  Deposit available. Add-ons selected at booking.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
