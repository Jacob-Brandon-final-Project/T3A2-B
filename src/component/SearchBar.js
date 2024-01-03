import React, { useState } from 'react';
import { TextInput } from "flowbite-react";
import { BsSearch } from "react-icons/bs";
import axios from 'axios';


function SearchBarComponent () {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            // Send a Get request to the backend earch enpoint using axios
            const response = await axios.get('https://ashtonmernapp1.herokuapp.com/search?q=searchTerm');
            setSearchResults(response.data.results);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    }
    return (
        <div className="search-bar w-full flex justify-center items-center">
            <div className="max-w-xl">
                <div className="mb-2 block flex items-center">
                    <TextInput 
                        id="searchInput" 
                        type="text" 
                        placeholder="Search Products" 
                        className="py-3 px-4 w-full rounded-l-lg"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <button className="search-button bg grey-200 hover:bg-blue-300 py-2 px-4 rounded-r-lg" onClick={handleSearch}>
                        <BsSearch />
                    </button>
                </div>
            </div>
            <div>
                {searchResults.map((product) => (
                    <div key={product._id}>
                        <h3>{product.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchBarComponent;