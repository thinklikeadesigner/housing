import React, { useEffect } from 'react';
import left from '../../left-arrow.png';
import right from '../../right-arrow.png';
import DropDownContainer from '../DropDownContainer';
import ResultsCount from '../ResultsCount';
export const Pagination = ({checkIfEmpty,isResultSelected, handleResultsPerPage, propertiesPerPage, currentPage, totalProperties, paginate, children}: any) => {
	
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalProperties / propertiesPerPage); i++) {
		pageNumbers.push(i);
        
	}


	useEffect(() => {
		checkIfEmpty();
	}, []);
	
	

	return <section className="py-8">

		<nav className="pb-20">
			<div className="flex justify-end">
			</div>
			<ul className="flex justify-center align-middle list-none">
				{pageNumbers.map(number => (
					<li key={number} className="px-2">
						{number === currentPage ? <a className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-400" onClick={() => paginate(number)} href="!#" >
							{number}
						</a> : 		<a className="px-4 py-2 text-white bg-blue-200 rounded hover:bg-blue-400" onClick={() => paginate(number)} href="!#" >
							{number}
						</a>}
					</li>
				))}
			</ul>

		</nav>
		{children}
	</section>
	;
};
