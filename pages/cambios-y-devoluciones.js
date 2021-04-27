import Head from "next/head"
import AppLayout from "components/AppLayout"

export default function CambiosYDevoluciones() {
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
                <h3>Cambios y devoluciones</h3>
              </p>
              <p className="p-2">
                <h4>¿Cuántos días de cambio tengo?</h4>
              </p>
              <p className="p-2">
                Los productos tendrán 15 días de cambio. En caso de
                corresponder, los costos de envío o traslados al punto de
                encuentro serán responsabilidad del comprador.
                <br />
                <i>
                  Los productos son revisados antes de ser entregados, en el
                  caso de que exista una falla de fábrica la misma deberá ser
                  informada dentro de las 24hs, de lo contrario queda sin efecto
                  el reclamo.{" "}
                </i>
              </p>
              <p className="p-2">
                <h4>Excepciones</h4>
              </p>
              <p className="p-1">
                Los productos en sale con precios únicos no tienen cambio.{" "}
                <br />
                Los accesorios de make up/pelo no tienen cambio.
              </p>
              <p className="p-2">
                <h4>Condiciones para realizar las devoluciones</h4>
              </p>
              <p>
                El producto no puede haber sido usado.
                <br />
                El producto debe estar en perfectas condiciones.
                <br />
                El producto se puede cambiar una sola vez.
                <br />
                El producto debe tener el packaging intacto.
              </p>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  )
}
