import { useColorMode } from '@chakra-ui/react'
import './suggestions.css'

const Suggestions = ({results, inputValue, setInputValue, inputRef}) => {

	//definimos que clase va a usar el input para poder darle los estilos segun el colormode
	const { colorMode } = useColorMode();
	let className = (colorMode === 'light') ? 'suggestionsLight' : 'suggestionsDark'

	//se modifica el inputvalue y se hace focus al input para no perder el click
	const handleClick = (res) => {
		setInputValue(res)
		inputRef.current.focus()
	}

	//solo muestra los resultado cuando, h
	//1)ay mas de una letra en el input 2) el array de results no este vacio 3)para evitar que muestre un resultado una vez seleccionado
	if( inputValue.length>1 && results.length>0 && inputValue !== results[0] ){
		return (
			<>
				{
					results.map((res, index)=> 
						<input
							className={className}
							key={index}
							type='submit' 
							onClick={ () => handleClick(res) }
							value={res}
						/>
					)
				}
			</>
		)
	}else{
		return null
	}
}

export default Suggestions;
