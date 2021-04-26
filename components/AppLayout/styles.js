import css from "styled-jsx/css"

import { fonts } from "styles/theme"

export const globalStyles = css.global`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
  }

  .dropdown-toggle::after {
    display: none;
  }

  .navbar-dark .navbar-nav .nav-link {
    color: white;
    weight: 700;
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
  }

  .navbar-expand .navbar-nav .nav-link {
    padding-right: 3rem;
  }

  .dropdown-menu {
    border-radius: 0;
  }

  .dropdown-menu.show {
    top: 3.4em;
    background-color: #000000!important;
  }

  .dropdown-item {
    color: white;
    weight: 700;
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
  }

  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 3rem;
  }

  .text-24 {
    font-size: 24px;
  }

  .bg-black {
    background-color: #000000;
  }

  .breadcrumb {
    background-color: transparent;
  }

  .breadcrumb-item {
    font-size: 24px;
    weight: 500;
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
    text-transform: capitalize;
  }

  .breadcrumb-item+.breadcrumb-item::before {
    float: left;
    padding-right: .5rem;
    color: #929292;
    content: ">";
  }

  a {
    color:  #929292;
    text-decoration: none;
  }
`