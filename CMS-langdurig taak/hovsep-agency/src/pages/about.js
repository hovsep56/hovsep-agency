import React from 'react';
import Layout from '../components/layout';
import styles from'./about.css';

const IndexPage =()=>{
    return(
        <Layout>
            <div style={{display:'flex',alignItems:'center',flexDirection: 'column'}}>
            <h1>About</h1>
            <p style={{textAlign: 'center'}}>This website is to display my love for RPG games by making my own personal top 10 RPG games list togheter with some details on the game itself. {'\n'}
            Please be mindful that this is NOT a ranking but simply a top ten list of my favorite games i have played. So if you see your game below another game it does not mean one is better than the other.</p>
            </div>
        </Layout>
    )
}


export default IndexPage