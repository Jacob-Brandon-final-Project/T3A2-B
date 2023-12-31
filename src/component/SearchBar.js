import { TextInput } from "flowbite-react";
import { BsSearch } from "react-icons/bs";

function SearchBarComponent () {
    return (
        <div className="search-bar w-full flex justify-center items-center">
            <div className="max-w-xl">
                <div className="mb-2 block flex items-center">
                    <TextInput id="searchInput" type="text" placeholder="Search Products" className="py-3 px-4 w-full rounded-l-lg"/>

                    <button className="search-button bg grey-200 hover:bg-blue-300 py-2 px-4 rounded-r-lg" >
                        <BsSearch />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SearchBarComponent;