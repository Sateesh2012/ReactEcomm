import Footer from "../Footer/Footer"
import Navbar from "../NAvbar/Navbar"


const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      <div className="main-container min-h-screen">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
