export default function basicTypescript() {
	// Няма нужда да типизираме константи
	const isTrue = true

	function getFoo(): any {
		let foo: any = 42

		foo = 'bar'

		foo = isTrue

		return foo
	}

	function getPersonDescription(name: string, city: string, age: number) {
		return `${name} lives in ${city}. he's ${age}. In 10 years he'll be ${age + 10}`
	}

	function getMappedArray(array: number[]) {
		return array.map((item) => item * 2)
	}

	function getGreeting(username: string, gender: 'male' | 'female') {
		let prefix: string = 'Mr.'
		if (gender === 'female') {
			prefix = 'Ms.'
		}
		return `Welcome aboard, ${prefix} ${username}!`
	}
}
