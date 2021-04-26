import React from "react"
import NavbarMobile from "./NavbarMobile"
import NavbarMiddle from "./NavbarMiddle"
import StickyWrapper from "./StickyWrapper"

const Navbar = () => {
  return (
    <>
      <NavbarMobile />
      <NavbarMiddle />
      <StickyWrapper />
    </>
  )
}

export default Navbar
