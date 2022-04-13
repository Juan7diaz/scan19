
export const getPercentage = ( confirmed, recovered, active, deaths ) => {

    /* porcentajs de los numeros */
    const percentageRecovered =  Number(((recovered/confirmed)*100).toFixed(2))
    const percentageDeaths = Number(((deaths/confirmed)*100).toFixed(2))
    const percentageActive = Number(((active/confirmed)*100).toFixed(2))

    return { percentageRecovered, percentageDeaths, percentageActive }
}