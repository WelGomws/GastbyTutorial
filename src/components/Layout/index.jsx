import React from "react"
import PropTypes from "prop-types"
import "./layout.scss"
import Menu from "../Menu"
import GlobalStyles from "../../styles/globalStyled"
import Footer from "../Footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
