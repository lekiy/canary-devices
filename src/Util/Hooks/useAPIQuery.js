import { useState, useEffect, useCallback } from "react";

const apiRoot = "https://canary-homework-test.herokuapp.com";

function useAPIQuery(endpoint) {

    const [data, setData] = useState([]);
    const fetchData = useCallback(async () => {
        const response = await fetch(apiRoot+endpoint, {method: 'GET'});
        const responseData = await response.json();

        setData(responseData);
    }, [endpoint])

    useEffect(() => {fetchData()}, [fetchData]);
    
    return data;
}


// this would be functional code but the api doesn't support POST methods.
export function useAPIPost(endpoint, data){

    const sendData = useCallback(async () => {
        const response = await fetch(apiRoot+endpoint, {
            method: "POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...data})});
        const responseData = await response.json();

        return responseData;
    }, [endpoint, data])

    useEffect(() => console.log(`Cannot actually post data to Endpoint: ${endpoint} here is what would have been sent Data: ${data}`));
}

export default useAPIQuery;