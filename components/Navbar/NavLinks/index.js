import React from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import Link from "next/link"

const NavLinks = () => {
  return (
    <>
      <Navbar bg="black" variant="dark">
        <Nav className="mr-auto">
          <Link href="/">
            <span className="nav-link">INICIO</span>
          </Link>
          <NavDropdown title="ACCESORIOS">
            <NavDropdown.Item>
              <Link
                href={{ pathname: "/accesorios", query: { keyword: "maquillajes" } }}
              >
                <span className="nav-link">MAQUILLAJE</span>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link 
                href={{ pathname: "/accesorios", query: { keyword: "llaveros" } }}
              >
                <span className="nav-link">LLAVEROS</span>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link 
                href={{ pathname: "/accesorios", query: { keyword: "cinturones" } }}
              >
                <span className="nav-link">CINTURONES</span>
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="MARROQUERÍA">
            <NavDropdown.Item>
              <Link 
                href={{ pathname: "/marroqueria", query: { keyword: "billeteras" } }}
              >
                <span className="nav-link">BILLETERAS</span>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link 
                href={{ pathname: "/marroqueria", query: { keyword: "mochilas" } }}
              >
                <span className="nav-link">MOCHILAS</span>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                href={{ pathname: "/marroqueria", query: { keyword: "carteras" } }}
              >
                <span className="nav-link">CARTERAS</span>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link 
                href={{ pathname: "/marroqueria", query: { keyword: "riñoneras" } }}
              >
                <span className="nav-link">RIÑONERAS</span>
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Link href="/sales">
            <span className="nav-link">SALES</span>
          </Link>
          <Link href="/contacto">
            <span className="nav-link">CONTACTO</span>
          </Link>
        </Nav>
      </Navbar>
    </>
  )
}

export default NavLinks
