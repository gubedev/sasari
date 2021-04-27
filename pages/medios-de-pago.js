import Head from "next/head"
import AppLayout from "components/AppLayout"

export default function MediosDePago() {
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
              <p className="pt-2 pb-2">
                <h3>Pago</h3>
              </p>
              <p>
                <h4>Medios de pago</h4>
              </p>
              <p className="p-2">
                Se puede abonar en efectivo, por transferencia bancarias y MercadoPago. No manejamos cuotas.
              </p>
              <p className="p-1">
                <h3>Promociones</h3>
              </p>
              <p className="p-21">
              Las ofertas serán publicadas en nuestas redes sociales semanalmente. 
              Seguinos en <b>Instagram</b>  y <b>Facebook</b> <br /> para enterarte de todo.
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
