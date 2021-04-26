import React from "react"

const Breadcrumb = ( {section, category} ) => {
  return (
    <>
      <ol className="breadcrumb p-4">
        <li className="breadcrumb-item">
          <a href="javascript:void(0);">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="javascript:void(0);">{section}</a>
        </li>
        <li className="breadcrumb-item">
          <a href="javascript:void(0);">{category}</a>
        </li>
      </ol>
    </>
  )
}

export default Breadcrumb
