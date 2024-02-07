import { useEffect } from "react"
import options from "../Utils/constants";
import { useDispatch } from "react-redux";

const useFetchMovies = (url, state) => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`${url}`, options)
            .then(response => {
                return response.json()
            })
            .then(response => {
                dispatch(state(response.results));
            })
            .catch(err => {
                console.error(err)
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export default useFetchMovies;