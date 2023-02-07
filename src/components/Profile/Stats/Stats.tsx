import styles from './Stats.module.css'

type PropsType = {
	followers: number
	following: number
}

export default function Stats({ followers, following }: PropsType) {
	return (
		<div className={styles.wrapper}>
      <div className={styles.item}>
        <h3 className={styles.label}>Followers</h3>
        <p className={styles.value}>{followers}</p>
      </div>
      <div className={styles.item}>
        <h3 className={styles.label}>Following</h3>
        <p className={styles.value}>{following}</p>
      </div>
		</div>
	)
}
