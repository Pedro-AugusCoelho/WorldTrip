import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Image, Stack, VStack } from "@chakra-ui/react";
import { IconButton } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/Logo.svg';

interface HeaderProps {
    showBackPage: boolean
}

export const Header = ({ showBackPage }:HeaderProps) => {
    const navigate = useNavigate();
    return(
        <VStack
            w='100%'
            h='100px'
            justifyContent={'space-around'}
            flexDirection='row'
        > 
        {showBackPage
            ?   <Box cursor={'pointer'}>
                    <ArrowBackIcon w={8} h={8} color="black.500" onClick={() => navigate(-1)} />
                </Box>
            
            :   <Box />
        }
        <Box>
            <Image src={Logo} alt='Logo' boxSize='150' />
        </Box>
        <Box />
        </VStack>
    )
}