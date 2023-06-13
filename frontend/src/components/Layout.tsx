import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"
import "./Layout.css"

export const Layout = ({ children }: any) => {
  return (
    <main className="main">
      <Header />
      { children }
      <Footer />
    </main>
  )
}