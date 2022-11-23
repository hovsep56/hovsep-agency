import * as React from 'react'
import { useState } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'

const TopTenPage = ({data: {allWpGame: {edges}}}) => {
  
  return (
    <Layout pageTitle="Artists of Inghelbrecht Agency">
      <p>My personal Top ten games</p>
      {edges.map((item) => {
        const game = item.node.gameMeta;
        const slug = item.node.slug
        
        return<Link to={`/gamespages/${slug}`}><p key={item.node.id}> {game.title}</p></Link> 
      })}
    </Layout>
  )
}

export const query = graphql`
query {
    allWpGame {
      edges {
        node {
          id
          slug
          gameMeta {
            title
          }
        }
      }
    }
  }
`

export default TopTenPage