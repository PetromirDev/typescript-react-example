function interfaces() {
	interface UserType {
		username: string
		id: number
	}

	interface AdminType extends UserType {
		accessLevel: number
	}

	function registerUser(user: UserType) {
		return user
	}

	function registerAdmin(admin: AdminType) {
		return admin
	}
}

export default interfaces
