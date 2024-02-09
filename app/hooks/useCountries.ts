import countries from "world-countries"
import {findFlagUrlByIso2Code} from 'country-flags-svg';

const formattedCountries = countries.map((country)=>({
    value:country.cca2,
    label:country.name.common,
    flag:findFlagUrlByIso2Code(country.cca2),
    latlng:country.latlng,
    region:country.region
}))

const useCountries =()=>{
    const getAll =()=>formattedCountries;

    const getByValue =(value:string)=>{
        return formattedCountries.find((item)=>item.value===value);
    }
    return {
        getAll,getByValue
    }
}

export default useCountries;
