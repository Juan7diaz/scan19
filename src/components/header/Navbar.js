import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
} from '@chakra-ui/react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function Navbar({ title }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue('themeLight.primary', 'themeDark.primary')} px={6}>
    	<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
			<Text fontSize="2xl"
				fontFamily="monospace"
				fontWeight="bold"
				color={useColorModeValue('themeLight.logo', 'themeDark.logo')}
			>
				{ title}
			</Text>
			<Flex alignItems={'center'}>
				<Stack direction={'row'} spacing={7}>
					<Button
						aria-label='change page appearance'
						onClick={toggleColorMode}
						color={useColorModeValue('themeLight.icon', 'themeDark.icon')}
						bg={useColorModeValue('themeLight.bgIcon', 'themeDark.bgIcon')}
					>
						{colorMode === 'light' ?  <FiMoon /> : <FiSun />}
					</Button>
				</Stack>
			</Flex>
      </Flex>
    </Box>
  );
}