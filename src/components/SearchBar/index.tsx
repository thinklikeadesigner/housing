import './styles.css';
import React from 'react';
type Props = {
  value: any;
  changeInput: any;
};

const SearchBar = ({ value, changeInput }: Props) => {
	return (
		<div className="border-2 border-red-500 searchBar-wrap">
			<input
				type="text"
				placeholder="Property Name"
				value={value}
				onChange={changeInput}
			/>
		</div>
	);
};

export default SearchBar;
