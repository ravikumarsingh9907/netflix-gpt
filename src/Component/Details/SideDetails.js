import { useSelector } from "react-redux";

const SideDetails = () => {
    const { movieDetails } = useSelector(state => state.details);

    function addCommas(str) {
        // Reverse the string to simplify insertion logic
        str = str.toString().split('').reverse().join('');
        
        // Insert commas after every third character
        let formattedStr = '';
        for (let i = 0; i < str.length; i++) {
            if (i > 0 && i % 3 === 0) {
                formattedStr += ',';
            }
            formattedStr += str[i];
        }
        
        // Reverse the string back to its original order
        formattedStr = formattedStr.split('').reverse().join('');
        
        return formattedStr;
    }

    const budget = movieDetails && addCommas(movieDetails.budget);
    const revenue = movieDetails && addCommas(movieDetails.revenue);
    

    return (
        <div className="text-white">
            {movieDetails &&
                <>
                    <div className="mt-8">
                        <h2 className="font-bold text-2xl p-2">Status</h2>
                        <p className="px-2 text-xl font-thin">{movieDetails.status}</p>
                    </div>
                    <div className="mt-8">
                        <h2 className="font-bold text-2xl p-2">Original Language</h2>
                        <p className="px-2 text-xl font-thin">{movieDetails.spoken_languages[0].english_name}</p>
                    </div>
                    <div className="mt-8">
                        <h2 className="font-bold text-2xl p-2">Budget</h2>
                        <p className="px-2 text-xl font-thin">${budget}.00</p>
                    </div>
                    <div className="mt-8">
                        <h2 className="font-bold text-2xl p-2">Revenue</h2>
                        <p className="px-2 text-xl font-thin">{movieDetails.revenue === 0 ? 'Not known' : '$'+revenue+'.00'}</p>
                    </div>
                </>
            }
        </div>
    )
}

export default SideDetails;