"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PlayerProfile() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [sport, setSport] = useState("");
  const [state, setState] = useState("");
  const [about, setAbout] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [district, setDistrict] = useState("");
const [academy, setAcademy] = useState("");
const [matches, setMatches] = useState("");
const [wins, setWins] = useState("");
const [achievements, setAchievements] = useState("");
const [photo, setPhoto] = useState("");
const [certificates, setCertificates] = useState<string[]>([]);
const [videos, setVideos] = useState<string[]>([]);
const [videoLink, setVideoLink] = useState("");


  const handleSave = () => {
    localStorage.setItem("playerName", name);
    localStorage.setItem("playerSport", sport);
    localStorage.setItem("playerState", state);
    localStorage.setItem("playerAbout", about);
    localStorage.setItem("playerAge", age);
    localStorage.setItem("playerGender", gender);
localStorage.setItem("playerDistrict", district);
    localStorage.setItem("playerAcademy", academy);
    localStorage.setItem("playerMatches", matches);
    localStorage.setItem("playerWins", wins);
    localStorage.setItem("playerAchievements", achievements);
    localStorage.setItem("playerPhoto", photo);
    localStorage.setItem("certificateNames", JSON.stringify(certificates));
    localStorage.setItem("playerVideos", JSON.stringify(videos));
    alert("Profile Saved Successfully!");

    router.push("/player-dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">
      <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-2xl">

        <h1 className="text-3xl font-bold text-green-400 mb-8">
          Player Profile
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded-lg mb-4 bg-gray-800"
        />

        <input
          type="text"
          placeholder="Sport"
          value={sport}
          onChange={(e) => setSport(e.target.value)}
          className="w-full p-3 rounded-lg mb-4 bg-gray-800"
        />

        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="w-full p-3 rounded-lg mb-4 bg-gray-800"
        />

        <input
  type="number"
  placeholder="Age"
  value={age}
  onChange={(e) => setAge(e.target.value)}
  className="w-full p-3 rounded-lg mb-4 bg-gray-800"
/>

<select
  value={gender}
  onChange={(e) => setGender(e.target.value)}
  className="w-full p-3 rounded-lg mb-4 bg-gray-800"
>
  <option value="">Select Gender</option>
  <option>Male</option>
  <option>Female</option>
  <option>Other</option>
</select>

<input
  type="text"
  placeholder="District"
  value={district}
  onChange={(e) => setDistrict(e.target.value)}
  className="w-full p-3 rounded-lg mb-4 bg-gray-800"
/>

<input
  type="text"
  placeholder="Academy"
  value={academy}
  onChange={(e) => setAcademy(e.target.value)}
  className="w-full p-3 rounded-lg mb-4 bg-gray-800"
/>

<input
  type="number"
  placeholder="Matches Played"
  value={matches}
  onChange={(e) => setMatches(e.target.value)}
  className="w-full p-3 rounded-lg mb-4 bg-gray-800"
/>

<input
  type="number"
  placeholder="Wins"
  value={wins}
  onChange={(e) => setWins(e.target.value)}
  className="w-full p-3 rounded-lg mb-4 bg-gray-800"
/>

<textarea
  placeholder="Achievements"
  value={achievements}
  onChange={(e) => setAchievements(e.target.value)}
  className="w-full p-3 rounded-lg mb-4 bg-gray-800 h-32"
/>

        <textarea
          placeholder="About Yourself"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className="w-full p-3 rounded-lg mb-4 bg-gray-800 h-32"
        />
<h2 className="text-xl font-semibold text-green-400 mb-3">
  Upload Profile Photo
</h2>
        <input
  type="file"
  accept="image/*"
  className="w-full p-3 rounded-lg mb-4 bg-gray-800"
  onChange={(e) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPhoto(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  }}
/>

<h2 className="text-xl font-semibold text-green-400 mb-3">
  Upload Certificate
</h2>

<input
  type="file"
  multiple
  accept=".pdf,.jpg,.jpeg,.png"
  className="w-full p-3 rounded-lg mb-4 bg-gray-800"
    onChange={(e) => {
  const files = Array.from(e.target.files || []);
  const fileNames = files.map((file) => file.name);

  setCertificates((prev) => [...prev, ...fileNames]);
}}
/>
<div className="mt-4">
  <h3 className="text-green-400 font-bold">
    Selected Certificates
  </h3>

  {certificates.map((cert, index) => (
    <p key={index}>
      📜 {cert}
    </p>
  ))}
  
</div>

<h2 className="text-xl font-semibold text-green-400 mb-3">
  Sports Videos
</h2>

<input
  type="text"
  placeholder="Paste YouTube Video Link"
  value={videoLink}
  onChange={(e) => setVideoLink(e.target.value)}
  className="w-full p-3 rounded-lg mb-4 bg-gray-800"
/>

<button
  type="button"
  onClick={() => {
    if (videoLink.trim()) {
      setVideos((prev) => [...prev, videoLink]);
      setVideoLink("");
    }
  }}
  className="bg-green-500 text-black px-4 py-2 rounded-lg mb-4"
>
  Add Video
</button>


        <button
          onClick={handleSave}
          className="bg-green-500 text-black px-8 py-3 rounded-lg font-bold"
        >
          Save Profile
        </button>

      </div>
    </div>
  );
}