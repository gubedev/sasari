import { useEffect, useState } from "react"
import Head from "next/head"
import AppLayout from "components/AppLayout"
import Breadcrumb from "components/Breadcrumb"
import { fetchProductsInOff } from "../api"
import ProductList from "components/ProductList"
import Loading from "components/Loading"

export default function Sales() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetchProductsInOff()
      .then( (response) => { 
        setProducts(response) 
        setIsLoading(false)
      } )
  }, [])
  
  return (
    <>
      <Head>
        <title>Sasari</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <div className="container min-vh-100 pb-8 page-content">
          <Breadcrumb 
              section={"Sale"}
          />

          {isLoading ? <Loading/> : 
            (products &&  
              <ProductList
                products={products}
                isShowingOff={true}
              />)
          }

        </div>
      </AppLayout>
    </>
  )
}
