import { colors } from "styles/theme"
import Head from "next/head"
import AppLayout from "components/AppLayout"
import contact from "../assets/media/img/contact.jpeg"

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Sasari</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <div className="container page-content">
          <div className="row">
            <div className="col-md-6">
              <img 
                src={contact} 
                width={"100%"} 
              />
            </div>
            <div className="col-md-6">
              <form>
                <fieldset>
                  <div className="form-group">
                    <label htmlFor="nombre"></label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      placeholder="Nombre"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email"> </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="telefono"> </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="telefono"
                      placeholder="Teléfono"
                    />
                  </div>

                  <div className="className form-group">
                    <label htmlFor="mensaje"> </label>
                    <textarea
                      className="form-control"
                      id="consulta"
                      placeholder="Consulta"
                    ></textarea>
                  </div>
                </fieldset>
                <input 
                  type="button" className="btn btn-primary p-2"
                  value="Enviar"
                />
              </form>
              <br />
            </div>
          </div>
        </div>
      </AppLayout>
      <style jsx>{`
        .form-control {
          background-color: rgba(255, 230, 223, 0.72);
        }
        .btn-primary {
          background-color: ${colors.primary};
          border:none;
        }
      `}</style>
    </>
  )
}
