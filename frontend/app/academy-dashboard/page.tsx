export default function AcademyDashboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">

      <h1 className="text-4xl font-bold text-green-400 mb-8">
        Academy Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-3xl font-bold text-green-400">150</h2>
          <p>Registered Athletes</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-3xl font-bold text-green-400">12</h2>
          <p>Active Trials</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-3xl font-bold text-green-400">35</h2>
          <p>Applications</p>
        </div>

      </div>

      <div className="bg-gray-900 p-8 rounded-xl mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Post New Trial
        </h2>

        <input
          type="text"
          placeholder="Trial Title"
          className="w-full p-3 mb-4 rounded-lg bg-gray-800"
        />

        <textarea
          placeholder="Trial Description"
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 h-32"
        />

        <button className="bg-green-500 text-black px-6 py-3 rounded-lg font-bold">
          Publish Trial
        </button>
      </div>

    </div>
  );
}