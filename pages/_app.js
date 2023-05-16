import '@/styles/globals.scss'
import Layout from '@/components/Layout.jsx'
import { League_Spartan } from '@next/font/google'

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={leagueSpartan.className}>
        <Component {...pageProps} />
    </main>

  )
}
