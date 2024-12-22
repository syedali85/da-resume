import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] w-full">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white">
        <p className="text-2xl font-light">Hello, I am</p>
        <h1 className="mt-4 text-6xl font-bold tracking-tight sm:text-7xl">
          Mohammed Ali Syed
        </h1>
        <p className="mt-4 text-2xl">Data Solution Architect</p>
      </div>
      <Image
        src="/logo/data.png" // Path to your image
        alt="Data Visualization" // Alt text for accessibility
        fill // Use fill for responsive images
        style={{ objectFit: 'cover' }} // Use style prop for object fit
        className="object-cover" // Optional: add any additional classes
      />
    </div>
  )
}

