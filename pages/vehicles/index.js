import styles from '../../styles/Home.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Grid, Chip } from '@material-ui/core';
import Eyes from "../../components/Eyes";

const defaultEndpoint = 'http://localhost:3000/api'

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

const index = ({ data }) => {
    console.log(data);
  const vehicles = [] = data.vehicles
  return (
    <div>
      <ul className={styles.grid}>
        {vehicles.map(car => {
          const {id, name, description, vehicle_class, length } =  car;
          return (
            <li key={id} className={styles.card}>
              <a>
                <h3 style={{"marginTop": "0px"}}>{name}</h3>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <p className={styles.paragraph}>Vehicle Class:</p>
                    </Grid>
                    <Grid item xs={6}>
                        <p className={styles.paragraph}>{vehicle_class}</p>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <p className={styles.paragraph}>Length:</p>
                    </Grid>
                    <Grid item xs={6}>
                        <p className={styles.paragraph}>{length}</p>
                    </Grid>
                    <Grid item>
                        <p className={styles.paragraph}>Description:</p>
                        <p className={styles.paragraph}>{description}</p>
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

