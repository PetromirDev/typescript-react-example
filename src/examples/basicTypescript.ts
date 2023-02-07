// Няма нужда да типизираме константи
const message = 'Hello World'

function getFoo() {
	let foo: any = 42

	foo = 'bar'

	foo = true

	return foo
}

function getPersonDescription(name: string, city: string, age: number): string {
	return `${name} lives in ${city}. he's ${age}. In 10 years he'll be ${age + 10}`
}

function getMappedArray(array: number[]) {
	return array.map((item) => item * 2)
}

function getGreeting(username: string, gender: 'male' | 'female'): string {
	let prefix: string = 'Mr.'
	if (gender === 'female') {
		prefix = 'Ms.'
	}
	return `Welcome aboard, ${prefix} ${username}!`
}

export { getFoo, getPersonDescription, getMappedArray, getGreeting }
