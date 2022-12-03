import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { getImage,GatsbyImage } from 'gatsby-plugin-image'

const ArtistPage = ({data: {wpGame: {gameMeta: game}}}) => {
  const image=getImage(game.picture.localFile)
  return (
    <Layout>
      <h1 style={{textAlign: 'center'}}>Game details </h1>
      <div>
      <h3>{game.title}</h3>
      <GatsbyImage image={image} alt={game.picture.altText}  style={{maxHeight:300, maxWidth:300}}/>
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($slug: String) {
  wpGame(slug: {eq: $slug}) {
    gameMeta {
      title
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        altText
      }
    }
  }
}
`

export default ArtistPage