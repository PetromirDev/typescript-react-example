const greetingSuffix = 'Радваме се, че си тук отново!'

export type GenderType = 'male' | 'female' | 'other'

const determinePrefix = (gender: GenderType): string => {
	let prefix: string = 'Добре дошъл'

	if (gender === 'female') {
		prefix = 'Добре дошла'
	}

	return prefix
}

const greet = ({ gender, name }: any): any => {
	return `${determinePrefix(gender)}, ${name}! ${greetingSuffix}`
}

const greetTyped = ({ gender, name }: { gender: GenderType; name: string }): string => {
	return `${determinePrefix(gender)}, ${name}! ${greetingSuffix}`
}

type GreetParametersType = {
	gender: GenderType
	name: string
}

const greetTypedExternally = ({ gender, name }: GreetParametersType): string => {
	return `${determinePrefix(gender)}, ${name}! ${greetingSuffix}`
}

export { greet, greetTyped, greetTypedExternally }
