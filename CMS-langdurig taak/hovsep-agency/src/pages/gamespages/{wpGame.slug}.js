import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import {gameDisplay} from './game.module.css'

const ArtistPage = ({ data: { wpGame: { gameMeta: game } } }) => {
  const image = getImage(game.picture.localFile)
  var desciption = toString(game.desciption);
  var newdescription = desciption.replace("<p>", "")
  return (

    <Layout>
      <div style={{backgroundColor: 'lightgrey',height:'130vh'}}>
      <div style={{ position: 'absolute', paddingLeft: 30 }}>
        <div style={{ border: 'solid', borderColor: 'black', padding: 10 }}>
          <h3 style={{textAlign: 'center',borderBottom: 'solid'}}> Extra details</h3>
          <ul style={{ listStyle: 'none' }}>
            <li><text style={{ fontWeight: 'bold' }}>Age rating:</text> {game.ageRating}</li>
            <li><text style={{ fontWeight: 'bold' }}>Development cost:</text> {game.developmentCost}</li>
            <li><text style={{ fontWeight: 'bold' }}>development team:</text>  {game.developmentTeam}</li>
            <li><text style={{ fontWeight: 'bold' }}>Metacritic score:</text> {game.metacriticScore}</li>
            <li><text style={{ fontWeight: 'bold', color: 'green' }} >Positives:</text></li>
            <li dangerouslySetInnerHTML={{__html:game.positives}}/>
            <li><text style={{ fontWeight: 'bold', color: 'red' }}>Negatives:</text></li>
            <li dangerouslySetInnerHTML={{__html:game.negatives}}/>
          </ul>


        </div>
      </div>
      <div className={gameDisplay}>
        <h1 style={{ borderBottom: 'solid' }}>Game details </h1>
        <h2>{game.title}</h2>
        <GatsbyImage image={image} alt={game.picture.altText} style={{ maxHeight: 300, maxWidth: 300 }} />
        <h3 style={{ borderBottom: 'solid' }}>Description</h3>
        <p style={{ paddingTop: 10 }}>{game.description}</p>
        <h3 style={{ borderBottom: 'solid' }}>Minimum requirements</h3>
        <div dangerouslySetInnerHTML={{__html:game.minimumRequirements}}/>
      </div>
      <section style={{ float: 'left' }}>
      </section>
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
      ageRating
      description
      developmentCost
      developmentTeam
      metacriticScore
      minimumRequirements
      negatives
      positives
    }
  }
}

`

export default ArtistPage