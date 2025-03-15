import { useState, useEffect } from 'react';

export const useFetch = (url = '') => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true
        });

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.error) {
                setState((prevState) => ({
                    ...prevState,
                    isLoading: false,
                    hasError: true
                }));
                console.log("Error: ", data.error);
                return;
            }

            setState((state) => ({
                ...state,
                data,
                isLoading: false,
                hasError: null
            }));
        } catch (error) {
            setState((state) => ({
                ...state,
                isLoading: false,
                hasError: true
            }));
            console.error("Fetch error: ", error);
        }
    };

    useEffect(() => {
        getFetch();
        return () => {};
    }, [url]);

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
};