import {
  User,
  Settings,
  BookOpen,
  Camera,
  Coffee,
  Palette,
  Rocket,
  Heart,
  Star,
  Zap,
  Globe,
  Code,
  Mountain,
} from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Navigation Hub
          </h1>
          <p className="text-gray-600 text-lg">Choose your adventure</p>
        </div>

        {/* Main Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Featured Links */}
          <a
            href="/users"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl block"
          >
            <div className="flex items-center space-x-3">
              <User className="h-8 w-8" />
              <div>
                <h3 className="text-xl font-semibold">Users</h3>
                <p className="text-blue-100">Manage all users</p>
              </div>
            </div>
            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-white/10"></div>
          </a>

          <a
            href="/jokes"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 p-6 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl block"
          >
            <div className="flex items-center space-x-3">
              <Heart className="h-8 w-8" />
              <div>
                <h3 className="text-xl font-semibold">Jokes</h3>
                <p className="text-yellow-100">Laugh out loud</p>
              </div>
            </div>
            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-white/10"></div>
          </a>

          <a
            href="/settings"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl block"
          >
            <div className="flex items-center space-x-3">
              <Settings className="h-8 w-8" />
              <div>
                <h3 className="text-xl font-semibold">Settings</h3>
                <p className="text-orange-100">Customize everything</p>
              </div>
            </div>
            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-white/10"></div>
          </a>
        </div>

        {/* Creative Link Sections */}
        <div className="space-y-8">
          {/* Pill-style Links */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Access</h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="/users"
                className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-all duration-200 hover:bg-blue-50 border border-blue-100"
              >
                <User className="h-5 w-5 text-blue-600" />
                <span className="font-medium text-gray-700">Users</span>
              </a>
              <a
                href="/jokes"
                className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-all duration-200 hover:bg-yellow-50 border border-yellow-100"
              >
                <Heart className="h-5 w-5 text-yellow-600" />
                <span className="font-medium text-gray-700">Jokes</span>
              </a>
              <a
                href="/blog"
                className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-all duration-200 hover:bg-green-50 border border-green-100"
              >
                <BookOpen className="h-5 w-5 text-green-600" />
                <span className="font-medium text-gray-700">Blog</span>
              </a>
              <a
                href="/gallery"
                className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-all duration-200 hover:bg-pink-50 border border-pink-100"
              >
                <Camera className="h-5 w-5 text-pink-600" />
                <span className="font-medium text-gray-700">Gallery</span>
              </a>
            </div>
          </div>

          {/* Card-style Links */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Explore</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a
                href="/cafe"
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 text-center group block"
              >
                <Coffee className="h-8 w-8 text-amber-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-gray-700">Café</span>
              </a>
              <a
                href="/art"
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 text-center group block"
              >
                <Palette className="h-8 w-8 text-indigo-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-gray-700">Art Studio</span>
              </a>
              <a
                href="/launch"
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 text-center group block"
              >
                <Rocket className="h-8 w-8 text-red-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-gray-700">Launch Pad</span>
              </a>
              <a
                href="/favorites"
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 text-center group block"
              >
                <Heart className="h-8 w-8 text-rose-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-gray-700">Favorites</span>
              </a>
            </div>
          </div>

          {/* Minimal Links */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">More Pages</h2>
            <div className="space-y-2">
              <a
                href="/reviews"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/50 transition-colors group"
              >
                <Star className="h-5 w-5 text-yellow-500 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700 group-hover:text-gray-900">Reviews & Ratings</span>
              </a>
              <a
                href="/energy"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/50 transition-colors group"
              >
                <Zap className="h-5 w-5 text-yellow-600 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700 group-hover:text-gray-900">Energy Dashboard</span>
              </a>
              <a
                href="/world"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/50 transition-colors group"
              >
                <Globe className="h-5 w-5 text-blue-500 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700 group-hover:text-gray-900">World Explorer</span>
              </a>
              <a
                href="/code"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/50 transition-colors group"
              >
                <Code className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700 group-hover:text-gray-900">Code Playground</span>
              </a>
              <a
                href="/adventure"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/50 transition-colors group"
              >
                <Mountain className="h-5 w-5 text-slate-600 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700 group-hover:text-gray-900">Adventure Log</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-500">
          <p>Ready to explore? Pick any link above to begin your journey.</p>
        </div>
      </div>
    </div>
  )
}
