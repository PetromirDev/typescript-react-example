import { SampleUser } from '../../examples/user'
import { greetTyped } from '../../examples/typedFunctions'
// Components
import Info from './Info/Info'
import Stats from './Stats/Stats'
import Greeting from './Greeting/Greeting'
// Styles
import styles from './Profile.module.css'

export default function Profile() {
	const { followers, following, username, photoUrl, gender } = SampleUser

	return (
		<div className={styles.wrapper}>
			<Info username={username} photoUrl={photoUrl} />
			<Stats followers={followers} following={following} />
			<Greeting greeting={greetTyped({ gender, name: username })} />
		</div>
	)
}
