import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const dailySalesData = [
    {name: "Mon", Sales: 1000},
    {name: "Tue", Sales: 1200},
    {name: "Wed", Sales: 900},
    {name: "Thu", Sales: 1100},
    {name: "Fri", Sales: 1300},
    {name: "Sat", Sales: 1600},
    {name: "Sun", Sales: 1400}
];

const DailySalesTrends = () =>{
   return (
       <motion.div
         className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-700"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.4 }}
       >
         <h2 className="text-lg font-medium mb-4 text-gray-100">Daily Sales Trends</h2>
   
         <div style={{width: '100%', height: 300}}>
           <ResponsiveContainer>
             <BarChart data={dailySalesData}>
               <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
               <XAxis dataKey="name" stroke="#9CA3AF" />
               <YAxis stroke="#9CA3AF" />
               <Tooltip
                 contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#485563" }}
                 itemStyle={{ color: "#ESE7EB" }}
               />
               <Legend />
               <Bar dataKey="Sales" fill="#108981"/>
             </BarChart>
           </ResponsiveContainer>
         </div>
       </motion.div>
   )
};

export default DailySalesTrends;