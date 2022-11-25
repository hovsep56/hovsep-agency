import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const Navbar=()=>{
  return(
    <div>
    </div>
  )
}

const Mainpage =()=>{
  return (
    <body style={{backgroundImage: "url('https://image.api.playstation.com/vulcan/img/rnd/202010/0220/mEgt1tDiuDgwqMPCLIzM1gBD.jpg')", height:"100vh"}}>
      <Layout pageTitle="Welcome to my Top Ten list!" >
      
      <p>Top Ten RPG games</p>
      
      </Layout>
    </body>
    
  )
}
// Stap 2: definieer je component
const IndexPage = () => {
  return(
    <Mainpage/>
  )
  
}
// Stap 3: Exporteer je component
export default IndexPage
