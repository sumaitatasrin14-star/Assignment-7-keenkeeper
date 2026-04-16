import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// ✅ Toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  // ✅ Track active action
  const [activeAction, setActiveAction] = useState(null);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((f) => String(f.id) === id);
        setFriend(found);
      });
  }, [id]);

  // ✅ Handle button click
  const handleAction = (type) => {
    if (activeAction === type) {
      toast.warn(`Already ${type} in progress!`);
      return;
    }

    setActiveAction(type);

    if (type === "call") toast.success("📞 Calling...");
    if (type === "text") toast.success("💬 Sending text...");
    if (type === "video") toast.success("🎥 Starting video...");
  };

  if (!friend)
    return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="bg-gray-100 min-h-screen p-6 px-50">
      <div className="grid md:grid-cols-3 gap-6">

        {/* LEFT CARD */}
        <div className="bg-white p-5 rounded-xl shadow text-center">
          <div>
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-20 h-20 rounded-full mx-auto mb-3"
            />
            <h2 className="font-semibold text-lg">{friend.name}</h2>
            <p className="text-gray-400 text-sm">{friend.email}</p>

            <p className="mt-4 text-sm italic text-gray-500">
              "{friend.bio}"
            </p>
          </div>

          <div className="mt-4 space-y-2 text-sm">
            <button className="bg-gray-100 px-4 py-2 w-full rounded">
              🔔 Snooze 2 Weeks
            </button>
            <button className="bg-gray-100 flex px-10 ml-20 py-2 rounded">
              ✔ Archive
            </button>
            <button className="bg-gray-100 px-4 py-2 rounded text-red-500">
              🗑 Delete
            </button>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="md:col-span-2 space-y-4">

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h3 className="text-xl font-bold">
                {friend.days_since_contact}
              </h3>
              <p className="text-xs text-gray-400">Days Since Contact</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h3 className="text-xl font-bold">{friend.goal}</h3>
              <p className="text-xs text-gray-400">Goal (Days)</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h3 className="text-sm font-bold">
                {friend.next_due_date}
              </h3>
              <p className="text-xs text-gray-400">Next Due</p>
            </div>
          </div>

          {/* RELATIONSHIP GOAL */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Relationship Goal</h3>
            <p className="text-sm text-gray-500">
              Connect every {friend.goal} days
            </p>
          </div>

          {/* QUICK ACTION */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-3">Quick Check-in</h3>

            <div className="flex gap-4">
              <button
                onClick={() => handleAction("call")}
                className={`px-4 py-2 rounded ${
                  activeAction === "call"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                📞 Call
              </button>

              <button
                onClick={() => handleAction("text")}
                className={`px-4 py-2 rounded ${
                  activeAction === "text"
                    ? "bg-green-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                💬 Text
              </button>

              <button
                onClick={() => handleAction("video")}
                className={`px-4 py-2 rounded ${
                  activeAction === "video"
                    ? "bg-purple-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                🎥 Video
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ✅ Toast Container */}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default FriendDetails;