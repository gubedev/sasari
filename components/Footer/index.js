import React from "react"
import { colors } from "styles/theme"
import Link from 'next/link'

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
                  <Link href="/">
                    <a>Cambios y devoluciones</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Información de envíos</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
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
                  <Link href="/">
                    <a>Quienes somos</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Contacto</a>
                  </Link>
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
        }
        li, a {
          color: #000000;
          weight: 700;
          font-size: 24px;
          line-height: 32px;
        }
      `}</style>
    </>
  )
}

export default Footer
