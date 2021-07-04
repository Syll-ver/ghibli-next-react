import styles from '../../styles/Home.module.css'
import Eyes from "../../components/Eyes";

const defaultEndpoint = 'http://localhost:3000/films/api'

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  console.log(res.results);
  let hjhjhj = res.species
  console.log(hjhjhj);
  const data = await hjhjhj.json();
  return {
    props: {
      data
    }
  }
}

const index = ({ data }) => {
  const species = [] = data.species
  return (
    <div>
      <ul className={styles.grid}>
        {species.map(peeps => {
          const {id, name, classification, eye_colors, hair_colors } =  peeps;
          let eyes = ["red", "blue"]

          return (
            <li key={id} className={styles.card}>
              <a>
                <h3 style={{"marginTop": "0px"}}>{name}</h3>
                <Eyes colors={eyes} />
                
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default index

