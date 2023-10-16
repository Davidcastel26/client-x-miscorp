import { useColorMode} from '@chakra-ui/color-mode'
import { Button } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
 
const ToggleColorMode = () => {

    const { colorMode, toggleColorMode } = useColorMode()

  return (
    <li className='pl-4'>
    <Button
      pos="absolute"
      top="3"
      right="0"
      onClick={() => toggleColorMode()}>
        {
            colorMode === "dark" ? <SunIcon color="orange.400" /> : <MoonIcon color="blue.700"/>
        }

    </Button>    
    </li>
  )
}

export default ToggleColorMode;