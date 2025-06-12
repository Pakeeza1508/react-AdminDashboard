// type rafce for built in snippet
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import {
  ShoppingBag,
  DollarSign,
  Package,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";
import { motion } from "framer-motion";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesTrend from "../components/products/SalesTrend";
import ProductTable from "../components/products/ProductTable";

const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            title="Total Products"
            value={1234}
            icon={Package}
            color="#6366F1"
          />
          <StatCard
            title="Top Selling"
            value={89}
            icon={TrendingUp}
            color="#108981"
          />
          <StatCard
            title="Low Stock"
            value={23}
            icon={AlertTriangle}
            color="#F59E0B"
          />
          <StatCard
            title="Total Revenue"
            value={"$543,210"}
            icon={DollarSign}
            color="#EF4444"
          />
        </motion.div>

        <ProductTable />
        {/* CHARts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesTrend />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
