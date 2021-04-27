import React from "react"
import { colors } from "styles/theme"

const Product = ( { product, isShowingOff = false }) => {
  return (
    <>
      <div className="product-item-1/4 pr-1">
      { (isShowingOff===true) && (
        <div 
            className="d-flex flex-column justify-content-center align-items-center rounded-circle position-absolute m-4 off-label p-0 p-2">
          <strong>30 %</strong>
          <small>Off</small>
        </div>
      )}
        <div className="product__picture">
          <img src={`${process.env.PICTURE_URL}/${product.id}.jpeg`} />
        </div>
        <div className="product__content">
          <p className="product__content__description">
            {product.description}
          </p>
          <p className="product__content__price">
            { (isShowingOff===true) && (
              <span className="product__content__price__off">
                <del>ARS {product.price}</del>
              </span>
            ) }
            <span className="pl-2">ARS {product.price}</span>
          </p>
        </div>
      </div>
      <style jsx>
        {`
          img {
            height: auto;
            max-width: 100%;
            vertical-align: middle;
          }

          .product {
            background-color: white;
            border-radius: 0.25rem;
            box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
            display: flex;
            flex-direction: column;
            overflow: hidden;
          }

          .product__content {
            padding: 1rem;
          }

          .product__content__description {
            font-size: 24px;
            font-weight: 400;
            text-align: center;
            text-transform: uppercase;
          }

          .product__content__price {
            font-size: 24px;
            font-weight: bold;
            text-align: center;
          }

          .product__content__price__off {
            font-size: 24px;
            font-weight: normal;
            text-align: center;
          }

          .off-label {
            background-color: ${colors.primary};
            color:white;
            width: 82px;
            height: 82px;
          }

        `}
      </style>
    </>
  )
}

export default Product
