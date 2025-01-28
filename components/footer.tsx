import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="mt-8 text-center text-xs text-gray-600">
      © {currentYear} Salesforce, Inc. All rights reserved. |
      <Link href="#" className="text-[#0176D3] hover:underline ml-1">
        Privacy
      </Link>
    </div>
  )
}

