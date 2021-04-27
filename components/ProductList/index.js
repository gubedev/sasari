import React from "react"
import Product from "components/Product"

const ProductList = ({ products, isShowingOff }) => {
  return (
    <>
      <ul className="product-list list-unstyled d-flex flex-wrap p-0">
        {products.map((product) => {
          return <li key={product.id} 
                    className="product-item"
                  >
                  <Product 
                    product={product}
                    isShowingOff={isShowingOff}
                  />
                </li>
        })}
      </ul>

      <style jsx> {`
        .product-item,
        .product-item-1/4,
        .product-item-1/5 {
          display: flex;
          padding: 1rem;
        }
        
        @media screen and (min-width: 480px) {
          .product-item,
          .product-item-1/4,
          .product-item-1/5 {
            width: 50%;
          }
        }
        
        @media screen and (min-width: 920px) {
          .product-item {
            width: 33.3333%;
          }
          .product-item-1/4 {
            width: 22%;
            margin: 10px;
          }
          .product-item-1/5 {
            width: 18%;
            margin: 10px;
          }
        }
       `
      }
      </style>
    </>
  )
}

export default ProductList
