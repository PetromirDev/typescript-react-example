export default function functions() {
	type UserType = {
		username: string
		id: number
	}

	type AdminType = UserType & {
		accessLevel: number
	}

	function deleteUser(user: UserType): string {
		return `Deleted user ${user.username} with id ${user.id}`
	}

	function makeAdmin(user: UserType, accessLevel?: number): AdminType {
		let accessLevelToSet = 1

		if (accessLevel) {
			accessLevelToSet = accessLevel
		}

		return {
			...user,
			accessLevel: accessLevelToSet
		}
	}

	function reportUser(user: UserType, reason: 'spam' | 'cheating'): string {
		return `Reporting user ${user.username} with id ${user.id}. Reason: ${reason}`
	}
}
