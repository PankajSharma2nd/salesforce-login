import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TrialFeatures() {
  return (
    <div className="px-16 py-16 h-full flex flex-col justify-between">
      <div>
        <h1 className="text-[44px] font-bold text-[#032D60] leading-[52px] mb-12">
          Start your free trial. No credit card required, no software to install.
        </h1>

        <div className="text-[18px]">
          <h2 className="font-medium mb-6">With your trial, you get:</h2>
          <div className="space-y-4">
            {[
              "Preloaded data or upload your own",
              "Preconfigured processes, reports, and dashboards",
              "Guided experiences for sales reps, leaders, and administrators",
              "Online training and live onboarding webinars",
            ].map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="mt-1.5 mr-3 rounded-full bg-[#0176D3] p-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="leading-normal">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <Button className="bg-[#0176D3] hover:bg-[#0176D3]/90 text-white text-[18px] h-[52px] px-8 font-normal rounded">
          Start my free trial
        </Button>
      </div>
    </div>
  )
}

