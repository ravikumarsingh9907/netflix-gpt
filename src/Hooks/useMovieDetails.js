import { useEffect } from "react";
import options from "../Utils/constants";
import { useDispatch } from "react-redux";

const useMovieDetails = (url, state) =>{
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`${url}`, options)
        .then(response => {
            return response.json()
        })
        .then(result => {
            dispatch(state(result))
        });
    })
}

export default useMovieDetails;