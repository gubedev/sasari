import React from "react"

const Loading = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center p-4"
      >
        <strong>Cargando ...</strong>
        <div
          className="spinner-border ml-4"
        >
        </div>
      </div>
    </>
  )
}

export default Loading
