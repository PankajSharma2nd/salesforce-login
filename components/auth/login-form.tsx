"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import type { LoginFormData } from "@/types/auth"

export function LoginForm() {
  const [formData, setFormData] = useState<LoginFormData>({
    username: "",
    password: "",
    remember: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt:", formData)
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-[13px] text-gray-700 font-normal" htmlFor="username">
            Username
          </label>
          <Input
            id="username"
            type="text"
            className="h-[42px] border-gray-300 rounded-[4px]"
            value={formData.username}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                username: e.target.value,
              }))
            }
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-[13px] text-gray-700 font-normal" htmlFor="password">
            Password
          </label>
          <Input
            id="password"
            type="password"
            className="h-[42px] border-gray-300 rounded-[4px]"
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full h-[42px] bg-[#0176D3] hover:bg-[#0176D3]/90 text-white font-normal text-[16px]"
        >
          Log In
        </Button>

        <div className="flex items-center pt-1">
          <Checkbox
            id="remember"
            className="h-[18px] w-[18px] border-gray-400 rounded-[3px]"
            checked={formData.remember}
            onCheckedChange={(checked) =>
              setFormData((prev) => ({
                ...prev,
                remember: checked as boolean,
              }))
            }
          />
          <label htmlFor="remember" className="ml-2 text-[13px] text-gray-700 cursor-pointer">
            Remember me
          </label>
        </div>
      </form>

      <div className="mt-6 flex justify-between text-[13px]">
        <Link href="#" className="text-[#0176D3] hover:underline">
          Forgot Your Password?
        </Link>
        <Link href="#" className="text-[#0176D3] hover:underline">
          Use Custom Domain
        </Link>
      </div>
    </div>
  )
}

