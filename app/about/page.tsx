import Header from "../components/Header";

export default function About() {
  return (
    <main className="page">
      <Header />

      <section className="section">
        <h1 className="sectionTitle">ABOUT TEELUXENAILS</h1>

        <div className="aboutCard">
          <p className="sectionText" style={{ marginTop: 0 }}>
            Hi, I’m <b>Patricia Elizabeth Bao</b>, a certified nail technician with a passion for creating clean,
            elegant, and luxury nail designs. At Teeluxenails, every set, whether in-studio or press-on, is crafted
            with care, hygiene, and attention to detail.
          </p>

          <p className="sectionText">
            My goal is to deliver a premium nail experience that leaves every client feeling confident, polished,
            and beautiful.
          </p>

          <div className="badgeRow">
            <span className="badge">Premium Quality</span>
            <span className="badge">Strict Hygiene</span>
            <span className="badge">Custom Press-Ons</span>
            <span className="badge">Trend Designs</span>
          </div>
        </div>
      </section>
    </main>
  );
}
