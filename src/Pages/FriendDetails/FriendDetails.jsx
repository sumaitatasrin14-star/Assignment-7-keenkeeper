import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((f) => String(f.id) === id);
        setFriend(found);
      });
  }, [id]);

  if (!friend) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="grid md:grid-cols-3 gap-6">

        {/* LEFT CARD */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <img
            src={friend.picture}
            className="w-20 h-20 rounded-full mx-auto mb-3"
          />
          <h2 className="font-semibold text-lg">{friend.name}</h2>
          <p className="text-gray-400 text-sm">{friend.email}</p>

          <p className="mt-4 text-sm italic text-gray-500">
            "{friend.bio}"
          </p>

          <div className="mt-4 space-y-2 text-sm">
            <p>🔔 Snooze 2 Weeks</p>
            <p>✔ Active</p>
            <p className="text-red-500">🗑 Delete</p>
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
              <button className="bg-gray-100 px-4 py-2 rounded">📞 Call</button>
              <button className="bg-gray-100 px-4 py-2 rounded">💬 Text</button>
              <button className="bg-gray-100 px-4 py-2 rounded">🎥 Video</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetails;