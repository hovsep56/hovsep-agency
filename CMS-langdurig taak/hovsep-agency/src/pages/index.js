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
      <Layout pageTitle="Welcome to Hovsep Agency!">
      <title>Welcome to Hovsep Agency!</title>
      <p>Lorem ipsum</p>
      <StaticImage
        alt="randomized unsplash image!"
        src="https://image.api.playstation.com/vulcan/img/rnd/202010/0220/mEgt1tDiuDgwqMPCLIzM1gBD.jpg"
      />
      </Layout>
    </main>
  )
}
// Stap 3: Exporteer je component
export default IndexPage
