import './styles.css';
import React from 'react';
type Props = {
  value: any;
  changeInput: any;
};

const SearchBar = ({ value, changeInput }: Props) => {
	return (
		<div className="searchBar-wrap">
			<input
				type="text"
				placeholder="Woodland Hills"
				value={value}
				onChange={changeInput}
			/>
		</div>
	);
};

export default SearchBar;
