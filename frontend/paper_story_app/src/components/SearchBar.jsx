import React, { useState, useEffect, useContext } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';
import '../styles/SearchBar.css';

const SearchBar = () => {
    const { books } = useContext(GlobalContext);
    const [search, setSearch] = useState('');
    const [searchData, setSearchData] = useState([]);

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleClose = () => {
        setSearch('');
        setSearchData([]);
    }

    useEffect(() => {
        if (search !== '') {
            const data = books.filter((book) => {
                return book.title.toLowerCase().includes(search.toLowerCase());
            });
            setSearchData(data);
        }
    }, [search]);
    return (
        <div className="lg:flex hidden w-full max-w-[500px]">
            <input
                type="text"
                placeholder="Buscar libro"
                onChange={handleChange}
                autoComplete="off"
                value={search}
                className="border-2 border-gray-500 px-6 py-2 w-full dark:text-dark white:bg-slate-800"
            />
            <div className="bg-gray-500 text-white text-[26px] grid place-items-center px-4">
                {search === "" ? (
                    <BsSearch />
                ) : (
                    <RxCross1 onClick={handleClose} />
                )
                }
            </div>
            {search ? <div className="search_result">
                {searchData.slice(0, 5).map((book, index) => (
                    <Link to={`/book/${book.id}`}>
                        <a className="search_suggestion_line" target="_blank" key={index}>{book.title}
                        </a>
                    </Link>
                ))}
            </div> : () => { }
            }
        </div>
    );
}

export default SearchBar;