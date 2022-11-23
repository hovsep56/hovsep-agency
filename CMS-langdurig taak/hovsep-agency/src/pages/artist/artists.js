import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'

const ArtistsPage = ({data: {allWpArtist: {edges}}}) => {
  
  return (
    <Layout pageTitle="Artists of Inghelbrecht Agency">
      <p>list of artists</p>
      {edges.map((item) => {
        const artist = item.node.artistFields;
        const slug = item.node.slug
        return<Link to={`/artist/${slug}`}><p key={item.node.id}>{artist.firstName} {artist.lastName}</p></Link> 
      })}
    </Layout>
  )
}

/*export const query = graphql`
query MyQuery {
  allWpArtist {
    edges {
      node {
        id
        slug
        artistFields {
          firstName
          lastName
        }
      }
    }
  }
}
`*/

export default ArtistsPage