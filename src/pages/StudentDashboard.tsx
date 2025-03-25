import { BookOpen, Award, Trophy, BarChart3, Target, Clock, TrendingUp, Wallet, CheckCircle } from 'lucide-react';

const StudentDashboard = () => {
  const progressCards = [
    { 
      title: 'Current Module', 
      value: 'Basic Budgeting', 
      icon: <BookOpen className="w-6 h-6" />,
      progress: 78,
      color: 'bg-blue-100 text-blue-600'
    },
    { 
      title: 'Completion Rate', 
      value: '78%', 
      icon: <BarChart3 className="w-6 h-6" />,
      progress: 78,
      color: 'bg-green-100 text-green-600'
    },
    { 
      title: 'Points Earned', 
      value: '2,450', 
      icon: <Trophy className="w-6 h-6" />,
      progress: 65,
      color: 'bg-yellow-100 text-yellow-600'
    },
    { 
      title: 'Badges', 
      value: '12', 
      icon: <Award className="w-6 h-6" />,
      progress: 80,
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const upcomingTasks = [
    { 
      title: 'Complete Budget Challenge', 
      deadline: 'Today', 
      type: 'Task',
      icon: <Wallet className="w-5 h-5" />,
      color: 'bg-blue-100 text-blue-600'
    },
    { 
      title: 'Banking Quiz', 
      deadline: 'Tomorrow', 
      type: 'Quiz',
      icon: <BookOpen className="w-5 h-5" />,
      color: 'bg-green-100 text-green-600'
    },
    { 
      title: 'Savings Goal Review', 
      deadline: 'In 2 days', 
      type: 'Review',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const achievements = [
    { 
      name: 'Budget Master', 
      description: 'Created first monthly budget', 
      icon: <Target className="w-6 h-6" />,
      date: 'Earned 2 days ago',
      color: 'bg-blue-100 text-blue-600'
    },
    { 
      name: 'Savings Champion', 
      description: 'Reached savings goal', 
      icon: <Trophy className="w-6 h-6" />,
      date: 'Earned 1 week ago',
      color: 'bg-yellow-100 text-yellow-600'
    },
    { 
      name: 'Quiz Ace', 
      description: 'Perfect score on Banking Basics', 
      icon: <Award className="w-6 h-6" />,
      date: 'Earned 2 weeks ago',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome back, <span className="text-blue-600">Rahul!</span></h1>
        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <span className="font-medium">2,450 points</span>
        </div>
      </div>
      
      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {progressCards.map((card, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${card.color}`}>
                {card.icon}
              </div>
              <div className="w-16 h-16 relative">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={card.color.split(' ')[1].replace('text-', '')}
                    strokeWidth="3"
                    strokeDasharray={`${card.progress}, 100`}
                  />
                </svg>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-bold">
                  {card.progress}%
                </span>
              </div>
            </div>
            <h3 className="text-gray-600 mb-1">{card.title}</h3>
            <p className="text-2xl font-bold text-gray-800">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Current Learning Path */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Learning Progress</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All Modules
            </button>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-100 rounded-full h-4">
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-700 h-4 rounded-full" 
                style={{ width: '78%' }}
              ></div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-gray-800">Basic Budgeting</h3>
                <p className="text-sm text-gray-600">Module 2 of Financial Foundations</p>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                78% Complete
              </span>
            </div>
            <div className="grid grid-cols-5 gap-2 text-xs text-gray-500">
              {['Intro', 'Earnings', 'Expenses', 'Savings', 'Review'].map((item, i) => (
                <div key={i} className={`text-center p-1 rounded ${i < 3 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'}`}>
                  {item}
                </div>
              ))}
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Continue Learning
            </button>
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Upcoming Tasks</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {upcomingTasks.map((task, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${task.color}`}>
                    {task.icon}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{task.title}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{task.deadline}</span>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${task.color.replace('text-', 'text-').replace('bg-', 'bg-')}`}>
                  {task.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Recent Achievements</h2>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="p-5 border border-gray-200 rounded-lg hover:border-blue-200 transition-colors">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${achievement.color}`}>
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{achievement.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{achievement.description}</p>
                  <div className="flex items-center text-xs text-gray-500 mt-3">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span>{achievement.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;