import { Navbar } from '../components/Navbar'
import '../styles/globals.css'
import { Projects } from './projects'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar />
<Component {...pageProps} />
</>
  )
  
}
