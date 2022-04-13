import { IconButton, useColorModeValue, InputRightElement } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'

const ButtonIcon = ( ) => {

  const icon = <IconButton
                type='submit'
                bg={useColorModeValue('themeLight.bgSearchButton', 'themeDark.bgSearchButton')}
              	color={useColorModeValue('themeLight.SearchButton', 'themeDark.SearchButton')}
                aria-label='Search database'
                icon={<FiSearch />}
              />

  return (
    <>
      <InputRightElement children = { icon } />
    </>
  )
}

export default ButtonIcon
