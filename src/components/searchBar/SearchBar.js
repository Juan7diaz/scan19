import { useState, useRef } from 'react'
import { useMatches } from '../../Hooks/useMatches'
import { getArrayCountires } from '../../helpers/getArrayCountries'
import { Box, InputGroup, Input, useColorModeValue } from '@chakra-ui/react'
import Suggestions from './Suggestions'
import ButtonIcon from './ButtonIcon'

const SearchBar = ({ setCountry }) => {

	const inputRef = useRef()
	const [inputValue, setInputValue] = useState('')

	//genera un array se sugerencias de paises
	const ArrayCountries = getArrayCountires()
	let matches  = useMatches( ArrayCountries, inputValue.toLowerCase() )

	//envia lo escrito en el input cuando se da Enter
	const handleSubmit = (e) => {
		e.preventDefault()
		setCountry(inputValue)
	}

	//toma lo que el usuario ingrese en le input y lo guarda en InputValue
	const handleInputChange = (e) => {
		setInputValue( e.target.value )
	}

	return (
		<form onSubmit={ handleSubmit }>
			<Box py={10} px={6}>
				<InputGroup size='lg'>
					<Input
						focusBorderColor={useColorModeValue('themeLight.borderInput', 'themeDark.borderInput')}
						bg={useColorModeValue('themeLight.bgInput', 'themeDark.bgInput')}
						placeholder='Enter a country to search'
						autoComplete='off'
						ref={ inputRef }
						value = { inputValue }
						onChange = { handleInputChange }
					/>
					<ButtonIcon/>
				</InputGroup>
				<Suggestions results={matches} inputValue={inputValue} setInputValue={setInputValue} inputRef={inputRef}/>
			</Box>
		</form>
  	)
}

export default SearchBar
