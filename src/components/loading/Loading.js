import { Spinner, useColorModeValue } from '@chakra-ui/react'

const Loading = () => {
  return (
    <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color={useColorModeValue('themeLight.spinner', 'themeDark.spinner')}
      size='xl'
    />
  )
}

export default Loading
