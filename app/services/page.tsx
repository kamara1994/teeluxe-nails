export default function Services() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="sectionTitle">Nail Services & Prices (SLE)</h1>
        <div className="sectionLine" />

        <p className="lead">
          Prices may vary depending on design complexity, nail length, and extras.
        </p>

        <div style={{ height: 18 }} />

        <h2 className="sectionTitle" style={{ fontSize: 30 }} id="acrylic">
          Acrylic & Gel Extensions
        </h2>
        <ul className="ul">
          <li>Acrylic Full Set — <b>SLE 500</b></li>
          <li>Gel Full Set — <b>SLE 450</b></li>
          <li>Refill (2–3 weeks) — <b>SLE 300</b></li>
        </ul>

        <div style={{ height: 18 }} />

        <h2 className="sectionTitle" style={{ fontSize: 30 }} id="art">
          Nail Designs & Art
        </h2>
        <ul className="ul">
          <li>French Tips — <b>SLE 120</b></li>
          <li>Simple Nail Art — <b>SLE 80</b></li>
          <li>Rhinestones / Crystals — <b>SLE 250</b></li>
          <li>3D / Custom Designs — <b>SLE 300+</b></li>
        </ul>

        <div style={{ height: 18 }} />

        <h2 className="sectionTitle" style={{ fontSize: 30 }} id="addons">
          Add-On Services
        </h2>
        <ul className="ul">
          <li>Nail Repair (per nail) — <b>SLE 40</b></li>
          <li>Gel Removal — <b>SLE 80</b></li>
          <li>Polish Change — <b>SLE 100</b></li>
        </ul>

        <div style={{ height: 26 }} />
        <a className="btnPrimary" href="/book">Book an Appointment</a>
      </div>
    </main>
  );
}
