

export const getNumbersCases = (data) => {

    // devuelve un array con la cantidad de confirmado, recuperado, muerto y activo
    const { confirmed, recovered, deaths } = !!data && data;
    const { value: confirmedValue } = !!confirmed && confirmed
    const { value: recoveredValue } = !!recovered && recovered
    const { value: deathsValue } = !!deaths && deaths 
    const active = (!!confirmed && !!recovered && !!deaths) && confirmedValue - (recoveredValue + deathsValue)


    return [confirmedValue, recoveredValue, deathsValue, active]
}