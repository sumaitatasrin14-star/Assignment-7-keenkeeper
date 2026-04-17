import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdVideoCall } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";

const Timeline = () => {
  const [history, setHistory] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(data);
  }, []);

  // 🔥 filter logic
  const filteredHistory =
    filter === "all"
      ? history
      : history.filter((item) => item.type === filter);

  // icon
  const getIcon = (type) => {
    if (type === "call") return <FaPhoneAlt className="text-gray-600" />;
    if (type === "video") return <MdVideoCall className="text-gray-600" />;
    if (type === "text") return <FaRegCommentDots className="text-gray-600" />;
  };

  // label
  const getTitle = (type) => {
    if (type === "call") return "Call";
    if (type === "video") return "Video";
    if (type === "text") return "Text";
  };

  return (
    <div className="max-w-3xl mx-auto p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Timeline</h1>

        {/* FILTER DROPDOWN */}
        <select
          className="border px-3 py-2 rounded-md text-sm"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
      </div>

      {/* LIST */}
      <div className="space-y-3">
        {filteredHistory.length === 0 ? (
          <p className="text-gray-400">No history found</p>
        ) : (
          filteredHistory
            .slice()
            .reverse()
            .map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white border rounded-lg p-4 shadow-sm"
              >
                {/* ICON */}
                <div className="text-xl">
                  {getIcon(item.type)}
                </div>

                {/* TEXT */}
                <div className="flex-1">
                  <p className="font-medium">
                    {getTitle(item.type)} with{" "}
                    <span className="text-green-700">
                      {item.name}
                    </span>
                  </p>

                  <p className="text-xs text-gray-400">
                    {item.time}
                  </p>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default Timeline;