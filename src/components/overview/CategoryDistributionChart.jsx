import {motion} from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const categoryData = [
  { name: 'Electronics', value: 4500 },
  { name: 'Clothing', value: 3200 },
  { name: 'Home & Garden', value: 2800 },
  { name: 'Books', value: 2100 },
  { name: 'Sports & Outdoors', value: 1900 },
];

const COLORS = ['#6366f1', '#8B5CF6', '#EC4899','#108981', '#F59E0B'];

const CategoryDistributionChart = () => {
  return (
    <motion.div className='bg-gray-800 rounded-xl p-6 shadow-lg bg-opacity-50 backdrop-blur-md border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}>
      
      <h2 className='text-lg font-medium mb-4 text-gray-100'>
        Category Distribution
      </h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="value"
            //   nameKey="name"
              cx={"50%"}
              cy={"50%"}
              outerRadius={80}
              fill="#8884d8"
              labelLine={false}
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563"
            }}
            itemStyle={{color: "#ESE7EB"}}/>
            <Legend 
               />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default CategoryDistributionChart
