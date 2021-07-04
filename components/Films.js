import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { ListItemText,
        Chip } from '@material-ui/core'

const Films = ({ films }) => {
    return (
        <div>
            <div>
                <ul className={styles.grid}>
                    {films.map(result => {
                    const { id, title, original_title, running_time } = result;
                    let time;
                    if(running_time.length == 3) {
                        time = `${running_time.charAt(0)}hr ${running_time.slice(-2)}mins`;
                    } else if(running_time.length == 2) {
                        time = `${running_time} mins`;
                    }
                    return (
                        <li key={id} className={styles.card}>
                            <Link href={`/film/${id}`}>
                                <a>
                                    <h3>{title}</h3>
                                    <div>
                                    <ListItemText key={id} primary={original_title} />
                                    <ListItemText>
                                        <Chip size="small" label={time} />
                                    </ListItemText>
                                    </div>
                                </a>
                            </Link>
                        </li>
                    )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Films
