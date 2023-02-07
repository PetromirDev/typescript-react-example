import styles from './Greeting.module.css'

type PropsType = {
	greeting: string
}

export default function Greeting({ greeting }: PropsType) {
	return <p className={styles.greeting}>{greeting}</p>
}
