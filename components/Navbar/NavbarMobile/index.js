import React from "react"
import { colors } from "styles/theme"
import FeatherIcon from "feather-icons-react"

const NavbarMobile = () => {
  return (
    <>
      <nav className="navbar navbar-custom navbar-expand fixed-top d-flex flex-row justify-content-between d-block d-lg-none">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div className="p-2">
            <div className="d-block d-lg-none cursor-pointer">
              <FeatherIcon icon="menu" />
            </div>
          </div>
        </div>
        <div className="py-2">
          Sasari
        </div>
        <div className="d-flex flex-row justify-content-between align-items-center"></div>
      </nav>
      <style jsx>{`
        .navbar-custom {
          background-color: ${colors.primary};
        }
      `}</style>
    </>
  )
}

export default NavbarMobile
