import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  navLinks,
  navText,
  navBar
} from './layout.module.css'
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function BasicExample({ pageTitle, children }) {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }`)

  return (
    <div className={container}>
    <Navbar expand='sm' className={navBar}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={navLinks}>
            <Link className={navText} to="/">Home</Link>
            <Link className={navText} to="/homepages/about">About</Link>
            <Link className={navText} to="/homepages/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
}


export default BasicExample
