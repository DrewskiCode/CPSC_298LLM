import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bird, CheckSquare, PlusCircle, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"



export default function LandingPage() {
  // State to manage the email input for sign up
  const [email, setEmail] = useState("")

  // Function to handle the email input change
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Here you can add functionality to send the email to your server
    alert(`Sign-up initiated for: ${email}`)
    setEmail("") // Clear the input after submission
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-100 to-green-200">
      <header className="w-full py-4 px-6 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-green-700">RanchTracker</Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="#features" className="text-green-700 hover:text-green-500">Features</Link>
            <Link href="#pricing" className="text-green-700 hover:text-green-500">Pricing</Link>
            <Link href="#contact" className="text-green-700 hover:text-green-500">Contact</Link>
          </nav>
          <Button variant="outline" className="md:hidden"><Menu className="h-6 w-6" /></Button>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-4">Manage Your Ranch with Ease</h1>
          <p className="text-xl text-green-700 mb-8">Track pets, manage tasks, and keep your ranch running smoothly</p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white">Get Started</Button>
            <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-100">Learn More</Button>
          </div>
        </section>

        <section id="features" className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <PlusCircle className="h-12 w-12 text-green-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Add Pets</h2>
            <p className="text-gray-600">Easily add and manage all your ranch animals in one place.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <CheckSquare className="h-12 w-12 text-green-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Track Tasks</h2>
            <p className="text-gray-600">Create and manage tasks to keep your ranch running efficiently.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <svg className="h-12 w-12 text-green-600 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="12" rx="2" ry="2" />
              <line x1="3" y1="16" x2="21" y2="16" />
              <path d="M8 20L16 20" />
              <circle cx="12" cy="10" r="2" />
            </svg>
            <h2 className="text-2xl font-semibold mb-2">Digital Ranch</h2>
            <p className="text-gray-600">Visualize your ranch and animals with our interactive digital display.</p>
          </div>
        </section>

        <section className="relative h-96 bg-green-300 rounded-lg overflow-hidden mb-16">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect x="0" y="70" width="100" height="30" fill="#8B4513" />
            <circle cx="20" cy="75" r="5" fill="#8B4513" />
            <circle cx="40" cy="72" r="4" fill="#8B4513" />
            <circle cx="60" cy="78" r="6" fill="#8B4513" />
            <circle cx="80" cy="74" r="5" fill="#8B4513" />
            {/* Custom Cow SVG */}
            <svg x="10" y="60" width="16" height="16" viewBox="0 0 100 100">
              <rect x="10" y="30" width="80" height="50" rx="10" fill="#4A4A4A" />
              <circle cx="25" cy="75" r="8" fill="#4A4A4A" />
              <circle cx="75" cy="75" r="8" fill="#4A4A4A" />
              <rect x="20" y="20" width="60" height="30" rx="15" fill="#4A4A4A" />
              <circle cx="35" cy="35" r="5" fill="#FFFFFF" />
              <circle cx="65" cy="35" r="5" fill="#FFFFFF" />
              <path d="M40 50 Q50 60 60 50" fill="none" stroke="#FFFFFF" strokeWidth="2" />
            </svg>
            {/* Custom Pig SVG */}
            <svg x="30" y="65" width="12" height="12" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="#FFC0CB" />
              <circle cx="35" cy="40" r="5" fill="#000" />
              <circle cx="65" cy="40" r="5" fill="#000" />
              <ellipse cx="50" cy="65" rx="10" ry="5" fill="#FF9999" />
            </svg>
            <Bird className="absolute h-10 w-10 text-yellow-600" style={{ top: '70%', left: '50%' }} />
            <rect x="70" y="40" width="20" height="30" fill="#8B4513" />
            <rect x="75" y="30" width="10" height="10" fill="#A52A2A" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Your Digital Ranch Awaits</h2>
              <p className="text-green-700 mb-4">Sign up now to start managing your ranch effortlessly</p>
              <form onSubmit={handleSubmit} className="flex space-x-4">
                <Input 
                  value={email}
                  onChange={handleEmailChange} // Handle input change
                  placeholder="Enter your email" 
                  className="flex-grow" 
                />
                <Button className="bg-green-600 hover:bg-green-700 text-white">Sign Up</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">RanchTracker</h2>
              <p>Simplifying ranch management</p>
            </div>
            <nav className="flex space-x-4">
              <Link href="#" className="hover:text-green-300">Privacy Policy</Link>
              <Link href="#" className="hover:text-green-300">Terms of Service</Link>
              <Link href="#" className="hover:text-green-300">Contact</Link>
            </nav>
          </div>
          <div className="mt-8 text-center text-sm">
            © {new Date().getFullYear()} RanchTracker. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
