import { Suspense } from 'react';
import { Trophy, Star, TrendingUp, Coins, PiggyBank, Award, Clock, Users, ChevronRight, Wallet } from 'lucide-react';
import BudgetMasterGame from '../components/games/BudgetMasterGame';
import StockMarketGame from '../components/games/StockMarketGame';
import MoneyQuestGame from '../components/games/MoneyQuestGame';

const GameCenter = () => {
  const games = [
    {
      title: "Budget Master",
      description: "Learn budgeting through an interactive city-building game",
      icon: <PiggyBank className="w-8 h-8" />,
      difficulty: "Beginner",
      players: "2,345",
      points: "500",
      time: "15-30 mins",
      component: BudgetMasterGame,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Stock Market Simulator",
      description: "Practice investing with virtual money in real-time markets",
      icon: <TrendingUp className="w-8 h-8" />,
      difficulty: "Advanced",
      players: "1,892",
      points: "750",
      time: "30-45 mins",
      component: StockMarketGame,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Money Quest",
      description: "Adventure game teaching basic financial concepts",
      icon: <Coins className="w-8 h-8" />,
      difficulty: "Intermediate",
      players: "3,156",
      points: "600",
      time: "20-35 mins",
      component: MoneyQuestGame,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const leaderboard = [
    { name: "Rahul S.", points: "4,250", rank: 1, avatar: "RS", progress: 95 },
    { name: "Priya M.", points: "3,890", rank: 2, avatar: "PM", progress: 85 },
    { name: "Amit K.", points: "3,670", rank: 3, avatar: "AK", progress: 80 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Game Center</h1>
          <p className="text-gray-600 mt-2">Learn financial concepts through interactive games</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
            <Trophy className="w-5 h-5 text-yellow-500 mr-2" />
            <span className="font-medium">2,450</span>
            <span className="text-gray-500 ml-1">points</span>
          </div>
          <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
            <Award className="w-5 h-5 text-purple-500 mr-2" />
            <span className="font-medium">12</span>
            <span className="text-gray-500 ml-1">badges</span>
          </div>
        </div>
      </div>

      {/* Featured Games */}
      <div className="grid grid-cols-1 gap-8 mb-12">
        {games.map((game, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <div className={`p-3 rounded-lg ${game.color}`}>
                    {game.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{game.title}</h3>
                    <p className="text-gray-600">{game.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${game.color.replace('text-', 'text-').replace('bg-', 'bg-')}`}>
                    {game.difficulty}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    {game.points} pts
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {game.time}
                  </span>
                </div>
              </div>
              
              <Suspense fallback={
                <div className="w-full h-[400px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                  <div className="animate-pulse text-gray-400">Loading game preview...</div>
                </div>
              }>
                <game.component />
              </Suspense>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 space-y-4 md:space-y-0">
                <div className="flex items-center text-gray-500">
                  <Users className="w-5 h-5 mr-2" />
                  <span>{game.players} active players</span>
                </div>
                <div className="flex space-x-3 w-full md:w-auto">
                  <button className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors shadow-sm w-full md:w-auto">
                    Learn More
                  </button>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md w-full md:w-auto">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Leaderboard */}
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Top Players</h2>
          <button className="text-blue-600 hover:text-blue-700 flex items-center">
            View All <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        <div className="space-y-4">
          {leaderboard.map((player, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    {player.avatar}
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 text-xs font-bold">
                      #{player.rank}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{player.name}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-20 bg-gray-200 rounded-full h-1.5 mr-2">
                      <div 
                        className="bg-yellow-500 h-1.5 rounded-full" 
                        style={{ width: `${player.progress}%` }}
                      ></div>
                    </div>
                    <span>Level {Math.floor(player.progress / 10)}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                <span className="font-semibold">{player.points}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Game Categories */}
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Game Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Budgeting", icon: <PiggyBank className="w-6 h-6" />, color: "bg-blue-100 text-blue-600" },
            { name: "Investing", icon: <TrendingUp className="w-6 h-6" />, color: "bg-green-100 text-green-600" },
            { name: "Banking", icon: <Wallet className="w-6 h-6" />, color: "bg-purple-100 text-purple-600" },
            { name: "Entrepreneurship", icon: <Award className="w-6 h-6" />, color: "bg-yellow-100 text-yellow-600" }
          ].map((category, index) => (
            <div key={index} className={`p-4 rounded-lg ${category.color} hover:opacity-90 transition-opacity cursor-pointer`}>
              <div className="flex items-center">
                <div className="p-2 bg-white rounded-lg mr-3">
                  {category.icon}
                </div>
                <h3 className="font-medium">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameCenter;