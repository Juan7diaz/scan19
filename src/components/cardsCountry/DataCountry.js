import Card from '../card/Card'
import { getTexts } from '../../helpers/getTexts';
import { getNumbersCases } from '../../helpers/getNumbersCases';
import { SimpleGrid, Center, Heading } from '@chakra-ui/react'
import Loading from '../loading/Loading'

const DataCountry = ({loading, data, country}) => {

    const [ confirmed,  recovered, deaths, active ] = getNumbersCases(data)
    const [ title, subtitle ] = getTexts(confirmed, recovered, active, deaths, country)

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
                <>
                  <Heading my={10} textAlign={'center'}>SHOWING DATA FROM {country.toUpperCase()}</Heading>
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
                </>
            )
        }
    </>
  );
};

export default DataCountry;
