import { useEffect, useState } from "react";

//this hook will return some data. We want to call some API, using fetch, and it loads the data when a component is mounted.

//`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json` this is the url of the currency converter API, which returns a JSON/string object.
function useCurrencyInfo(currency)
{
    useEffect(()=>{
        const [data,setData]= useState({})
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response)=>response.json()) //getting the string response from api to JSON.
        .then((response)=>setData(response[currency]))
    },[currency]) //storing the data using the useState to even reflect in the UI.
    return data
}

export default useCurrencyInfo; //exporting the entire method. 