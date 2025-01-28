import Image from 'next/image'

export function Logo() {
  return (
    <div className="pt-20 pb-10 flex justify-center pl-8">
      <Image
        src="/logo.png"
        alt="Salesforce Logo"
        width={160}
        height={112}
        className="w-[160px] h-auto"
        priority
      />
    </div>
  )
}
