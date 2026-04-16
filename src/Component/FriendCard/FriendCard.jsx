import React from "react";
import { useNavigate } from "react-router-dom";

const FriendCard = ({ friend }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white rounded-xl shadow-sm p-6 text-center cursor-pointer hover:shadow-md transition"
    >
      {/* Image */}
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-16 h-16 rounded-full mx-auto mb-3"
      />

      {/* Name */}
      <h2 className="font-semibold text-lg">{friend.name}</h2>

      {/* Days */}
      <p className="text-sm text-gray-400">
        {friend.days_since_contact} days ago
      </p>

      {/* Status */}
      <p className="text-sm mt-2 text-red-500">
        {friend.status}
      </p>
    </div>
  );
};

export default FriendCard;