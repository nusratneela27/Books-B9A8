import React, { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return (
    <path
      d={`M${x},${y + height} L${x + width},${y + height} L${
        x + width / 2
      },${y} Z`}
      fill={fill}
      stroke="none"
    />
  );
};

const ReadPage = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("read-books"));
    if (localStorageData) {
      setBookData(localStorageData);
    }
  }, []);

  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-full max-w-xl">
          <BarChart
            width={500}
            height={400}
            data={bookData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bookName" />
            <YAxis />
            <Bar
              dataKey="totalPages"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {bookData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default ReadPage;
