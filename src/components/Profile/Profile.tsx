// Components
import Info from './Info/Info'
import Stats from './Stats/Stats'
import TestExamples from '../../examples'
// Styles
import styles from './Profile.module.css'

const SampleUser = {
	username: 'Ivan2148',
	photoUrl: 'https://www.diplomacyandcommerce.rs/wp-content/uploads/2020/02/Dejan-Bursac-01-1018x1200.jpg',
	followers: 348,
	following: 528,
}

export default function Profile() {
	TestExamples()

	const { followers, following, username, photoUrl } = SampleUser

	return (
		<div className={styles.wrapper}>
			<Info username={username} photoUrl={photoUrl} />
			<Stats followers={followers} following={following} />
		</div>
	)
}
