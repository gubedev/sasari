import { globalStyles } from "./styles"
import Navbar from "components/Navbar"
import Newsletter from "components/Newsletter"
import Footer from "components/Footer"
import Sidebar from "components/Sidebar"
import { LayoutContextProvider } from "context/Layout"
import "bootstrap/dist/css/bootstrap.min.css"

export default function AppLayout({ children }) {
  return (
    <>
      <LayoutContextProvider>
        <main className="wrapper">
          <Navbar />
          <Sidebar />
          {children}
        </main>
        <Newsletter />
        <Footer />
        <style jsx global>
          {globalStyles}
        </style>
      </LayoutContextProvider>
    </>
  )
}
