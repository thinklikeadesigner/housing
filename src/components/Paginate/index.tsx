import React from 'react';
import './styles.css';

export const Pagination = ({propertiesPerPage, totalProperties, paginate, handleResultsPerPage}: any) => {

	const pageNumbers = [];
	for (let i = 1; i < Math.ceil(totalProperties / propertiesPerPage); i++) {
		pageNumbers.push(i);
        
	}

	return <nav className="border-2 border-red-500">
		<ul>
			<h1  className="w-10">pages</h1 >
			{pageNumbers.map(number => (
				<li key={number} >
					<a className=" hover:bg-sky-500" onClick={() => paginate(number)} href="!#" >
						{number}
					</a>
				</li>
			))}
		</ul>
	</nav>;
};
