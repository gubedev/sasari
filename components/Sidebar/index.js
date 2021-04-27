import React from "react"
import { colors, layout } from "styles/theme"
import Submenu from "components/Sidebar/Submenu"
import Link from "next/link"
import LayoutContext from "context/Layout"

const Sidebar = () => {
    const { isShowingSidebar } = React.useContext(LayoutContext)
  
    return <>
            {isShowingSidebar && (
                <div 
                    className="sidebar p-4"
                >
                    <ul className="list-unstyled">
                        <li className="menu__item">
                            <span className="font-weight-bold">INICIO</span>
                        </li>
                
                        <Submenu
                            name="ACCESORIOS"

                        >
                            <li className="menu__item">
                                <div className="menu__link">
                                    <Link 
                                        href={{ pathname: "/accesorios", query: { keyword: "maquillaje" } }}
                                    >
                                        <span className="font-weight-bold">MAQUILLAJE</span>
                                    </Link>
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__link">
                                    <Link 
                                        href={{ pathname: "/accesorios", query: { keyword: "llaveros" } }}
                                    >
                                        <span className="font-weight-bold">LLAVEROS</span>
                                    </Link>
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__link">
                                    <Link 
                                        href={{ pathname: "/accesorios", query: { keyword: "cinturones" } }}
                                    >
                                        <span className="font-weight-bold">CINTURONES</span>
                                    </Link>
                                </div>
                            </li>
                        </Submenu>
                        <Submenu
                            name="MARROQUERIA"
                        >
                            <li className="menu__item">
                                <div className="menu__link">
                                    <Link 
                                        href={{ pathname: "/marroqueria", query: { keyword: "billeteras" } }}
                                    >
                                        <span className="font-weight-bold">BILLETERAS</span>
                                    </Link>
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__link">
                                    <Link 
                                        href={{ pathname: "/marroqueria", query: { keyword: "mochilas" } }}
                                    >
                                        <span className="font-weight-bold">MOCHILAS</span>
                                    </Link>
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__link">
                                    <Link 
                                        href={{ pathname: "/marroqueria", query: { keyword: "carteras" } }}
                                    >
                                        <span className="font-weight-bold">CARTERAS</span>
                                    </Link>
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__link">
                                    <Link 
                                        href={{ pathname: "/marroqueria", query: { keyword: "riñoneras" } }}
                                    >
                                        <span className="font-weight-bold">RIÑONERAS</span>
                                    </Link>
                                </div>
                            </li>
                        </Submenu>
                        <li className="p-2">
                            <Link href="/sales">
                                <span className="font-weight-bold">SALE</span>
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link href="/contacto">
                                <span className="font-weight-bold">CONTACTO</span>
                            </Link> 
                        </li>
                    </ul>
                </div>
            )}
            <style jsx>{`
                @media screen and (min-width: 1124px) {
                    visibility: hidden;
                }
                .sidebar {
                    position:fixed;
                    background-color: ${colors.primary};
                    top: ${layout.navbarMobileHeight};
                    height: 100%;
                    width: 90%;
                    z-index: 2000;
                }
                .menu__item {
                    padding: .5em;
                }
                .menu__link {
                    padding-left: 1em;
                }
            `}
            </style>
        </>
}

export default Sidebar
