import { GenderType } from "./typedFunctions"

const username: string = 'Ivan2148'
const photoUrl: string = 'https://www.diplomacyandcommerce.rs/wp-content/uploads/2020/02/Dejan-Bursac-01-1018x1200.jpg'
const followers: number = 348
const following: number = 528
const gender = 'male'

type UserType = {
	username: string
	photoUrl: string
	followers: number
	following: number
	gender: GenderType
}

const SampleUser: UserType = {
	username,
	photoUrl,
	followers,
	following,
	gender
}

export { SampleUser }
