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

      <!-- content continues from document ... -->
    </div>
  );
}