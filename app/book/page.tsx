export default function BookPage() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="sectionTitle">Book an Appointment</h1>
        <div className="sectionLine" />

        <p className="lead">
          Choose your preferred service, date, and time. Appointments are confirmed after deposit payment.
          For press-on orders, include accurate nail measurements and design preferences.
        </p>

        <div style={{ height: 18 }} />

        <form
          className="card"
          style={{ padding: 18, maxWidth: 720 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Booking request received! (Demo)");
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <input
              required
              placeholder="Full Name"
              style={inputStyle}
            />
            <input
              required
              placeholder="Phone / WhatsApp"
              style={inputStyle}
            />
            <input
              required
              type="email"
              placeholder="Email"
              style={inputStyle}
            />
            <select required style={inputStyle}>
              <option value="">Select Service</option>
              <option>Acrylic Full Set</option>
              <option>Gel Full Set</option>
              <option>Refill</option>
              <option>Press-on Order</option>
              <option>Nail Art / Custom</option>
            </select>

            <input required type="date" style={inputStyle} />
            <input required type="time" style={inputStyle} />
          </div>

          <div style={{ marginTop: 12 }}>
            <textarea
              placeholder="Notes (design ideas, nail length, extras, press-on measurements)"
              rows={5}
              style={{ ...inputStyle, width: "100%" }}
            />
          </div>

          <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button type="submit" className="btnPrimary">Submit Booking</button>
            <a className="btnSecondary" href="/services">View Prices (SLE)</a>
          </div>

          <div style={{ marginTop: 14 }} className="lead">
            For inquiries, contact us via WhatsApp or Instagram.
          </div>
        </form>
      </div>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 12px",
  border: "1px solid rgba(0,0,0,.15)",
  fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial",
  fontSize: "14px",
  outline: "none",
  background: "rgba(255,255,255,.92)",
};
