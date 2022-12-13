import * as React from 'react'
import { useState } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { getImage,GatsbyImage } from 'gatsby-plugin-image'
import { number } from 'prop-types'

const Mainpage = ({data: {allWpGame: {edges}}}) => {
  
  return (
    <Layout >
      <h1 style={{textAlign: 'center'}}>Welcome to my personal Top Ten RPG games</h1>
      
      <ul style={{listStyleType:"decimal", display:'flex',alignItems:'center',flexDirection: 'column'}}>
      {edges.map((item) => {
        const game = item.node.gameMeta;
        const slug = item.node.slug
        const image=getImage(game.picture.localFile)
        return<li style={{paddingBottom:50, textAlign: 'center'}}><Link to={`/gamespages/${slug}`}><p key={item.node.id}> 
          {game.title}</p></Link> 
          <GatsbyImage image={image} alt={game.picture.altText} style={{maxWidth: 150, maxWidth:150}} /> 
        </li>
      })}
      </ul>
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
        }
      }
    }
  }
}

`

export default Mainpage
