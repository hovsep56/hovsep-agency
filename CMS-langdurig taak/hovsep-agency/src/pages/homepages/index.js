import * as React from 'react'
import { useState } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import {background,navlinktext,liststyle} from './index.module.css'

const Mainpage = ({ data: { allWpGame: { edges } } }) => {
  const [count,setcount] =useState(0)
  return (
    <Layout>
      <div className={background}>
        <h1 style={{ textAlign: 'center', paddingBottom:20}}>Welcome to my personal Top Ten RPG games</h1>
        <ul className={liststyle}>
          {edges.map((item) => {
            const game = item.node.gameMeta;
            const slug = item.node.slug
            const image = getImage(game.picture.localFile)
            return (
              
              <div>
                <li style={{ paddingBottom: 50, textAlign: 'center' }}>
                <Link className={navlinktext} to={`/gamespages/${slug}`}>
                    <h2 key={item.node.id} style={{fontWeight: 'bold',paddingBottom:20}}>{game.title}</h2>
                  </Link>
                  <GatsbyImage image={image} alt={game.picture.altText} style={{ maxWidth: 150, maxWidth: 150 }} />                 
                </li>
              </div>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
{
  allWpGame {
    edges {
      node {
        id
        slug
        gameMeta {
          title
          picture {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          description
        }
      }
    }
  }
}

`

export default Mainpage
