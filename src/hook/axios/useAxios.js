import axios from "axios";
import { useEffect, useState } from "react";

export default function useAxios(params) {
    const [response, setResponse] = useState();
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();

    axios.defaults.baseURL = "http://localhost:8000";

    async function fetchData(url) {
        try {
            const response = await axios(url);
            setResponse(response.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData(params);
    }, [params]);

    return {
        response,
        isLoading,
        error,
    };
}
