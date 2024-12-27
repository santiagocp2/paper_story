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
        <div className="search">
            <input
                type="text"
                placeholder="Buscar libro"
                onChange={handleChange}
                autoComplete="off"
                value={search}
                className="search__input"
            />
            <div className="search__icon">
                {search === "" ? (
                    <BsSearch />
                ) : (
                    <RxCross1 onClick={handleClose} />
                )
                }
            </div>
            {search ? <div className="search__result">
                {searchData.slice(0, 5).map((book, index) => (
                    <Link key={index} to={`/book/${book.id}`}>
                        <a href='#' className="search__suggestion-line" target="_blank">{book.title}</a>
                    </Link>
                ))}
            </div> : () => { }
            }
        </div>
    );
}

export default SearchBar;