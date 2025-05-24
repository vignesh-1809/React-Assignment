"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface UserData {
  fullName: string
  phoneNumber: string
  email: string
  password: string
  companyName: string
  isAgency: boolean
}

export default function WelcomeScreen() {
  const [currentScreen, setCurrentScreen] = useState("welcome")
  const [userData, setUserData] = useState<UserData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: true,
  })

  if (currentScreen === "signin") {
    return (
      <SignInScreen onBack={() => setCurrentScreen("welcome")} onCreateAccount={() => setCurrentScreen("signup")} />
    )
  }

  if (currentScreen === "signup") {
    return (
      <SignUpScreen
        onBack={() => setCurrentScreen("welcome")}
        onSuccess={() => setCurrentScreen("settings")}
        userData={userData}
        setUserData={setUserData}
      />
    )
  }

  if (currentScreen === "settings") {
    return <AccountSettingsScreen onBack={() => setCurrentScreen("welcome")} userData={userData} />
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <Card className="bg-white shadow-lg border-0 rounded-3xl overflow-hidden">
          <CardContent className="p-8 pt-20 pb-12 text-center space-y-8">
            {/* Large spacing at top to match design */}
            <div className="h-32"></div>

            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-gray-900">Welcome to PopX</h1>
              <p className="text-gray-500 text-sm leading-relaxed px-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="space-y-4 pt-8">
              <Button
                onClick={() => setCurrentScreen("signup")}
                className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl text-base"
              >
                Create Account
              </Button>

              <Button
                onClick={() => setCurrentScreen("signin")}
                variant="outline"
                className="w-full h-12 bg-purple-100 border-purple-200 text-purple-700 hover:bg-purple-200 font-medium rounded-xl text-base"
              >
                Already Registered? Login
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function SignInScreen({ onBack, onCreateAccount }: { onBack: () => void; onCreateAccount: () => void }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <Card className="bg-white shadow-lg border-0 rounded-3xl overflow-hidden">
          <CardContent className="p-8 pt-12 pb-12 space-y-8">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                Signin to your
                <br />
                PopX account
              </h1>
              <p className="text-gray-500 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-purple-600">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-purple-600">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="pt-4">
              <Button className="w-full h-12 bg-gray-400 hover:bg-gray-500 text-white font-medium rounded-xl text-base">
                Login
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function SignUpScreen({
  onBack,
  onSuccess,
  userData,
  setUserData,
}: {
  onBack: () => void
  onSuccess: () => void
  userData: UserData
  setUserData: (data: UserData) => void
}) {
  const handleInputChange = (field: keyof UserData, value: string | boolean) => {
    setUserData({
      ...userData,
      [field]: value,
    })
  }

  const handleSubmit = () => {
    // Basic validation - ensure required fields are filled
    if (userData.fullName && userData.phoneNumber && userData.email && userData.password) {
      onSuccess()
    } else {
      alert("Please fill in all required fields")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <Card className="bg-white shadow-lg border-0 rounded-3xl overflow-hidden">
          <CardContent className="p-8 pt-12 pb-12 space-y-6">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                Create your
                <br />
                PopX account
              </h1>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-purple-600">Full Name*</label>
                <input
                  type="text"
                  value={userData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-purple-600">Phone number*</label>
                <input
                  type="tel"
                  value={userData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-purple-600">Email address*</label>
                <input
                  type="email"
                  value={userData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-purple-600">Password*</label>
                <input
                  type="password"
                  value={userData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  placeholder="Enter your password"
                  className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-purple-600">Company name</label>
                <input
                  type="text"
                  value={userData.companyName}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                  placeholder="Enter your company name"
                  className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                />
              </div>

              <div className="space-y-3 pt-2">
                <label className="text-sm font-medium text-gray-700">Are you an Agency?*</label>
                <div className="flex items-center space-x-6">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="agency"
                      value="yes"
                      checked={userData.isAgency === true}
                      onChange={() => handleInputChange("isAgency", true)}
                      className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="agency"
                      value="no"
                      checked={userData.isAgency === false}
                      onChange={() => handleInputChange("isAgency", false)}
                      className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-700">No</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button
                onClick={handleSubmit}
                className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl text-base"
              >
                Create Account
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function AccountSettingsScreen({ onBack, userData }: { onBack: () => void; userData: UserData }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <Card className="bg-white shadow-lg border-0 rounded-3xl overflow-hidden">
          <CardContent className="p-8 pt-12 pb-12 space-y-8">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Account Settings</h1>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    {userData.fullName ? (
                      <span className="text-2xl font-semibold text-gray-600">
                        {userData.fullName
                          .split(" ")
                          .map((name) => name[0])
                          .join("")
                          .toUpperCase()}
                      </span>
                    ) : (
                      <img
                        src="/placeholder.svg?height=64&width=64"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-600 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-900">{userData.fullName || "User Name"}</h2>
                  <p className="text-sm text-gray-600">{userData.email || "user@email.com"}</p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {userData.companyName ? (
                    <>
                      Company: {userData.companyName}
                      <br />
                      Phone: {userData.phoneNumber}
                      <br />
                      Agency: {userData.isAgency ? "Yes" : "No"}
                    </>
                  ) : (
                    "Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam"
                  )}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
