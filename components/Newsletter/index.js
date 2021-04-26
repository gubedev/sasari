import React from "react"

const Newsletter = () => {
  return (
    <>
      <div className="container-fluid newsletter bg-black">
        <div className="container d-flex align-items-center justify-content-center h-100">
          <div className="row d-flex align-items-center justify-content-between h-100 w-100">
            <div className="col-md-6">
              <span className="font-weight-bold text-white text-24">SUBSCRIBITE A LAS NOVEDADES</span>
            </div>
            <div className="col-md-6">
              <input className="form-control" />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .newsletter {
          padding: 4em;
        }
      `}</style>
    </>
  )
}

export default Newsletter
