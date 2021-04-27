import React from "react"

const Breadcrumb = ( {section, category} ) => {
  return (
    <>
      <ol className="breadcrumb p-4">
        <li className="breadcrumb-item">
          <a className="text-gray">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a className="text-gray">{section}</a>
        </li>
        {category && (
          <li className="breadcrumb-item">
            <a className="text-gray">{category}</a>
          </li>
        ) }
      </ol>
    </>
  )
}

export default Breadcrumb
