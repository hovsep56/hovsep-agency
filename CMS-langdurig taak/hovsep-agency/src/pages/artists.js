import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const ArtistsPage = () => {
  
  return (
    <Layout pageTitle="Artists of Inghelbrecht Agency">
      <p>I don't have artist on my desktop so here is some random data from my langdurig taak wordpress.</p>
      
    </Layout>
  )
}

export const query = graphql`
query {
  game(id: "") {
    id
  }
}
`

export default ArtistsPage