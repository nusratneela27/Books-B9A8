import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const ReadPage = () => {
  const [dataId, setDataId] = useState([]);
  useEffect(() => {
    const getItems = JSON.parse(localStorage.getItem("read-books"));
    if (getItems) {
      setDataId(getItems);
    }
  }, []);

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

  return (
    <BarChart
      width={500}
      height={400}
      data={dataId}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar
        dataKey="totalPages"
        fill="#8884d8"
        shape={<TriangleBar />}
        label={{ position: "top" }}
      >
        {dataId.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
};

export default ReadPage;
