import Link from 'next/link';
import { Grid } from '@material-ui/core';
import styles from '../styles/Home.module.css'

export default function Header() {
    return (
        <header>
            <div className={styles.navbar}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Link href="/">
                            <a>
                                <h4>スタジオジブリ</h4>
                            </a>
                        </Link>
                    </Grid>
                    {/* <Grid item xs>
                        <Link href="/people">
                            <a>
                                <h4>People</h4>
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs>
                        <Link href="/species">
                            <a>
                                <h4>Species</h4>
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs>
                        <Link href="/locations">
                            <a>
                                <h4>Locations</h4>
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs>
                        <Link href="/vehicles">
                            <a>
                                <h4>Vehicles</h4>
                            </a>
                        </Link>
                    </Grid> */}

                </Grid>
            </div>
        </header>
    )
}