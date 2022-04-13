import  {useState} from 'react'
import GlobalDataCards from './components/cardsGlobal/GlobalDataCards'
import CardsCountry from './components/cardsCountry/CardsCountry'
import Navbar from './components/header/Navbar'
import { Box } from '@chakra-ui/react';
import SearchBar from './components/searchBar/SearchBar';
import ButtonGeneric from './components/ButtonGeneric/ButtonGeneric';

function App() {

  const [country, setCountry] = useState('')

  return (
    <>
      <Box bg={ 2} minH={'100vh'}>
          <Navbar title={ "SCAN19" }/>
          <SearchBar setCountry={setCountry}/>
          {
            country ?
              (
              <>
                <ButtonGeneric text={'Back Home'} setCountry={setCountry}/>
                <CardsCountry country={country} />
                <div style={{paddingTop: 60}}></div>
              </>
              )
              :(
                <GlobalDataCards />
              )
          }
      </Box>
    </>
  );
}

export default App;
