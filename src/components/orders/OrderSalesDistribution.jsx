import {motion} from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const orderStatusData = [
  { name: 'Pending', value: 30 },
  { name: 'Processing', value: 45 },
  { name: 'Shipping', value: 60 },
  { name: 'Delivered', value: 120 }
];

const COLORS = ['#FF686B', '#4ECDC4', '#458701','#FED766', '#2AB7CA'];

const OrderSalesDistribution = () => {
  return (
    <motion.div className='bg-gray-800 rounded-xl p-6 shadow-lg bg-opacity-50 backdrop-blur-md border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}>
      
      <h2 className='text-lg font-medium mb-4 text-gray-100'>
        Order Status Distribution
      </h2>
      <div style={{width: "100%", height: 300}}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={orderStatusData}
              dataKey="value"
            //   nameKey="name"
              cx={"50%"}
              cy={"50%"}
              outerRadius={80}
              fill="#8884d8"
              labelLine={true}
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
            >
              {orderStatusData.map((entry, index) => (
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

export default OrderSalesDistribution;
