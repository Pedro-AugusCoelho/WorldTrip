export type ContinentType = {
    id: number
    title: string,
    subtitle: string
    image: string
    text: string
    infocontinent: { countcountries: string, countlanguage: string, countcity: string }
}

export const ContinentType = {
    id: 0, 
    title: '', 
    subtitle: '',
    image: '',
    text: '',
    infocontinent: { countcountries: '', countlanguage: '', countcity: '' }
}