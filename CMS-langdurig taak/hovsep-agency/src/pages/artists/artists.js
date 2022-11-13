import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'

const ArtistsPage = ({data: {allWpArtist: {edges}}}) => {
  
  return (
    <Layout pageTitle="Artists of Inghelbrecht Agency">
      <p>list of artists</p>
      {edges.map((item) => {
        const artist = item.node.artistFields;
        return <p key={item.node.id}>{artist.firstName} {artist.lastName}</p>
      })}
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allWpArtist {
    edges {
      node {
        id
        artistFields {
          firstName
          lastName
        }
      }
    }
  }
}

`

export default ArtistsPage