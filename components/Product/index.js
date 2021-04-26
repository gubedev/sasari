import React from "react"

const Product = ( { product }) => {

  return (
    <>
      <div className="product-item-1/4 pr-1">
        <div className="product__picture">
          <img src={`${process.env.PICTURE_URL}/1.jpeg`} />
        </div>
        <div className="product__content">
          <p className="product__content__description">
            {product.description}
          </p>
          <p className="product__content__price">
            ARS {product.price}
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

        `}
      </style>
    </>
  )
}

export default Product
