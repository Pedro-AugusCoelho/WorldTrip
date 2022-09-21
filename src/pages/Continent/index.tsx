import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/configAxios";
import { ContinentType } from "../../types";


const Continent = () => {
    const { id } = useParams()
    const [continent , setContinent] = useState<ContinentType>()

    useEffect(() => {
        const recoverContinentSelected = () => {
            api.get(`continent/${id}`).then(response => {
                setContinent(response.data)
            })
        }
        recoverContinentSelected()
    },[]);

    return(
        <Box>
            Continent {id}
        </Box>
    )
}

export default Continent;