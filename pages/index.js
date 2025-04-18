export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header
        className="text-white py-20 px-4 text-center shadow-md bg-cover bg-center"
        style={{ backgroundImage: "url('/images/logo.jpg')" }}
      >
        <div className="bg-black bg-opacity-60 p-6 rounded-xl inline-block">
          <h1 className="text-5xl font-extrabold mb-2">Palacios Solutions LLC</h1>
          <p className="text-xl font-light">Make Rentals Affordable Again</p>
        </div>
      </header>

      <section className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Our Rentals</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Light Towers w/ 8kW Generators – $80/day</li>
              <li>Porta Potties – Call for availability</li>
              <li>Dump Trailer – Call for pricing</li>
              <li>Kubota Compact Tractor – Call for pricing</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Services</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Delivery – $20 each way</li>
              <li>Refueling – $5 per gallon</li>
              <li>Weekend Rentals for Events</li>
              <li>Fast Turnaround & Reliable Equipment</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="text-center py-10 bg-gray-100">
        <h2 className="text-3xl font-bold">Serving South Texas</h2>
        <p className="text-gray-600 mt-2">Sharyland, Mission, McAllen, and surrounding areas</p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Equipment in Action</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img src="/images/light-tower-1.jpg" alt="Light Tower" className="rounded-xl shadow-md w-full object-cover" />
          <img src="/images/light-tower-2.jpg" alt="Tower At Night" className="rounded-xl shadow-md w-full object-cover" />
          <img src="/images/trailer.jpg" alt="Dump Trailer" className="rounded-xl shadow-md w-full object-cover" />
          <img src="/images/light-tower-3.jpg" alt="Tower Setup" className="rounded-xl shadow-md w-full object-cover" />
          <img src="/images/porta-potties.jpg" alt="Porta Potties" className="rounded-xl shadow-md w-full object-cover" />
          <img src="/images/logo.jpg" alt="Company Logo" className="rounded-xl shadow-md w-full object-cover" />
        </div>
      </section>

      <section className="text-center py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold">Contact Us</h2>
        <p className="mt-2 text-lg">📞 (956) 827-9260</p>
        <p className="text-gray-600">Call or text to schedule your rental today!</p>
      </section>

      <section className="max-w-xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Request a Rental</h2>
        <form action="https://formspree.io/f/xanegaoy" method="POST" className="space-y-4 bg-white p-6 rounded-2xl shadow">
          <input type="text" name="name" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded" required />
          <input type="email" name="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded" required />
          <input type="tel" name="phone" placeholder="Your Phone Number" className="w-full p-3 border border-gray-300 rounded" required />
          <input type="text" name="equipment" placeholder="Equipment Needed" className="w-full p-3 border border-gray-300 rounded" />
          <textarea name="message" rows="4" placeholder="Any special details?" className="w-full p-3 border border-gray-300 rounded"></textarea>
          <button type="submit" className="bg-black text-white w-full py-3 rounded text-lg font-medium hover:bg-gray-800">Send Request</button>
        </form>
      </section>
    </div>
  );
}
