// type rafce for built in snippet
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import {UserCheck,UserIcon,UserPlus,UserX,
} from "lucide-react";
import { motion } from "framer-motion";
import UserTable from "../components/users/UserTable";
import UserGrowthchart from "../components/users/UserGrowthchart"
import UserDemographicsChart from "../components/users/UserDemographicsChart"
import UserActivityHeatMap from "../components/users/UserActivityHeatMap"
 
const userStats = 
    {totalUsers: 152845,
     newUsersToday: 243,
     activeUsers: 98520,
     churnRate: "2.4%",
    }


const UsersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            title="Total Users"
            value={userStats.totalUsers.toLocaleString()}
            icon={UserIcon}
            color="#6366F1"
          />
          <StatCard
            title="New Users Today"
            value={userStats.newUsersToday}
            icon={UserPlus}
            color="#108981"
          />
          <StatCard
            title="Active Users"
            value={userStats.activeUsers.toLocaleString()}
            icon={UserCheck}
            color="#F59E0B"
          />
          <StatCard
            title="Churn Rate"
            value={userStats.churnRate}
            icon={UserX}
            color="#EF4444"
          />
        </motion.div>
        <UserTable />
        
        {/*USER CHARts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <UserGrowthchart />
          <UserActivityHeatMap />
          <UserDemographicsChart />
        </div>
      </main>
    </div>
  );
};

export default UsersPage;
