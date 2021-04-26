import React from "react"
import { layout } from "styles/theme"
import NavLinks from "../NavLinks"

const StickyWrapper = () => {
  return (
    <>
      <div className="sticky-wrapper d-none d-sm-none d-md-none d-lg-flex justify-content-center align-items-center bg-black">
        <NavLinks />
      </div>
      <style jsx>{`
        .sticky-wrapper {
          height: ${layout.stickyWrapperHeight};
        }
      `}</style>
    </>
  )
}

export default StickyWrapper
