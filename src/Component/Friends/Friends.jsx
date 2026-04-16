import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    
    <div className="bg-gray-100 min-h-screen py-10 px-30">
      <h2 className="text-2xl font-bold mb-8">
        Your Friends 
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <div
            key={friend.id}
            onClick={() => navigate(`/friend/${friend.id}`)}
            className="bg-white rounded-xl shadow p-5"
          >
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />

            <h3 className="text-lg font-semibold text-center">
              {friend.name}
            </h3>

            <p className="text-sm text-gray-500 text-center mb-2">
              {friend.email}
            </p>

            <p className="text-sm text-center mb-2">
              Days since contact:{" "}
              <span className="font-semibold">
                {friend.days_since_contact}
              </span>
            </p>

            <p
              className={`text-center text-sm font-medium mb-2 ml-25 mr-25 ${
                friend.status === "overdue"
                  ? "bg-red-500 text-white text-xs text-center px-1 py-1 rounded-2xl"
                  : friend.status === "needs attention"
                  ? "bg-yellow-500 text-white text-xs text-center px-0.5 py-1 rounded-2xl"
                  : "bg-green-500 text-white text-xs text-center px-1 py-1 rounded-2xl"
              }`}
            >
              {friend.status}
            </p>

            <div className="flex flex-wrap gap-2 justify-center mb-3">
              {friend.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-xs text-gray-500 text-center mb-2">
              {friend.bio}
            </p>

            <p className="text-xs text-center">
              Goal: {friend.goal} days
            </p>

            <p className="text-xs text-center text-gray-400">
              Next: {friend.next_due_date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;