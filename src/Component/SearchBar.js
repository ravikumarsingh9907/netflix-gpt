import { useDispatch } from "react-redux";
import { toggleSearchBar } from "../Utils/functionalitySlice";
import { useRef, useState } from "react";
import { addSearchData, clearSearchData, addSearchText } from "../Utils/functionalitySlice";
import getSearchResult from "../Utils/openai";
import options from "../Utils/constants";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [placeHolder, setPlaceHolder] = useState('Ex: Fighter');

    const handleCloseButton = () => {
        dispatch(toggleSearchBar(true))
    }

    const addSearchedData = (data) => {
        dispatch(clearSearchData());
        Promise.all(data.map(data => {
            return fetch(`https://api.themoviedb.org/3/search/movie?query=${data}&include_adult=false&language=en-US&page=1`, options)
                .then(response => {
                    return response.json();
                });
        })).then(response => {
            response.forEach(res => {
                dispatch(addSearchData(res.results));
            });
        });
    }

    const searchText = useRef(null);
    const option = useRef(null);

    const handleSelect = (e) => {
        if (e.target.value === 'gpt') {
            setPlaceHolder("Ex: Best hindi comedy movies.");
        } else if (e.target.value === 'normal') {
            setPlaceHolder("Ex: Fighter")
        }
    }

    const handleSearch = () => {
        if (option.current.value === 'normal') {
            addSearchedData([searchText.current.value]);
        } else if (option.current.value === 'gpt') {
            const preparePrompt = `Act as movie recommendation system. Please suggest ${searchText.current.value}.
            Only give maximum five names and name should be comma seprated.
            Example: Fighter,Gadar,Ram Ratan Dhan Payo,Golmaal,Jab we met.`

            getSearchResult(preparePrompt).then(result => {
                addSearchedData(result.split(','));
            });
        }

        dispatch(addSearchText(searchText.current.value));
        handleCloseButton();
        navigate('/search');
    }

    return (
        <>
            <div className="bg-black absolute top-0 left-0 p-60 w-dvw opacity-85 z-40"></div>
            <div className="absolute top-56 left-1/2 -translate-x-1/2 flex gap-2 z-50">
                <input ref={searchText} className="w-96 py-4 p-2 text-xl rounded border-4 border-red-700 bg-gray-900 text-white outline-none" placeholder={placeHolder} type="text" />
                <select ref={option} className="rounded px-4 bg-white text-gray-500 font-medium font-lg outline-none" onClick={handleSelect}>
                    <option className="text-lg" value='normal'>Normal</option>
                    <option className="text-lg" value='gpt'>Advanced</option>
                </select>
                <button className="bg-red-500 px-8 text-xl text-white font-medium rounded" onClick={handleSearch}>Search</button>
            </div>
            <div className="absolute text-gray-300 right-0 z-50" onClick={handleCloseButton}>
                <i className='bx bx-x text-5xl mr-10'></i>
            </div>
        </>
    )
}

export default SearchBar;