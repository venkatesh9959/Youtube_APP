import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleChange } from "../store/ToggleSlice";
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { YOUTUBE_AUTOCOMPLETE_API } from "../utilities/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionslist, setSuggestionsList] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const dispatch = useDispatch();

  const handleToggle = (e) => {
    console.log(e)
    dispatch(toggleChange());
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    let timer = setTimeout(() => getSuggestionsQuery(), 200);

    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);

  const getSuggestionsQuery = async () => {
    try {
      const response = await fetch(YOUTUBE_AUTOCOMPLETE_API + searchQuery);
      const data = await response.json();
      setSuggestionsList(data[1]);
    } catch (error) {}
  };

  return (
    <div className="header-main">
      <div className="header">
        <div className="col-3 heade-Logo-section">
          <button>
            <CiMenuBurger className="menu-icon"  onClick={(e) => handleToggle(e)} />
          </button>
          <Link to="/">
            <img
              className="Youtube_img"
              alt="youtube-logo"
              src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
            />
          </Link>
        </div>
        <div className="col-9 search">
          <input
            type="text"
            className=""
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => handleSearch(e)}
            onFocus={() => setShowSuggestions(true)}
          
          />
          <button className="button-text">
            <CiSearch />
          </button>
        </div>
        <div className="col-3">
          <Link to="https://accounts.google.com/">
            <button className="user">
              <FaRegUserCircle className="user_icon" />
              Sign In
            </button>
          </Link>
        </div>
      </div>
      
      {showSuggestions && suggestionslist?.length > 0 && (
        <div className="suggestions">
          {suggestionslist.map((element, index) => (
            <div key={index} className="suggestions-list">
              {element}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
