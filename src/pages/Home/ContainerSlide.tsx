import { Heading, HStack, Spacer } from "@chakra-ui/react"


export const ContainerSlide = () => {
    return(
        <HStack
           textAlign='center'
           py='1.75rem'
        >
            <Heading color='#47585B'>
                Vamos nessa?
                <Spacer />
                Então escolha seu continente
            </Heading>
        </HStack>
    )
}