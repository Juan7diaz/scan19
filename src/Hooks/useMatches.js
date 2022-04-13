
export const useMatches = (data, input) => {
  const matches = (data && input.length > 1) && ( data.filter( country => country.includes(input)))
	return matches
}