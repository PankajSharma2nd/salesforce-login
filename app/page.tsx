import Link from "next/link"
import { Logo } from "@/components/ui/logo"
import { LoginForm } from "@/components/auth/login-form"
import { TrialFeatures } from "@/components/auth/trial-features"
import { WaveDecoration } from "@/components/auth/wave-decoration"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Column - Login */}
      <div className="w-1/2 px-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-[360px]">
          <Logo />
          <LoginForm />

          <div className="mt-12 text-center">
            <span className="text-[13px] text-gray-600">Not a customer? </span>
            <Link href="#" className="text-[13px] text-[#0176D3] hover:underline">
              Try for Free
            </Link>
          </div>

          <div className="mt-12 text-[11px] text-center text-gray-600">
            © 2025 Salesforce, Inc. All rights reserved. |
            <Link href="#" className="text-[#0176D3] hover:underline ml-1">
              Privacy
            </Link>
          </div>
        </div>
      </div>

      {/* Right Column - Trial Features */}
      <div className="w-1/2 bg-gradient-to-b from-white to-[#F0F8FF] relative overflow-hidden">
        <TrialFeatures />
        <WaveDecoration />
      </div>
    </div>
  )
}

