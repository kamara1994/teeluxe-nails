import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Teeluxenails",
  description: "Luxury Nails • Clean • Classy • Bold",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}

        <footer className="footer">
          <div className="container">
            <div className="footerRow">
              <div>
                <b>Teeluxenails</b>
                <div>Luxury Nails • Clean • Classy • Bold</div>
                <div>Founder & Executive: <b>Patricia Elizabeth Bao</b></div>
              </div>

              <div>
                <b>Social</b>
                <div>
                  TikTok:{" "}
                  <a href="https://www.tiktok.com/@teeluxenails" target="_blank" rel="noreferrer">
                    @teeluxenails
                  </a>
                </div>
                <div>
                  Facebook: <a href="#" target="_blank" rel="noreferrer">Teeluxenails</a>
                </div>
              </div>

              <div>
                <b>Booking</b>
                <div>Deposit required to confirm appointments.</div>
                <div>Late arrivals over 15 minutes may be cancelled.</div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
