import { useFetch } from "../Hooks/useFetch"

export const getArrayCountires = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data }  = useFetch('https://covid19.mathdro.id/api/countries')
  const listCoutries = !!data && data.countries.map( countrie => countrie.name.toLowerCase())

	return listCoutries
}