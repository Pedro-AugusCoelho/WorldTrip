import { Box, Image, Stack } from "@chakra-ui/react";
import Logo from '../../assets/Logo.svg';


export const Header = () => {
    return(
        <Stack
            w='100%'
            h='100px'
            alignContent='center'
            justifyContent='center'
        >
            <Box
              display='flex'
              justifyContent='center'
            >
                <Image src={Logo} alt='Logo' boxSize='150' />
            </Box>
        </Stack>
    )
}