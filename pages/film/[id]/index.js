import styles from '../../../styles/Film.module.css'
import { Grid } from '@material-ui/core'
import { Rating } from '@material-ui/lab'

const film = ({ film }) => {
    
let time;
if(film.running_time.length == 3) {
    time = `${film.running_time.charAt(0)}hr ${film.running_time.slice(-2)}mins`;
} else if(film.running_time.length == 2) {
    time = `${film.running_time} mins`;
}
    return(
        <>
            <div>
                <div className={styles.container}>
                    <h2 style={{marginTop:0, marginBottom:0}}>
                        {film.original_title}
                    </h2>
                    <h4 style={{marginTop:0, marginBottom:0}}>
                        {film.title} | {film.original_title_romanised}
                    </h4>
                </div>

                <Grid container>
                    <Grid item>
                        <p className={styles.film__bts}>
                            Director: {film.director}
                        </p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <p className={styles.film__bts}>
                            Producer: {film.producer}
                        </p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <p className={styles.film__bts}>
                            Running Time: {time}
                        </p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <p className={styles.film__bts}>
                            Release Date: {film.release_date}
                        </p>
                    </Grid>
                </Grid>
                <Grid container>
                    <p style={{marginLeft:20, marginTop: 0, marginBottom: 0, paddingLeft:10}}>Rotten Tomatoes Score: </p>
                    <Rating 
                        readOnly
                        value={parseInt(film.rt_score)}
                    />
                </Grid>
                
                <div className={styles.film_desc}>
                    {film.description}
                </div>
            </div>
        </>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`http://localhost:3000/api/films/${context.params.id}`)
    const film = await res.json()

    return {
        props: {
            film
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:3000/api/films`)
    const films = await res.json()

    const ids = films.results.map(film => film.id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false,
    }
}

export default film