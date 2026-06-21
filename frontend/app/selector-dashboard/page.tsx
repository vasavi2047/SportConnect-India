export default function SelectorDashboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">

      <h1 className="text-4xl font-bold text-green-400 mb-8">
        Selector Dashboard
      </h1>

      {/* Filters */}
      <div className="bg-gray-900 p-6 rounded-xl mb-8">

        <h2 className="text-2xl mb-4">Search Players</h2>

        <div className="grid md:grid-cols-4 gap-4">

          <select className="bg-gray-800 p-3 rounded-lg">
  <option>Sport</option>
  <option>Cricket</option>
  <option>Football</option>
  <option>Basketball</option>
  <option>Volleyball</option>
  <option>Badminton</option>
  <option>Kabaddi</option>
  <option>Kho Kho</option>
  <option>Hockey</option>
  <option>Athletics</option>
  <option>Tennis</option>
  <option>Table Tennis</option>
  <option>Chess</option>
  <option>Wrestling</option>
  <option>Boxing</option>
  <option>Swimming</option>
  <option>Weightlifting</option>
  <option>Archery</option>
  <option>Shooting</option>
  <option>Cycling</option>
  <option>Gymnastics</option>
  <option>Martial Arts</option>
</select>

          <select className="bg-gray-800 p-3 rounded-lg">
  <option>Select State</option>

  <option>Andhra Pradesh</option>
  <option>Arunachal Pradesh</option>
  <option>Assam</option>
  <option>Bihar</option>
  <option>Chhattisgarh</option>
  <option>Goa</option>
  <option>Gujarat</option>
  <option>Haryana</option>
  <option>Himachal Pradesh</option>
  <option>Jharkhand</option>
  <option>Karnataka</option>
  <option>Kerala</option>
  <option>Madhya Pradesh</option>
  <option>Maharashtra</option>
  <option>Manipur</option>
  <option>Meghalaya</option>
  <option>Mizoram</option>
  <option>Nagaland</option>
  <option>Odisha</option>
  <option>Punjab</option>
  <option>Rajasthan</option>
  <option>Sikkim</option>
  <option>Tamil Nadu</option>
  <option>Telangana</option>
  <option>Tripura</option>
  <option>Uttar Pradesh</option>
  <option>Uttarakhand</option>
  <option>West Bengal</option>

  <option>Andaman and Nicobar Islands</option>
  <option>Chandigarh</option>
  <option>Dadra and Nagar Haveli and Daman and Diu</option>
  <option>Delhi</option>
  <option>Jammu and Kashmir</option>
  <option>Ladakh</option>
  <option>Lakshadweep</option>
  <option>Puducherry</option>
</select>

          <input
            type="text"
            placeholder="Age"
            className="bg-gray-800 p-3 rounded-lg"
          />

          <button className="bg-green-500 text-black rounded-lg font-bold">
            Search
          </button>

        </div>
      </div>

      {/* Player Cards */}

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold">
            Vasavi
          </h2>

          <p className="text-gray-400">
            Cricket • Andhra Pradesh
          </p>

          <p className="text-green-400 mt-3">
            AI Score: 92
          </p>

          <button className="mt-4 bg-green-500 text-black px-4 py-2 rounded-lg">
            View Profile
          </button>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold">
            Rahul
          </h2>

          <p className="text-gray-400">
            Football • Gujarat
          </p>

          <p className="text-green-400 mt-3">
            AI Score: 89
          </p>

          <button className="mt-4 bg-green-500 text-black px-4 py-2 rounded-lg">
            View Profile
          </button>
        </div>

      </div>

    </div>
  );
}