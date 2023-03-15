export  interface Task{
    id: number;
    title: string;
    description: string;
    completed: boolean;
  }
  export interface CountryInfo{
    name: string,
    population: number,
    capital: string,
    flag: string,
    flagAlt: string,
    region: string
  }

 export  interface CountryProperties{
    name: {
        common: string,
        official: string,
        nativeName: {
            spa: string,
            commin: string
        }
    },
    population: number,
    flags: {
        png: string,
        alt: string
    }, 
    capital: string,
    region: string
}