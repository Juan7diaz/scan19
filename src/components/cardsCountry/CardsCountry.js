import { useFetch } from '../../Hooks/useFetch';
import DataCountry from './DataCountry';


const CardsCountry = ({country, setCountry}) => {

    //nos trae la data de la api
    const { data, loading} = useFetch(`https://covid19.mathdro.id/api/countries/${encodeURI(country)}`)

    //nos dice si el pais que se le paso al endpoint si es correcto
    const { error } = !!data && data

  return (
    <>
        { error  ?
            (
                <p> {error.message} </p>
            ) :
            (
                <DataCountry  loading={loading} data={data} country={country}/>
            )
        }

    </>
  );
};

export default CardsCountry;
