function types() {
	type UserType = {
		username: string
		id: number
	}

	type AdminType = UserType & {
		accessLevel: number
	}

	function registerUser(user: UserType) {
		return user
	}

	function registerAdmin(admin: AdminType) {
		return admin
	}
}

export default types
