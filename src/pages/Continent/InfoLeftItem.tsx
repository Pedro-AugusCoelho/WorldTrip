import { VStack, Text } from "@chakra-ui/react"

interface InfoLeftItemProps {
    title: string;
    count: string;
}

const InfoLeftItem = ({count, title}:InfoLeftItemProps) => {
    return (
        <VStack
        justifyContent={'center'}
        alignItems={'center'}
        >
            <Text fontWeight={'semibold'} fontSize={'2xl'} textColor={'#FFBA08'}>{count}</Text>
            <Text fontWeight={'semibold'} fontSize={'2xl'} mt={'0px !important' } textColor={'#47585B'}>{title}</Text>
        </VStack>
    )
}

export default InfoLeftItem;