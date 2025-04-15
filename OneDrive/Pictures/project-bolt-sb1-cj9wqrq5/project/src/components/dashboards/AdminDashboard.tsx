import React, { useEffect, useState } from "react";
import { Users, BookOpen, UserCheck } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

interface Activity {
  // Represents a recent activity
  action: string;
  time: string;
}

interface DashboardData {
  // Represents the data structure for the dashboard
  studentsCount: number;
  trainersCount: number;
  coursesCount: number;
  activities: Activity[];
}

const AdminDashboard: React.FC = () => {
  //
  const { user } = useAuth();
  const [dashboardData, setDashboardData] = useState<DashboardData>({
    studentsCount: 0,
    trainersCount: 0,
    coursesCount: 0,
    activities: [],
  });

  useEffect(() => {
    // Replace with your actual backend URL
    fetch("https://your-backend.com/api/dashboard")
      .then((res) => res.json())
      .then((data) => setDashboardData(data))
      .catch((err) => console.error("Error fetching dashboard data:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Welcome, {user?.name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="h-8 w-8 text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Students</h2>
          <p className="text-gray-600">
            Manage student enrollments and profiles
          </p>
          <p className="text-2xl font-bold mt-4">
            {dashboardData.studentsCount}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <UserCheck className="h-8 w-8 text-green-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Trainers</h2>
          <p className="text-gray-600">
            Oversee trainer assignments and schedules
          </p>
          <p className="text-2xl font-bold mt-4">
            {dashboardData.trainersCount}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <BookOpen className="h-8 w-8 text-purple-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Courses</h2>
          <p className="text-gray-600">Monitor active courses and programs</p>
          <p className="text-2xl font-bold mt-4">
            {dashboardData.coursesCount}
          </p>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {dashboardData.activities.map((activity, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-2"
              >
                <span className="text-gray-700">{activity.action}</span>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
