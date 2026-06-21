"use client";

import { useEffect, useState } from "react";

export default function PlayerDashboard() {
  const [name, setName] = useState("Player Name");
  const [sport, setSport] = useState("Sport");
  const [state, setState] = useState("State");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
const [district, setDistrict] = useState("");
const [academy, setAcademy] = useState("");
const [matches, setMatches] = useState("");
const [wins, setWins] = useState("");
const [achievements, setAchievements] = useState("");
const [photo, setPhoto] = useState("");
const [about, setAbout] = useState("");
const [certificate, setCertificate] = useState("");
const [videos, setVideos] = useState<string[]>([]);

  useEffect(() => {
    const savedName = localStorage.getItem("playerName");
    const savedSport = localStorage.getItem("playerSport");
    const savedState = localStorage.getItem("playerState");
    const savedAge = localStorage.getItem("playerAge");
    const savedGender = localStorage.getItem("playerGender");
    const savedDistrict = localStorage.getItem("playerDistrict");
    const savedAcademy = localStorage.getItem("playerAcademy");
    const savedMatches = localStorage.getItem("playerMatches");
    const savedWins = localStorage.getItem("playerWins");
    const savedAchievements = localStorage.getItem("playerAchievements");
    const savedPhoto = localStorage.getItem("playerPhoto");
    const savedAbout = localStorage.getItem("playerAbout");
const savedCertificate = localStorage.getItem("certificateName");
const savedVideos =localStorage.getItem("playerVideos");

if (savedVideos) setVideos(JSON.parse(savedVideos));


if (savedAbout) setAbout(savedAbout);
if (savedCertificate) setCertificate(savedCertificate);
    
    if (savedName) setName(savedName);
    if (savedSport) setSport(savedSport);
    if (savedState) setState(savedState);
    if (savedAge) setAge(savedAge);
    if (savedGender) setGender(savedGender);
    if (savedDistrict) setDistrict(savedDistrict);
    if (savedAcademy) setAcademy(savedAcademy);
    if (savedMatches) setMatches(savedMatches);
    if (savedWins) setWins(savedWins);
    if (savedAchievements) setAchievements(savedAchievements);
    if (savedPhoto) setPhoto(savedPhoto);

  }, []);

 return (
  <div className="min-h-screen bg-gray-950 text-white">
    <div className="h-48 bg-gradient-to-r from-gray-950 to-slate-900 border-b border-gray-800"></div>
    {/* Cover Banner */}
    

    <div className="max-w-6xl mx-auto px-6">

      {/* Profile Card */}
      <div className="bg-gray-900 rounded-2xl p-8 -mt-20 relative shadow-xl">

        <div className="flex flex-col md:flex-row gap-8 items-center">

          {photo ? (
            <img
              src={photo}
              alt="Player"
              className="w-40 h-40 rounded-full border-4 border-green-500 object-cover"
            />
          ) : (
            <div className="w-40 h-40 rounded-full bg-gray-700"></div>
          )}

          <div>
            <h1 className="text-5xl font-bold">
              {name}
            </h1>

            <div className="flex gap-4 mt-4">

  <button className="bg-green-500 text-black px-5 py-2 rounded-lg font-semibold">
    Edit Profile
  </button>

  <button className="border border-green-500 px-5 py-2 rounded-lg">
    Download Resume
  </button>

</div>

            <p className="text-xl text-gray-400 mt-2">
              {sport} Player
            </p>

            <p className="text-gray-400">
              {district}, {state}
            </p>

            <p className="text-green-400 font-bold text-xl mt-3">
              AI Score: {matches && wins
                ? Math.round((Number(wins) / Number(matches)) * 100)
                : 0}
            </p>
          </div>

        </div>

      </div>
{/* Statistics */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">

  <div className="bg-gray-900 rounded-xl p-6 text-center shadow-lg">
    <h2 className="text-4xl font-bold text-green-400">{matches}</h2>
    <p className="text-gray-400">Matches</p>
  </div>

  <div className="bg-gray-900 rounded-xl p-6 text-center shadow-lg">
    <h2 className="text-4xl font-bold text-green-400">{wins}</h2>
    <p className="text-gray-400">Wins</p>
  </div>

  <div className="bg-gray-900 rounded-xl p-6 text-center shadow-lg">
    <h2 className="text-4xl font-bold text-green-400">
      {matches && wins
        ? Math.round((Number(wins) / Number(matches)) * 100)
        : 0}
    </h2>
    <p className="text-gray-400">AI Score</p>
  </div>

  <div className="bg-gray-900 rounded-xl p-6 text-center shadow-lg">
    <h2 className="text-4xl font-bold text-green-400">
      {certificate ? 1 : 0}
    </h2>
    <p className="text-gray-400">Certificates</p>
  </div>

</div>
      {/* About */}
<div className="bg-gray-900 rounded-2xl p-8 mt-8 shadow-lg">

  <h2 className="text-2xl font-bold mb-4">
    About Player
  </h2>

  <p className="text-gray-300 leading-7">
    {about || "No information provided"}
  </p>

</div>
      
{/* Achievements */}
<div className="bg-gray-900 rounded-2xl p-8 mt-8 shadow-lg">

  <h2 className="text-2xl font-bold text-green-400 mb-4">
    Achievements
  </h2>

  <div className="bg-gray-800 rounded-xl p-5">
    <p>{achievements || "No achievements added yet"}</p>
  </div>

</div>

{/* Certificates */}
<div className="bg-gray-900 rounded-2xl p-8 mt-8 shadow-lg">

  <h2 className="text-2xl font-bold text-green-400 mb-4">
    Certificates
  </h2>

  {certificate ? (
    <div className="bg-gray-800 rounded-xl p-5">
      📜 {certificate}
    </div>
  ) : (
    <div className="bg-gray-800 rounded-xl p-5">
      No Certificates Uploaded
    </div>
  
  )}

</div>
   {/* Academy */}
<div className="bg-gray-900 rounded-2xl p-8 mt-8 shadow-lg">

  <h2 className="text-2xl font-bold mb-4">
    Academy
  </h2>

  <p>{academy || "N/A"}</p>

</div>   

      
{/* Athlete Details */}
<div className="bg-gray-900 rounded-2xl p-8 mt-8 shadow-lg">

  <h2 className="text-2xl font-bold mb-6">
    Athlete Information
  </h2>

  <div className="grid md:grid-cols-2 gap-4">

    <div>
      <p className="text-gray-500">Age</p>
      <p>{age}</p>
    </div>

    <div>
      <p className="text-gray-500">Gender</p>
      <p>{gender}</p>
    </div>

    <div>
      <p className="text-gray-500">District</p>
      <p>{district}</p>
    </div>

    <div>
      <p className="text-gray-500">State</p>
      <p>{state}</p>
    </div>

  </div>
</div>
</div>


<div className="bg-[#111827] rounded-3xl p-8 mt-8">

  <h2 className="text-2xl font-semibold text-green-400 mb-6">
    Sports Videos
  </h2>

  {videos.length > 0 ? (
    videos.map((video, index) => (
      <a
        key={index}
        href={video}
        target="_blank"
        className="block bg-gray-800 p-4 rounded-xl mb-3 hover:bg-gray-700"
      >
        🎥 Watch Video {index + 1}
      </a>
    ))
  ) : (
    <p>No videos uploaded</p>
  )}

</div>

    

  </div>
);
} 