"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Bell, Search, Plus, TrendingUp, Users, Calendar, MoreVertical, Home, User, Settings } from "lucide-react"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home")

  const stats = [
    { label: "Total Users", value: "2,847", change: "+12%", icon: Users },
    { label: "Revenue", value: "$45,231", change: "+8%", icon: TrendingUp },
    { label: "Events", value: "23", change: "+3%", icon: Calendar },
  ]

  const recentActivity = [
    { user: "John Doe", action: "completed a task", time: "2 min ago", avatar: "/placeholder.svg" },
    { user: "Sarah Wilson", action: "joined the team", time: "1 hour ago", avatar: "/placeholder.svg" },
    { user: "Mike Johnson", action: "updated profile", time: "3 hours ago", avatar: "/placeholder.svg" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-sm mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">Good morning!</h1>
                <p className="text-sm text-gray-600">John Doe</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
                  3
                </Badge>
              </Button>
              <Button variant="ghost" size="icon">
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-sm mx-auto px-4 py-6 space-y-6">
        {/* Quick Actions */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Plus className="w-6 h-6" />
                <span className="text-sm">Add Task</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Users className="w-6 h-6" />
                <span className="text-sm">Team</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="space-y-3">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <stat.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="text-xl font-semibold">{stat.value}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-green-600 bg-green-100">
                    {stat.change}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={activity.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {activity.user
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t shadow-lg">
        <div className="flex items-center justify-around py-2">
          {[
            { icon: Home, label: "Home", id: "home" },
            { icon: User, label: "Profile", id: "profile" },
            { icon: Settings, label: "Settings", id: "settings" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors ${
                activeTab === item.id ? "text-blue-600 bg-blue-50" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}
