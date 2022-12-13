import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { node } from 'prop-types'

const ArtistPage = ({ data: { wpGame: { gameMeta: game } } }) => {
const image = getImage(game.picture.localFile)
var desciption = toString(game.desciption);
var newdescription = desciption.replace("<p>", "")
  return (
    <Layout>
      <div style={{ position: 'absolute', paddingLeft: 30 }}>
        <div style={{ border: 'solid', borderColor: 'black',padding:10}}>
          <ul style={{listStyle: 'none'}}>
            <li>Age rating: {game.ageRating}</li>
            <li>Development cost: {game.developmentCost}</li>
            <li>development team: {game.developmentTeam}</li>
            <li>Metacritic score: {game.metacriticScore}</li>
            <li>Positives:</li>
            <ul>
              <li>{game.positives}</li>
            </ul>
          </ul>

        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <h1>Game details </h1>
        <h3>{game.title}</h3>
        <GatsbyImage image={image} alt={game.picture.altText} style={{ maxHeight: 300, maxWidth: 300 }} />
        <h3>Description</h3>
        <p style={{ paddingTop: 20 }}>{game.description}</p>
      </div>
      <section style={{ float: 'left' }}>
      </section>
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
      ageRating
      description
      developmentCost
      developmentTeam
      fieldGroupName
      metacriticScore
      minimumRequirements
      negatives
      positives
    }
  }
}

`

export default ArtistPage