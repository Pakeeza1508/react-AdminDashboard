// type rafce for built in snippet
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import {CreditCard, DollarSign, ShoppingCart, TrendingUp 
} from "lucide-react";
import { motion } from "framer-motion";
import SalesOverviewTable from '../components/sales/SalesOverviewTable'
import SalesCategory from "../components/sales/SalesCategory"
import DailySalesTrends from "../components/sales/DailySalesTrends"

 
const salesStats = 
    {totalRevenue: "$1,234,567",
     averageOrderValue: "$78.90",
     conversionRate: "3.45%",
     salesGrowth: "12.3%",
    }


const SalesPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Sales Dashboard" />

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
        {/* STATS SaLeS*/}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            title="Total Revenue"
            value={salesStats.totalRevenue}
            icon={DollarSign}
            color="#6366F1"
          />
          <StatCard
            title="Avg. Order Value"
            value={salesStats.averageOrderValue}
            icon={ShoppingCart}
            color="#108981"
          />
          <StatCard
            title="Conversion Rate"
            value={salesStats.conversionRate}
            icon={TrendingUp}
            color="#F59E0B"
          />
          <StatCard
            title="Sales Growth"
            value={salesStats.salesGrowth}
            icon={CreditCard}
            color="#EF4444"
          />
        </motion.div>
        <SalesOverviewTable />
       
        
        {/*Sales CHARts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <SalesCategory />
          <DailySalesTrends />
        </div>
      </main>
    </div>
  );
};

export default SalesPage;
