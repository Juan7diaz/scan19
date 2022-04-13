import Card from '../card/Card'
import { useFetch } from '../../Hooks/useFetch';
import { getTexts } from '../../helpers/getTexts';
import { getNumbersCases } from '../../helpers/getNumbersCases';
import { SimpleGrid, Center } from '@chakra-ui/react'
import Loading from '../loading/Loading'

const GlobalDataCards = () => {

    //nos trae la data de la api
    const { data, loading} = useFetch('https://covid19.mathdro.id/api')

    //obtenemos la cantidad de confirmados, recuperado, muerto y activos
    const [ confirmed,  recovered, deaths, active ] = getNumbersCases(data)

    //getTexts nos trae un array de dos posiciones [title, subtitle] donde cada uno es un objeto que contiene los textos a utilizar
    const [ title, subtitle ] = getTexts( confirmed, recovered, active, deaths)

    return (
        <>
            {
                loading ?
                (
                    <Center  h='100px'>
                        <Loading />
                    </Center>
                ):
                (
                    <SimpleGrid columns={[1, 2, 3]} spacing='40px' px={6}>
                        <Card
                            value={ confirmed  }
                            title={ title.confirmed }
                            subtitle={ subtitle.confirmed }
                        />
                        <Card
                            value={ active  }
                            title={ title.active }
                            subtitle={ subtitle.active }
                        />
                        <Card
                            value={ recovered  }
                            title={ title.recovered }
                            subtitle={ subtitle.recovered }
                        />
                        <Card
                            value={ deaths }
                            title={ title.deaths }
                            subtitle={ subtitle.deaths }
                            />
                    </SimpleGrid>
                )
            }
        </>
    )
}

export default GlobalDataCards