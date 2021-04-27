import React from "react"
import { colors } from "styles/theme"
import Link from 'next/link'
import facebook from "../../assets/media/img/icons/facebook.jpg"
import instagram from "../../assets/media/img/icons/instagram.jpg"


const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ul className="list-unstyled">
                <li className="font-weight-bold pb-2">TIENDA ONLINE</li>
                <li>
                  <Link href="/cambios-y-devoluciones">
                    <a>Cambios y devoluciones</a>
                  </Link>
                </li>
                <li>
                  <Link href="/informacion-de-envios">
                    <a>Información de envíos</a>
                  </Link>
                </li>
                <li>
                  <Link href="/medios-de-pago">
                    <a>Medios de pago</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-unstyled">
                <li className="font-weight-bold pb-2">LEGALES</li>
                <li>
                  <Link href="/">
                    <a>Políticas y privacidad</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Terminos y condiciones</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a> Promociones vigentes</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-unstyled">
                <li className="font-weight-bold pb-2">INSTITUCIONAL</li>
                <li>
                  <Link href="/quienes-somos">
                    <a>Quienes somos</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contacto">
                    <a>Contacto</a>
                  </Link>
                </li>
                <li className="pt-1">
                  <div className="d-flex">
                    <img 
                      src={facebook}
                      className="mr-2 i-42"
                    />
                    <img 
                      src={instagram}
                      className="i-42"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>{`
        footer {
          background-color: ${colors.primary};
          padding-top: 4em;
          padding-bottom: 8em;
          text-align: center;
        }
        .col-md-4 {
          padding: 1em;
        }
        li, a {
          color: #000000;
          weight: 700;
          font-size: 24px;
          line-height: 32px;
        }
        @media screen and (min-width: 1124px) {
          footer {
            text-align: left;
          }
          .col-md-4 {
            padding: 0;
          }
        }
        .i-42 {
          width: 42px;
          height: 42px;
        }
      `}</style>
    </>
  )
}

export default Footer
