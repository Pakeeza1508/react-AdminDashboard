import { BarChart, ShoppingBag, Users, Zap } from "lucide-react";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { motion } from "framer-motion";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
        {/* STaTS  */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            title="Total Sales"
            value="$12,345"
            icon={Zap}
            color="#6366f1"
          />
          <StatCard
            title="New Users"
            value="1,234"
            icon={Users}
            color="#8B5CF6"
          />
          <StatCard
            title="Total Products"
            value="567"
            icon={ShoppingBag}
            color="#EC4899"
          />
          <StatCard
            title="Conversion Rate"
            value="12.5%"
            icon={BarChart}
            color="#10B981"
          />
        </motion.div>

        {/* CHARts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
};
export default OverviewPage;
