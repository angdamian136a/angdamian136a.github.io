import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "./components/navbar"
import Footer from "./components/footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Personal Website',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-600 text-slate-50 font-sans text-base md:text-xl leading-8 lg:leading-loose">
        <Navbar />
        <div className="flex justify-end mx-5 mt-2">
          <h1 className="font-mono font-medium">Ang Guan Ghee, Damian</h1>
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
// {inter.className}