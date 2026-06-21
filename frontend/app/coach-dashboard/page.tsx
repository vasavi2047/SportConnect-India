export default function CoachDashboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">

      <h1 className="text-4xl font-bold text-green-400 mb-8">
        Coach Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-3xl font-bold text-green-400">42</h2>
          <p>Players Coached</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-3xl font-bold text-green-400">18</h2>
          <p>Recommendations</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-3xl font-bold text-green-400">4.9</h2>
          <p>Rating</p>
        </div>

      </div>

      <div className="bg-gray-900 p-8 rounded-xl mt-8">

        <h2 className="text-2xl font-bold mb-4">
          Recommend Player
        </h2>

        <input
          type="text"
          placeholder="Player Name"
          className="w-full p-3 mb-4 rounded-lg bg-gray-800"
        />

        <textarea
          placeholder="Recommendation"
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 h-32"
        />

        <button className="bg-green-500 text-black px-6 py-3 rounded-lg font-bold">
          Submit Recommendation
        </button>

      </div>

    </div>
  );
}