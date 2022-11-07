import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

// Stap 2: definieer je component
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome to Inghelbrecht Agency!</h1>
      <p>Lorem ipsum</p>
    </main>
  )
}
// Stap 3: Exporteer je component
export default IndexPage
