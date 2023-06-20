import React, { useEffect, useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const EventGenre = ({ events }) => {
  const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

  useEffect(() => {
    setData(() => getData());
  }, [events]);

  const [data, setData] = useState([]);

  function getData() {
    const data = genres.map((genre, index) => {
      const value = events.filter(({ summary }) =>
        summary.split(" ").includes(genre)
      ).length;

      return { name: genre, value };
    });

    return data;
  }

  return (
    <ResponsiveContainer height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;
