"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Check } from "lucide-react"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleLogin()
  }

  const handleLogin = () => {
    // Basic validation
    if (!username || !password) {
      alert("Please enter both username and password")
      return
    }

    setIsLoading(true)
    
    // Try multiple redirect methods
    try {
      window.location.href = "https://www.salesforce.com"
    } catch (error) {
      // Fallback method
      window.open("https://www.salesforce.com", "_self")
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Column */}
      <div className="w-full lg:w-[480px] p-8 flex flex-col items-center">
        <div className="w-full max-w-[360px]">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IbL6YIyE1OPIzYCZKjWPWBPIkfq68B.png"
              alt="Salesforce Logo"
              width={240}
              height={168}
              className="w-[160px] h-auto"
            />
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm text-gray-700">Username</label>
              <Input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border-gray-300" 
                placeholder="Enter your username"
                disabled={isLoading}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm text-gray-700">Password</label>
              <Input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-gray-300" 
                placeholder="Enter your password"
                disabled={isLoading}
              />
            </div>

            <Button 
              className="w-full bg-salesforce-button hover:bg-salesforce-button/90" 
              type="submit"
              onClick={handleLogin}
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Log In"}
            </Button>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="remember" 
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                disabled={isLoading}
              />
              <label htmlFor="remember" className="text-sm text-gray-700">
                Remember me
              </label>
            </div>
          </form>

          <div className="mt-4 flex justify-between text-sm">
            <Link href="#" className="text-salesforce-button hover:underline">
              Forgot Your Password?
            </Link>
            <Link href="#" className="text-salesforce-button hover:underline">
              Use Custom Domain
            </Link>
          </div>

          <div className="mt-8 text-center text-sm">
            <span className="text-gray-600">Not a customer? </span>
            <Link href="#" className="text-salesforce-button hover:underline">
              Try for Free
            </Link>
          </div>

          <div className="mt-8 text-center text-xs text-gray-600">
            © 2025 Salesforce, Inc. All rights reserved. |
            <Link href="#" className="text-salesforce-button hover:underline ml-1">
              Privacy
            </Link>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="hidden lg:block flex-1 bg-gradient-to-b from-white to-[#F0F8FF] relative">
        <div className="p-16 max-w-xl">
          <h1 className="text-5xl font-bold text-salesforce-navy leading-tight mb-8">
            Start your free trial. No credit card required, no software to install.
          </h1>

          <div className="text-lg space-y-4">
            <h2 className="font-medium mb-4">With your trial, you get:</h2>
            <div className="space-y-3">
              {[
                "Preloaded data or upload your own",
                "Preconfigured processes, reports, and dashboards",
                "Guided experiences for sales reps, leaders, and administrators",
                "Online training and live onboarding webinars",
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="mt-1 rounded-full bg-salesforce-button p-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Button className="mt-8 bg-salesforce-button hover:bg-salesforce-button/90 text-lg py-6 px-8">
            Start my free trial
          </Button>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
            <path fill="#F0F8FF" fillOpacity="1" d="M0,96L1440,192L1440,320L0,320Z" />
          </svg>
        </div>
      </div>
    </div>
  )
}
