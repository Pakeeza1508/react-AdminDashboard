import { motion } from "framer-motion";
import {
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
  Bar,
} from "recharts";

const COLORS = ['#6366f1', '#8B5CF6', '#EC4899','#108981', '#F59E0B'];

const SalesChannelData = [
  { name: "Website", sales: 45600 },
  { name: "Mobile App", sales: 38200 },
  { name: "Marketplace", sales: 29800 },
  { name: "Social Media", sales: 18700 },
];

const SalesChannelChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg p-6 lg:col-span-2 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Sales Channel</h2>

      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={SalesChannelData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)" }}
              itemStyle={{ color: "#ESE7EB" }}
            />
            <Legend />
            <Bar dataKey={"sales"} fill="#8B5CF6">
              {SalesChannelData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesChannelChart;
