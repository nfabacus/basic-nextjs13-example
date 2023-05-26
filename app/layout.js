import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nextjs 13 App',
  description: 'This is an example nexjs 13 app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div>
        <div className="px-6 py-3">
          <Link className="px-2 mr-2 border" href="/">Home</Link>
          <Link className="px-2 mr-2 border" href="/about">About</Link>
          <Link className="px-2 mr-2 border" href="/blog/123">Blog 123</Link>
        </div>
        <main className="p-6">
          {children}
        </main>
      </div>
      </body>
    </html>
  )
}
