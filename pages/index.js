import Head from "next/head"
import AppLayout from "components/AppLayout"
import { Carousel } from "react-bootstrap"
import slideOne from "../assets/media/img/slides/02.jpg"
import carterasCategory from "../assets/media/img/categories/carteras-category.jpg"
import cinturonesCategory from "../assets/media/img/categories/cinturones-category.jpg"
import neccessariesCategory from "../assets/media/img/categories/neccessaries-category.jpg"

export default function Home() {
  return (
    <>
      <Head>
        <title>Sasari</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <Carousel>
          <Carousel.Item>
            <img 
              className="d-block w-100" 
              src={slideOne} alt="Third slide" 
            />
          </Carousel.Item>
          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src={"http://placehold.it/800x400?text=800x400"}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://placehold.it/800x400?text=800x400"
              alt="Third slide"
            />
          </Carousel.Item> */}
        </Carousel>
        <div className="container-fluid pb-8 pt-4 page-content">
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="caterory">
                <img
                  className="d-block w-100 h-100"
                  src={carterasCategory}
                  alt="carteras"
                />
                <p className="caterory__title">CARTERAS</p>
              </div>
            </div>

            <div className="col-md-12 col-lg-4">
              <div className="caterory">
                <img
                  className="d-block w-100 h-100"
                  src={neccessariesCategory}
                  alt="neccessaries"
                />
                <p className="caterory__title">NECCESSARIES</p>
              </div>
            </div>

            <div className="col-md-12 col-lg-4">
              <div className="caterory">
                <img
                  className="d-block w-100 h-100"
                  src={cinturonesCategory}
                  alt="cinturones"
                />
                <p className="caterory__title">CINTURONES</p>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
      <style jsx>
        {`
          .caterory {
            width: 100%;
          }
          .caterory__title {
            font-size: 26px;
            color: #929292;
            text-align: center;
            padding: 1em;
            font-weight: bold;
          }
          @media screen and (min-width: 1124px) {
            .caterory {
              width: 432px;
              height: 457px;
            }
          }
          
        `}
      </style>
    </>
  )
}
