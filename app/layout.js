
import './globals.css'

export const metadata = {
  title: 'Next Weather App',
  description: 'Gets weather data',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
