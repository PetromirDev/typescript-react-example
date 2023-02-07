import styles from './Info.module.css'

type PropsType = {
	username: string
	photoUrl: string
}

export default function Info({ username, photoUrl }: PropsType) {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.username}>@{username}</h2>
			<img className={styles.avatar} src={photoUrl} alt="user avatar" />
		</div>
	)
}
