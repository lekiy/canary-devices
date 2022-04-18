import { useState, useEffect, useCallback } from "react";


function useAPIQuery(endpoint) {

    const [data, setData] = useState([]);
    const apiRoot = "https://canary-homework-test.herokuapp.com";
    const fetchData = useCallback(async () => {
        const response = await fetch(apiRoot+endpoint, {method: 'GET'});
        const responseData = await response.json();

        setData(responseData);
    }, [endpoint])

    useEffect(() => {fetchData()}, [fetchData]);
    
    return data;
}

export default useAPIQuery;