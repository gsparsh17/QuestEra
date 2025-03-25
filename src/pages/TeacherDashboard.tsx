import { Users, BookOpen, BarChart3, Clock, AlertCircle, FileText, Award, TrendingUp } from 'lucide-react';

const TeacherDashboard = () => {
  const stats = [
    { 
      title: 'Total Students', 
      value: '120', 
      icon: <Users className="w-6 h-6" />,
      change: '+12%',
      trend: 'up',
      color: 'bg-blue-100 text-blue-600'
    },
    { 
      title: 'Active Modules', 
      value: '4', 
      icon: <BookOpen className="w-6 h-6" />,
      change: '+1',
      trend: 'up',
      color: 'bg-green-100 text-green-600'
    },
    { 
      title: 'Completion Rate', 
      value: '85%', 
      icon: <BarChart3 className="w-6 h-6" />,
      change: '+5%',
      trend: 'up',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const studentProgress = [
    { name: 'Class 8A', module: 'Banking Basics', progress: 75, students: 28 },
    { name: 'Class 9B', module: 'Investment Fundamentals', progress: 60, students: 32 },
    { name: 'Class 10A', module: 'Personal Finance', progress: 90, students: 35 }
  ];

  const pendingTasks = [
    { 
      task: 'Review Budget Assignments', 
      class: 'Class 8A', 
      deadline: 'Today',
      icon: <FileText className="w-5 h-5" />,
      priority: 'high'
    },
    { 
      task: 'Grade Investment Quiz', 
      class: 'Class 9B', 
      deadline: 'Tomorrow',
      icon: <BookOpen className="w-5 h-5" />,
      priority: 'medium'
    },
    { 
      task: 'Update Module Content', 
      class: 'All Classes', 
      deadline: 'Next Week',
      icon: <AlertCircle className="w-5 h-5" />,
      priority: 'low'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Teacher Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, <span className="font-medium">Mrs. Sharma</span></p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
            Quick Report
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md">
            Create New Assignment
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.color}`}>
                {stat.icon}
              </div>
              <span className={`flex items-center text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                <TrendingUp className={`w-4 h-4 mr-1 ${
                  stat.trend === 'up' ? 'text-green-600' : 'rotate-180 text-red-600'
                }`} />
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-600 mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Class Progress */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Class Progress</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View Detailed Reports
            </button>
          </div>
          <div className="space-y-6">
            {studentProgress.map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.module}</p>
                  </div>
                  <span className="text-sm text-gray-500">{item.students} students</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${
                        item.progress > 75 ? 'bg-green-500' : 
                        item.progress > 50 ? 'bg-blue-500' : 'bg-yellow-500'
                      }`}
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium w-12 text-right">
                    {item.progress}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Tasks */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Pending Tasks</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {pendingTasks.map((task, index) => (
              <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className={`p-2 rounded-lg mr-3 ${
                  task.priority === 'high' ? 'bg-red-100 text-red-600' :
                  task.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-blue-100 text-blue-600'
                }`}>
                  {task.icon}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{task.task}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-1">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{task.class}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{task.deadline}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Recent Activity</h2>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All
          </button>
        </div>
        <div className="space-y-4">
          {[
            { 
              action: 'Assignment Completed', 
              details: '15 students completed Banking Quiz', 
              time: '2 hours ago',
              icon: <Award className="w-5 h-5 text-green-500" />
            },
            { 
              action: 'New Module Started', 
              details: 'Investment Basics for Class 9B', 
              time: '4 hours ago',
              icon: <BookOpen className="w-5 h-5 text-blue-500" />
            },
            { 
              action: 'Progress Report Generated', 
              details: 'Monthly report for Class 8A', 
              time: 'Yesterday',
              icon: <BarChart3 className="w-5 h-5 text-purple-500" />
            }
          ].map((activity, index) => (
            <div key={index} className="flex items-start border-l-4 border-blue-500 pl-4 py-2">
              <div className="mr-3 mt-1">
                {activity.icon}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">{activity.action}</p>
                <p className="text-sm text-gray-600">{activity.details}</p>
                <p className="text-xs text-gray-500 mt-1 flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;