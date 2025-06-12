// type rafce for built in snippet
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import {CheckCircle, DollarSign, ShoppingBag, Clock
} from "lucide-react";
import { motion } from "framer-motion";

import DailyOrders from "../components/orders/DailyOrders"
import OrderList from '../components/orders/OrderList'
import OrderSalesDistribution from '../components/orders/OrderSalesDistribution'
 
const orderStats = 
    {totalOrders: "1234",
     pendingOrders: "56",
     completedOrders: "1,178",
     TotalRevenue: "$98,765",
    }

const OrdersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Orders" />

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
        {/* STATS SaLeS*/}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            title="Total Orders"
            value={orderStats.totalOrders}
            icon={ShoppingBag}
            color="#6366F1"
          />
          <StatCard
            title="Pending Orders"
            value={orderStats.pendingOrders}
            icon={Clock}
            color="#108981"
          />
          <StatCard
            title="Completed Orders"
            value={orderStats.completedOrders}
            icon={CheckCircle}
            color="#F59E0B"
          />
          <StatCard
            title="Total Revenue"
            value={orderStats.TotalRevenue}
            icon={DollarSign}
            color="#EF4444"
          />
        </motion.div>
       

       
        
        {/*Sales CHARts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <DailyOrders />
          <OrderSalesDistribution />
        </div>
 <OrderList />
      </main>
    </div>
  );
};

export default OrdersPage;
