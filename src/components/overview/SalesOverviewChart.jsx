import {motion} from 'framer-motion';
import { CartesianGrid, Tooltip, XAxis, YAxis, Line, ResponsiveContainer, LineChart } from 'recharts';

const salesData = [
    { month: 'Jul', sales: 4200 },
    { month: 'Aug', sales: 3800 },
    { month: 'Sep', sales: 5100 },
    { month: 'Oct', sales: 4600 },
    { month: 'Nov', sales: 5400 },
    { month: 'Dec', sales: 7200 },
    { month: 'Jan', sales: 6100 },
    { month: 'Feb', sales: 5900 },
    { month: 'Mar', sales: 6800 },
    { month: 'Apr', sales: 6300 },
    { month: 'May', sales: 7100 },
    { month: 'Jun', sales: 7500 },
];

const SalesOverviewChart = () => {
  return (
    <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-gray-700'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2 }}
    >
      <h2 className='text-lg font-medium m-4 text-gray-100'>Sales Overview</h2>

      <div className="h-80 m-4 mr-5">
        <ResponsiveContainer width={'100%'} height={'100%'}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray='3 3' stroke='#4b5563'/>
            <XAxis dataKey='month' stroke='#9ca3af'/>
            <YAxis stroke='#9ca3af'/>
            <Tooltip contentStyle={{ backgroundColor: 'rgba(31, 41, 55, 0.8)', borderColor: '#4B5563' }}
            itemStyle={{ color: '#ESE7EB' }} />

            <Line type='monotone'
            dataKey='sales'
            stroke='#6366F1'
            strokeWidth={3}
            activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default SalesOverviewChart
