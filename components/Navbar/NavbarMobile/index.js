import React from "react"
import { colors, layout } from "styles/theme"
import FeatherIcon from "feather-icons-react"
import logo from "../../../assets/media/img/logo.png"
import LayoutContext from "context/Layout"

const NavbarMobile = () => {
  const { isShowingSidebar, setIsShowingSidebar } = React.useContext(LayoutContext)
  const toogleMenuIcon = isShowingSidebar === true ? "x": "menu"

  return (
    <>
      <nav className="navbar navbar-custom navbar-expand fixed-top d-flex flex-row justify-content-between d-block d-lg-none">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div className="p-2">
            <div className="d-block d-lg-none cursor-pointer">
              <FeatherIcon 
                icon={toogleMenuIcon} 
                onClick={() => setIsShowingSidebar(!isShowingSidebar)} 
              />
            </div>
          </div>
        </div>
        <div className="py-2">
          <img src={logo} alt="sasari" />
        </div>
        <div className="d-flex flex-row justify-content-between align-items-center">
            <FeatherIcon 
              icon="search" 
            />
        </div>
      </nav>
      <style jsx>{`
        .navbar-custom {
          background-color: ${colors.primary};
          height: ${layout.navbarMobileHeight};
        }
        img {
          height: ${layout.navbarMobileHeight};
        }
      `}</style>
    </>
  )
}

export default NavbarMobile
