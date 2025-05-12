// app/layout.js
import '../styles/globals.css'

export const metadata = {
  title: 'CoolSite',
  description: 'A sleek Next.js + Tailwind template',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

