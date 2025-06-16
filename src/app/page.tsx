import Image from "next/image";

export default function Home() {
  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Total Users</h2>
          <p className="text-3xl font-bold">1,234</p>
          <p className="text-sm text-gray-500">+12% from last month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Revenue</h2>
          <p className="text-3xl font-bold">$12,345</p>
          <p className="text-sm text-gray-500">+8% from last month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Active Projects</h2>
          <p className="text-3xl font-bold">42</p>
          <p className="text-sm text-gray-500">+5% from last month</p>
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">New user registration</p>
              <p className="text-sm text-gray-500">John Doe joined the platform</p>
            </div>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Project update</p>
              <p className="text-sm text-gray-500">Project X reached 75% completion</p>
            </div>
            <span className="text-sm text-gray-500">5 hours ago</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">New sale</p>
              <p className="text-sm text-gray-500">Premium subscription sold</p>
            </div>
            <span className="text-sm text-gray-500">1 day ago</span>
          </div>
        </div>
      </div>
    </main>
  );
}
