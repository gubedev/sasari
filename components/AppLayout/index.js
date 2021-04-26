import { globalStyles } from "./styles"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../Navbar"
import Newsletter from "components/Newsletter"
import Footer from "components/Footer"

export default function AppLayout({ children }) {
  return (
    <>
      <main>
        <Navbar />
        {children}
      </main>
      <Newsletter />
      <Footer />
      <style jsx global>
        {globalStyles}
      </style>
    </>
  )
}
