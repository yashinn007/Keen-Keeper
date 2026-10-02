import { Legend, Pie, PieChart, Tooltip } from "recharts";
import useFilterFriends from "../../hooks/useFilterFriends";

const StatusPage = () => {
  // get filtered friends from custom hook
  const { call, text, video } = useFilterFriends();

  const data = [
    { name: "call", value: call.length, fill: "green" },
    { name: "text", value: text.length, fill: "blue" },
    { name: "video", value: video.length, fill: "orange" },
  ];

  return (
    <div className="container mx-auto my-6 md:my-10 lg:my-20 px-3 md:px-5 min-h-[60vh]">
      <h2 className="text-5xl font-bold mb-6">Friendship Analytics</h2>
      <div className="p-8 border border-gray-300 rounded-lg">
        <h4 className="text-5 font-medium">By Interaction Type</h4>
        <div className="flex justify-center items-center flex-col mt-6">
          <PieChart
            style={{
              width: "100%",
              maxWidth: "250px",
              maxHeight: "80vh",
              aspectRatio: 1,
            }}
            responsive
          >
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              // Corner radius is the rounded edge of each pie slice
              cornerRadius="50%"
              // padding angle is the gap between each pie slice
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
            />
            <Legend></Legend>
            <Tooltip></Tooltip>
          </PieChart>
          <h2
            className={
              call.length == 0 && text.length == 0 && video.length == 0
                ? "flex mt-6 text-gray-500"
                : "hidden"
            }
          >
            Call, Text or Video a friend for get data
          </h2>
        </div>
      </div>
    </div>
  );
};

export default StatusPage;
