import React from 'react';
import Layout from '../../components/layout';
import {title,pageStyle} from'./about.module.css';

const IndexPage =()=>{
    return(
        <Layout>

            <div className={pageStyle}>
            <div style={{paddingBottom:15}}>
            <h1 className={title}>About</h1>
            </div>
            <p style={{textAlign: 'center',fontSize:20}}>
                This website is to display my love for RPG games by making my own personal top 10 RPG games list togheter with some details on the game itself. <br/>
                Please be mindful that this is NOT a ranking but simply a top ten list of my favorite games i have played.
                So if you see your game below another game it does not mean one is better than the other.</p>
            </div>

        </Layout>
    )
}


export default IndexPage