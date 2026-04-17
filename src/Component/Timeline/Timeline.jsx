import React, { useEffect, useState } from "react";

const Timeline = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(data);
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">Timeline History</h1>

      {history.length === 0 ? (
        <p>No history found</p>
      ) : (
        history.slice().reverse().map((item, i) => (
          <div key={i} className="bg-gray-100 p-3 mb-2 rounded">
            <p><b>{item.type}</b></p>
            <p>{item.name}</p>
            <p className="text-sm text-gray-500">{item.time}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Timeline;