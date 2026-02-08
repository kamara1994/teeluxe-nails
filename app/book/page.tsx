import Header from "../components/Header";

export default function Book() {
  return (
    <main className="min-h-screen glitter-bg">
      <Header />

      <section className="max-w-xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Book Appointment</h1>

        <form className="glow-card rounded-2xl p-6 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-xl border"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-xl border"
          />

          <input type="date" className="w-full p-3 rounded-xl border" />

          <input type="time" className="w-full p-3 rounded-xl border" />

          <button type="submit" className="w-full luxe-btn">
            Confirm Booking ✨
          </button>
        </form>
      </section>
    </main>
  );
}
