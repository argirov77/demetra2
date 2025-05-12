// app/layout.js
import '../styles/globals.css'

export const metadata = {
  title: 'ISHTAR affiliate marketing',
  description: 'A high-quality affiliate marketing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

