import { getPercentage } from './getPercentage'

export const getTexts = ( confirmed, recovered, active, deaths, country = false ) => {

    const { percentageRecovered, percentageDeaths, percentageActive } = getPercentage( confirmed, recovered, active, deaths )

    const title = {
        confirmed: country ? `TOTAL OF INFECTED IN ${country.toUpperCase()}` : `GLOBAL CORONAVIRUS INFECTIONS`,
        active: "CURRENTLY INFECTED",
        recovered: "TOTAL RECOVERED",
        deaths: 'TOTAL DEATHS'
    }

    const  subtitle = {
        confirmed: country ? `The total number of people who have been diagnosed with the coronavirus in ${country}.` :'The total amount of people that have globally been diagnosed with the coronavirus.',
        active: `${percentageActive}% of the infected people are still sick.`,
        recovered: `${percentageRecovered}% of the infected people have recovered.`,
        deaths: `${percentageDeaths}% of the infected people died.`,
    }

    return [ title, subtitle ]
}

