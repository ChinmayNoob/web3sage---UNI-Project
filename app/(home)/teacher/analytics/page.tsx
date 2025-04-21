'use client'
import React, { useState } from 'react';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  AreaChart,
  Area
} from 'recharts';
import { 
  TrendingUp, Users, Clock, DollarSign, BookOpen, Award,
  ArrowUpRight, Calendar, CreditCard, Percent, ChevronDown
} from 'lucide-react';

export default function Web3TeacherAnalytics() {
  const [timeRange, setTimeRange] = useState('month');
  
  // Sample data for charts
  const revenueData = [
    { name: 'Jan', amount: 4200 },
    { name: 'Feb', amount: 5800 },
    { name: 'Mar', amount: 7500 },
    { name: 'Apr', amount: 8900 },
    { name: 'May', amount: 9800 },
    { name: 'Jun', amount: 12000 },
  ];

  const watchTimeData = [
    { name: 'Week 1', minutes: 5400 },
    { name: 'Week 2', minutes: 7200 },
    { name: 'Week 3', minutes: 6100 },
    { name: 'Week 4', minutes: 8700 },
  ];

  const studentData = [
    { name: 'Smart Contracts', students: 345 },
    { name: 'DeFi Basics', students: 280 },
    { name: 'NFT Creation', students: 420 },
    { name: 'DAO Governance', students: 210 },
    { name: 'Web3 Security', students: 310 },
  ];

  const courseCompletionData = [
    { name: 'Completed', value: 68 },
    { name: 'In Progress', value: 32 },
  ];

  const COLORS = ['#0088FE', '#ECEFF1'];

  // Calculate totals
  const totalRevenue = revenueData.reduce((sum, item) => sum + item.amount, 0);
  const totalWatchMinutes = watchTimeData.reduce((sum, item) => sum + item.minutes, 0);
  const totalStudents = studentData.reduce((sum, item) => sum + item.students, 0);
  const totalCourses = 14;
  
  return (
    <div className="min-h-screen bg-white p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Teacher Analytics Dashboard</h1>
        <div className="flex items-center gap-2 mt-2">
          <p className="text-gray-500">Welcome back, Prof. Alex</p>
          <div className="flex items-center ml-auto">
            <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              <TrendingUp size={14} />
              <span>23% growth this month</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Time Range Selector */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-1 text-gray-600">
          <Calendar size={16} />
          <span className="text-sm">Analytics Overview</span>
        </div>
        <div className="flex bg-gray-100 rounded-lg p-1">
          {['week', 'month', 'quarter', 'year'].map(range => (
            <button
              key={range}
              className={`px-3 py-1 text-sm rounded-md ${timeRange === range ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500'}`}
              onClick={() => setTimeRange(range)}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Course Count */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="bg-blue-100 p-3 rounded-lg">
              <BookOpen size={20} className="text-blue-600" />
            </div>
            <div className="bg-green-50 text-green-600 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <ArrowUpRight size={12} />
              <span>+3 new</span>
            </div>
          </div>
          <h3 className="mt-4 text-2xl font-bold text-gray-800">{totalCourses}</h3>
          <p className="text-gray-500 text-sm">Active Courses</p>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center text-sm text-gray-600">
              <span className="flex items-center gap-1 mr-4">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                <span>Published</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-gray-300"></span>
                <span>Draft</span>
              </span>
            </div>
          </div>
        </div>
        
        {/* Total Revenue */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="bg-green-100 p-3 rounded-lg">
              <DollarSign size={20} className="text-green-600" />
            </div>
            <div className="bg-green-50 text-green-600 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <ArrowUpRight size={12} />
              <span>+18.2%</span>
            </div>
          </div>
          <h3 className="mt-4 text-2xl font-bold text-gray-800">${totalRevenue.toLocaleString()}</h3>
          <p className="text-gray-500 text-sm">Total Revenue</p>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Target: $60,000</span>
              <span className="text-green-600 font-medium">{Math.round((totalRevenue/60000)*100)}% achieved</span>
            </div>
          </div>
        </div>
        
        {/* Total Students */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users size={20} className="text-purple-600" />
            </div>
            <div className="bg-green-50 text-green-600 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <ArrowUpRight size={12} />
              <span>+24.5%</span>
            </div>
          </div>
          <h3 className="mt-4 text-2xl font-bold text-gray-800">{totalStudents.toLocaleString()}</h3>
          <p className="text-gray-500 text-sm">Total Students</p>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center text-sm text-gray-600">
              <span className="flex items-center gap-1 mr-4">
                <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                <span>New</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-gray-300"></span>
                <span>Returning</span>
              </span>
            </div>
          </div>
        </div>
        
        {/* Watch Time */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Clock size={20} className="text-orange-600" />
            </div>
            <div className="bg-green-50 text-green-600 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <ArrowUpRight size={12} />
              <span>+12.3%</span>
            </div>
          </div>
          <h3 className="mt-4 text-2xl font-bold text-gray-800">{Math.round(totalWatchMinutes/60).toLocaleString()} hrs</h3>
          <p className="text-gray-500 text-sm">Total Watch Time</p>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Avg per student:</span>
              <span className="text-gray-800 font-medium">{Math.round((totalWatchMinutes/60)/totalStudents*10)/10} hrs</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Revenue Chart */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-gray-800">Revenue Growth</h2>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                <span>Monthly Revenue</span>
              </div>
              <button className="flex items-center gap-1 text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-md">
                <span>Monthly</span>
                <ChevronDown size={14} />
              </button>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={revenueData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                <XAxis dataKey="name" stroke="#9e9e9e" />
                <YAxis stroke="#9e9e9e" />
                <Tooltip 
                  contentStyle={{ background: '#fff', border: '1px solid #f0f0f0', borderRadius: '8px' }}
                  formatter={(value) => [`$${value}`, 'Revenue']}
                />
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <Area 
                  type="monotone" 
                  dataKey="amount" 
                  stroke="#3b82f6" 
                  fill="url(#revenueGradient)" 
                  activeDot={{ r: 8 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Course Completion Chart */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-gray-800">Course Completion</h2>
          </div>
          <div className="h-64 flex flex-col items-center justify-center">
            <ResponsiveContainer width="100%" height="80%">
              <PieChart>
                <Pie
                  data={courseCompletionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {courseCompletionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Completion Rate']}
                  contentStyle={{ background: '#fff', border: '1px solid #f0f0f0', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">68%</p>
              <p className="text-sm text-gray-500">Course Completion Rate</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Popular Courses */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-gray-800">Popular Courses by Enrollment</h2>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={studentData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                barSize={20}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                <XAxis dataKey="name" stroke="#9e9e9e" />
                <YAxis stroke="#9e9e9e" />
                <Tooltip 
                  contentStyle={{ background: '#fff', border: '1px solid #f0f0f0', borderRadius: '8px' }}
                  formatter={(value) => [`${value} students`, 'Enrolled']}
                />
                <Bar dataKey="students" fill="#8884d8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Watch Time Analysis */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-gray-800">Watch Time Analysis</h2>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={watchTimeData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                <XAxis dataKey="name" stroke="#9e9e9e" />
                <YAxis stroke="#9e9e9e" />
                <Tooltip 
                  contentStyle={{ background: '#fff', border: '1px solid #f0f0f0', borderRadius: '8px' }}
                  formatter={(value) => [`${Math.round(value/60)} hrs`, 'Watch Time']}
                />
                <Line type="monotone" dataKey="minutes" stroke="#ff9800" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Course Stats Table */}
      <div className="mt-8 bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-gray-800">Course Performance Metrics</h2>
          <button className="text-blue-600 text-sm flex items-center gap-1">
            <span>View All Courses</span>
            <ChevronDown size={14} />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium">
              <tr>
                <th className="px-4 py-3 rounded-l-lg">Course Name</th>
                <th className="px-4 py-3">Students</th>
                <th className="px-4 py-3">Watch Time</th>
                <th className="px-4 py-3">Revenue</th>
                <th className="px-4 py-3">Completion</th>
                <th className="px-4 py-3 rounded-r-lg">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: 'Smart Contract Security', students: 345, watchHours: 4200, revenue: 10320, completion: 74, rating: 4.8 },
                { name: 'DeFi Protocol Development', students: 280, watchHours: 3800, revenue: 8400, completion: 68, rating: 4.7 },
                { name: 'NFT Collection Creation', students: 420, watchHours: 5600, revenue: 14700, completion: 82, rating: 4.9 },
                { name: 'Web3 Authentication', students: 210, watchHours: 2900, revenue: 6300, completion: 65, rating: 4.6 },
                { name: 'Blockchain Fundamentals', students: 310, watchHours: 3500, revenue: 7750, completion: 88, rating: 4.8 },
              ].map((course, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-4 py-4 font-medium text-gray-800">{course.name}</td>
                  <td className="px-4 py-4">{course.students}</td>
                  <td className="px-4 py-4">{course.watchHours} hrs</td>
                  <td className="px-4 py-4">${course.revenue}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${course.completion}%` }}
                        ></div>
                      </div>
                      <span>{course.completion}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span>{course.rating}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Insights Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={18} className="text-blue-600" />
            <h3 className="font-medium text-gray-800">Growth Insight</h3>
          </div>
          <p className="text-gray-600">Your Web3 security courses have shown 37% higher engagement than industry average. Consider expanding this curriculum.</p>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
          <div className="flex items-center gap-2 mb-4">
            <Percent size={18} className="text-green-600" />
            <h3 className="font-medium text-gray-800">Revenue Opportunity</h3>
          </div>
          <p className="text-gray-600">Students who complete DeFi courses are 3x more likely to enroll in advanced topics. Bundle these courses for higher revenue.</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
          <div className="flex items-center gap-2 mb-4">
            <Award size={18} className="text-purple-600" />
            <h3 className="font-medium text-gray-800">Student Success</h3>
          </div>
          <p className="text-gray-600">Courses with hands-on coding exercises show 45% higher completion rates. Add more interactive elements to boost engagement.</p>
        </div>
      </div>
    </div>
  );
}