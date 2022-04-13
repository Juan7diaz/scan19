import { Button, Center, useColorModeValue, useColorMode} from '@chakra-ui/react'
import { MdKeyboardBackspace } from "react-icons/md"

const ButtonGeneric = ({text, setCountry}) => {

    const { colorMode } = useColorMode();
    let style = (colorMode === 'light') ? { background: '#10ac84' } : { background: '#feca57'}

    return (
        <Center>
            <Button
                leftIcon={<MdKeyboardBackspace />}
                style={style}
                variant='solid'
                color={useColorModeValue('themeLight.SearchButton', 'themeDark.SearchButton')}
                onClick={() => setCountry('')}
            >
                {text}
            </Button>
        </Center>
    );
};

export default ButtonGeneric;
