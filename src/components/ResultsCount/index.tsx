import React from 'react';


const ResultsCount = ({handleResultsPerPage}: any) => {
	return <div>
		<ul className="flex flex-col border-2 border-red-500">
			<li><button onClick={() => handleResultsPerPage(10)} >10</button></li>
			<li><button onClick={() => handleResultsPerPage(20)} >20</button></li>
			<li><button onClick={() => handleResultsPerPage(30)} >30</button></li>
			<li><button onClick={() => handleResultsPerPage(40)} >40</button></li>
			<li><button onClick={() => handleResultsPerPage(50)} >50</button></li>
		</ul>
	</div>;
};

export default ResultsCount;
