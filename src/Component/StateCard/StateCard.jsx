import React from "react";

const StatsCards = () => {
  const data = [
    { number: 10, label: "Total Friends" },
    { number: 3, label: "On Track" },
    { number: 6, label: "Need Attention" },
    { number: 12, label: "Interactions This Month" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-30 py-10 bg-gray-100">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-sm p-6 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-800">
            {item.number}
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;