import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-green-400">
          SportConnect India
        </h1>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/sports">Sports</Link>
          <Link href="/players">Players</Link>
          <Link href="/selectors">Selectors</Link>
          <Link href="/academies">Academies</Link>
        </div>

        <div className="flex gap-3">
          <Link
            href="/login"
            className="border px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="bg-green-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-400"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h1 className="text-6xl font-bold">
          Discover India's Next
          <span className="text-green-400">
            {" "}Sporting Champions
          </span>
        </h1>

        <p className="mt-6 text-xl text-gray-300">
          Connect athletes, selectors, coaches and academies on one platform.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/register"
            className="bg-green-500 text-black px-8 py-4 rounded-xl font-bold"
          >
            Register as Player
          </Link>

          <Link
            href="/register"
            className="border px-8 py-4 rounded-xl"
          >
            Register as Selector
          </Link>
        </div>
      </section>

      {/* Statistics */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10 pb-16">
        <div className="bg-gray-900 p-6 rounded-xl text-center">
          <h2 className="text-3xl font-bold text-green-400">100K+</h2>
          <p>Players</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl text-center">
          <h2 className="text-3xl font-bold text-green-400">5K+</h2>
          <p>Selectors</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl text-center">
          <h2 className="text-3xl font-bold text-green-400">2K+</h2>
          <p>Academies</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl text-center">
          <h2 className="text-3xl font-bold text-green-400">21+</h2>
          <p>Sports</p>
        </div>
      </section>

      {/* Featured Sports */}
      <section className="px-10 pb-20">
        <h2 className="text-4xl font-bold text-center mb-10">
          Featured Sports
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "🏏 Cricket",
            "⚽ Football",
            "🏀 Basketball",
            "🏸 Badminton",
            "🤼 Wrestling",
            "🏑 Hockey",
            "♟ Chess",
            "🏃 Athletics",
          ].map((sport) => (
            <div
              key={sport}
              className="bg-gray-900 p-6 rounded-xl text-center hover:bg-green-500 hover:text-black transition duration-300"
            >
              {sport}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-center py-8 text-gray-400">
        © 2026 SportConnect India. All Rights Reserved.
      </footer>
    </main>
  );
}