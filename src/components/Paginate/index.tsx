import React from 'react';

export const Pagination = ({propertiesPerPage, totalProperties, paginate, handleResultsPerPage}: any) => {

	const pageNumbers = [];

	for (let i = 1; i < Math.ceil(totalProperties / propertiesPerPage); i++) {
		pageNumbers.push(i);
        
	}

	return <nav >
		<h1>hi</h1>
		<ul>
			<li>
				<button onClick={() => handleResultsPerPage(10)}>10</button>
			</li>
			<li>
				<button onClick={() => handleResultsPerPage(20)}>20</button>
			</li>
			<li>
				<button onClick={() => handleResultsPerPage(30)}>30</button>
			</li>
			<li>
				<button onClick={() => handleResultsPerPage(40)}>40</button>
			</li>
			<li>
				<button onClick={() => handleResultsPerPage(50)}>50</button>
			</li>
		</ul>
		<ul >
			{pageNumbers.map(number => (
				<li key={number} >
					<a onClick={() => paginate(number)} href="!#" >
						{number}
					</a>
				</li>
			))}

		</ul>

	</nav>;
};
