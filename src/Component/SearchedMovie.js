import { useSelector } from "react-redux";
import Card from "./Card";
import Header from "./Header";

const SearchedMovie = () => {
    const { searchData, searchText } = useSelector((state) => state.functionality);
    return (
        <div className="">
            <Header />
            <div className="text-white mt-11 p-10">
                <h2 className="text-3xl ml-4">Search result for <span className="underline italic">{searchText}</span></h2>
            </div>
            <div className="flex flex-wrap px-10 justify-start">
                {searchData && searchData.map(movie => {
                    if (movie.poster_path !== null) {
                        return <Card movie={movie} />
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
}

export default SearchedMovie;