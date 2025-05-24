"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Edit, Mail, Phone, MapPin, Calendar, Award, Star } from "lucide-react"

export default function Profile() {
  const achievements = [
    { title: "Early Adopter", description: "Joined in the first month", icon: Award },
    { title: "Top Contributor", description: "Most active user this month", icon: Star },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-sm mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-lg font-semibold">Profile</h1>
            <Button variant="ghost" size="icon">
              <Edit className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Profile Content */}
      <main className="max-w-sm mx-auto px-4 py-6 space-y-6">
        {/* Profile Header */}
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <Avatar className="w-24 h-24 mx-auto">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="text-2xl">JD</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold">John Doe</h2>
                <p className="text-gray-600">Product Designer</p>
                <Badge className="mt-2 bg-green-100 text-green-800">Active</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <div>
                <p className="font-medium">john.doe@example.com</p>
                <p className="text-sm text-gray-600">Email</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <div>
                <p className="font-medium">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-600">Phone</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <div>
                <p className="font-medium">San Francisco, CA</p>
                <p className="text-sm text-gray-600">Location</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-gray-400" />
              <div>
                <p className="font-medium">January 15, 2023</p>
                <p className="text-sm text-gray-600">Joined</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Achievements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <achievement.icon className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium">{achievement.title}</p>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="space-y-3 pb-20">
          <Button className="w-full" variant="outline">
            Edit Profile
          </Button>
          <Button className="w-full" variant="outline">
            Settings
          </Button>
          <Button className="w-full" variant="destructive">
            Sign Out
          </Button>
        </div>
      </main>
    </div>
  )
}
