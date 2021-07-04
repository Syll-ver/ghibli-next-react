import styles from '../../styles/Home.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image';
import { Grid } from '@material-ui/core';

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
  const people = [] = data.people
  return (
    <div>
      <ul className={styles.grid}>
        {people.map(peeps => {
          const {id, name, gender, age, eye_color, hair_color } =  peeps;
          let src;
          if(gender == 'Male') {
            src = '/male.png';
          } else {
            src = '/female.png';
          }
          return (
            <li key={id} className={styles.card}>
              <a>
                <h3 style={{"marginTop": "0px"}}>{name}</h3>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <p className={styles.paragraph}>Gender</p>
                  </Grid>
                  <Grid item xs={6}>
                    <Image src={src} alt={src} height={15} width={15}></Image>
                  </Grid>
                </Grid>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <p className={styles.paragraph}>Age</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p className={styles.paragraph}>{age}</p>
                  </Grid>
                </Grid>

                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <p className={styles.paragraph}>Eye Color</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p className={styles.paragraph}>{eye_color}</p>
                  </Grid>
                </Grid>

                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <p className={styles.paragraph}>Hair Color</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p className={styles.paragraph}>{hair_color}</p>
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

