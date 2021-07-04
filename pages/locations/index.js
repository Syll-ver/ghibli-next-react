import styles from '../../styles/Home.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image';
import { Grid, Chip, Avatar } from '@material-ui/core';

const defaultEndpoint = 'http://localhost:3000/api'

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  console.log(res);
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

const index = ({ data }) => {
  const handleClick = () => {
    console.log("clicked");
  }
  const locations = [] = data.locations
  return (
    <div>
      <ul className={styles.grid}>
        {locations.map(loc => {
          const {id, name, climate, terrain, surface_water } =  loc;
          return (
            <li key={id} className={styles.card}>
              <a>
                <h3 style={{"marginTop": "0px"}}>{name}</h3>
                <Grid container spacing={2}>
                  <Grid>
                    <Chip 
                      style={{"marginLeft":"5px", "marginRight":"5px"}}
                      avatar={<Avatar src="/climate.png" alt="climate" />}
                      size="small"
                      label={climate}
                      onClick={handleClick}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid >
                    <Chip 
                      style={{"marginLeft":"5px", "marginRight":"5px"}}
                      avatar={<Avatar src="/terrain.png" alt="terrain" />}
                      size="small"
                      label={terrain}
                      onClick={handleClick}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid>
                    <Chip 
                      style={{"marginLeft":"5px", "marginRight":"5px"}}
                      avatar={<Avatar>{surface_water}</Avatar>}
                      size="small"
                      label="Surface Water"
                      onClick={handleClick}
                      variant="outlined"
                    />
                  </Grid>
                  
                </Grid>
                </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default index

