import { useEffect, useState } from "react"
import Head from "next/head"
import AppLayout from "components/AppLayout"
import Breadcrumb from "components/Breadcrumb"
import { useRouter } from "next/router"
import { fetchProducts } from "api"
import ProductList from "components/ProductList"
import Loading from "components/Loading"

export default function Accesorios() {
  const router = useRouter()
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const category = router.query.keyword
  
  useEffect(() => {
    setIsLoading(true)
    fetchProducts(router.query.keyword)
      .then( (response) => { 
        setProducts(response) 
        setIsLoading(false)
      } )
  }, [router.query.keyword])

  return (
    <>
      <Head>
        <title>Sasari</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <div className="container min-vh-100 pb-8 page-content">
          <Breadcrumb 
            section={"Accesorios"}
            category={category}
          />
          {isLoading ? <Loading/> : 
            (products &&  
              <ProductList
                products={products}
              />)
          }
        </div>
      </AppLayout>
    </>
  )
}
