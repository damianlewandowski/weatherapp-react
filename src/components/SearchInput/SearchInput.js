import React from 'react';
import propTypes from 'prop-types';

import './SearchInput.css';

const SearchInput = (props) => (
  <input
    className="SearchInput" 
    type="text" 
    placeholder="e.g Gdansk, PL"
    onChange={props.handleInput}
    value={props.value}
    required
  />
);

SearchInput.propTypes = {
  onChange: propTypes.func,
  value:    propTypes.string,
}

export default SearchInput;
