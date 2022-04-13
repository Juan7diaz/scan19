import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

const Card = ({title, value, subtitle }) => {
  return (
    <Center>
      <Box
        role={ 'group' }
        p={6}
        maxW={ '550px' }
        minW={ '230px '}
        w={ 'full' }
        bg={useColorModeValue('themeLight.cardBackground', 'themeDark.cardBackground') }
        boxShadow={ '2xl' }
        rounded={ 'lg' }
        pos={ 'relative' }
        zIndex={1}
      >
        <Stack align={'center'}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} color={useColorModeValue('themeLight.title', 'themeDark.title')}>
            { title }
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'} color={useColorModeValue('themeLight.number', 'themeDark.number')}>
              { Intl.NumberFormat().format(value) }
            </Text>
          </Stack>
          <Text color={useColorModeValue('themeLight.subtitle', 'themeDark.subtitle')} fontSize={'sm'}>
            { subtitle }
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}

export default Card