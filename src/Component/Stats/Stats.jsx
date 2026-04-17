import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Stats = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("history")) || [];

    const counts = history.reduce(
      (acc, item) => {
        if (item.type === "call") acc.call++;
        else if (item.type === "video") acc.video++;
        else if (item.type === "text") acc.text++;
        return acc;
      },
      { call: 0, video: 0, text: 0 }
    );

    setData([
      { name: "Text", value: counts.text },
      { name: "Call", value: counts.call },
      { name: "Video", value: counts.video },
    ]);
  }, []);

  const COLORS = ["#7C3AED", "#1F2937", "#22C55E"];

  return (
    <div className="p-10 bg-gray-100 min-h-screen px-60">
      
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Friendship Analytics
      </h1>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-sm p-6 w-full max-w-4xl">
        
        <p className=" text-gray-400 mb-4 text-xl font-semibold">
          By Interaction Type
        </p>

        {/* Chart Center */}
        <div className="w-full h-[300px] flex items-center justify-center">
          <ResponsiveContainer width={300} height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Custom Legend (like screenshot) */}
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2 text-purple-600">
            <span className="w-3 h-3 rounded-full bg-purple-600"></span>
            Text
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <span className="w-3 h-3 rounded-full bg-gray-800"></span>
            Call
          </div>

          <div className="flex items-center gap-2 text-green-600">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            Video
          </div>
        </div>

      </div>
    </div>
  );
};

export default Stats;