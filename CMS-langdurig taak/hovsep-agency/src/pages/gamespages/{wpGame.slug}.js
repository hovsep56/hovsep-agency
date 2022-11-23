import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { getImage,GatsbyImage } from 'gatsby-plugin-image'

const ArtistPage = ({data: {wpGame: {gameMeta: game}}}) => {
  const image=getImage(game.picture.localFile)
  return (
    <Layout pageTitle="Game Template">
      <div>
      <h3>{game.title}</h3>
      <GatsbyImage image={image} alt={game.picture.altText} />
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