import Head from "next/head"
import AppLayout from "components/AppLayout"

export default function InformacionDeEnvios() {
  return (
    <>
      <Head>
        <title>Sasari</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <div className="container page-content">
          <div className="row">
            <div className="col-md-12 p-4">
              <p className="p-2">
                <h3>CABA y Gran Buenos Aires</h3>
              </p>
              <p className="p-2">
                Realizamos envíos a Capital Federal y Gran Buenos Aires mediante
                moto mensajería de confianza.
              </p>
              <p className="p-1">
                <h3>Interior</h3>
              </p>
              <p className="p-21">
                Realizamos envíos a a todas las provincias argentinas por Correo
                Argentino (a sucursal o domicilio). <br />
                El costo varía según la zona.
              </p>
              <p className="p-1">
                <h3>Puntos de encuentros gratuitos</h3>
              </p>
              <p className="p-21">
                Realizamos puntos de encuentro gratuitos en CABA (Villa Luro y
                Liniers) y GBA (Lomas del Mirador)
              </p>
              <p className="p-1">
                <h3>Penalidades</h3>
              </p>
              <p className="p-21">
                Se tendrán 5 minutos de tolerancia del horario pactado, caso
                contrario se efectuará un recargo.
              </p>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  )
}
