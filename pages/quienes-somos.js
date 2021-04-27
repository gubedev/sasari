import Head from "next/head"
import AppLayout from "components/AppLayout"
import sasari from "../assets/media/img/quienes-somos.jpeg"

export default function QuienesSomos() {
  return (
    <>
      <Head>
        <title>Sasari</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <div className="container page-content">
          <div className="row">
            <div className="col-md-6 p-4">
              <img 
                src={sasari} 
                width={"100%"} 
              />
            </div>
            <div className="col-md-6 p-4">
              <h4>
               ¿QUIENES SOMOS?
              </h4>
              <p className="p-2">
                Somos SASARI, un emprendimiento de tres amigas que comenzó en un momento muy particular del año 2020. Con mucho entusiasmo, ganas y proyectos decidimos lanzarnos hacia esta nueva aventura. 
                Nuestro gran trabajo día a día es estar a la altura de las nuevas tendencias, colores y diseños innovadores para todas aquellas personas que quieran SENTIRSE ÚNICAS .
              </p>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  )
}
