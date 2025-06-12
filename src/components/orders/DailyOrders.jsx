import {motion} from 'framer-motion';
import { CartesianGrid, Tooltip, XAxis, YAxis, Line, ResponsiveContainer, LineChart, Legend } from 'recharts';

const ordersData = [
    { data: '07/01', orders: 45 },
    { data: '07/02', orders: 52 },
    { data: '07/03', orders: 49 },
    { data: '07/04', orders: 60 },
    { data: '07/05', orders: 55 },
    { data: '07/06', orders: 58 },
    { data: '07/07', orders: 62 }    
];

const DailyOrders = () => {
  return (
    <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-gray-700 pr-6'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2 }}
    >
      <h2 className='text-xl font-semibold m-4 text-gray-100'>Daily Orders</h2>

      <div style={{width: "100%", height: 300}}>
        <ResponsiveContainer>
          <LineChart data={ordersData}>
            <CartesianGrid strokeDasharray='3 3' stroke='#4b5563'/>
            <XAxis dataKey='data' stroke='#9ca3af'/>
            <YAxis stroke='#9ca3af'/>
            <Tooltip contentStyle={{ backgroundColor: 'rgba(31, 41, 55, 0.8)', borderColor: '#4B5563' }}
            itemStyle={{ color: '#ESE7EB' }} />
            <Legend />
            <Line type='monotone'
            dataKey='orders'
            stroke='#6366F1'
            strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default DailyOrders;
