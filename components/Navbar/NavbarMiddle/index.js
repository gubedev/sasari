import React from "react"
import { colors, layout } from "styles/theme"
import FeatherIcon from "feather-icons-react"
import logo from "../../../assets/media/img/logo.png"

const NavbarMiddle = () => {
  return (
    <>
      <nav 
        className="navbar navbar-custom navbar-expand d-none d-sm-none d-md-none d-lg-flex flex-row justify-content-between">
        <div 
          className="d-flex flex-row justify-content-between align-items-center w-100">
          <div></div>
          <div>
            <img src={logo} alt="sasari" />
          </div>
          <div 
            className="searh-box d-flex flex-column justify-content-end p-4"
          >
            <FeatherIcon 
              icon="search" 
              className="text-white"
            />
          </div>
        </div>
      </nav>
      <style jsx>{`
        .navbar-custom {
          background-color: ${colors.primary};
          height: ${layout.navbarMiddleHeight};
        }
        img {
          width: 500px;
        }
        .searh-box {
          height: ${layout.navbarMiddleHeight};
        }
      `}</style>
    </>
  )
}

export default NavbarMiddle
