import React, { useState, useEffect } from 'react';
import data from './mockData.json';
import { PropertyContext } from './context/PropertyContext/index';
import Home from './pages/Home';
// import { AmenityContext } from './context/AmenityContext';
import { alphaSort } from './components/helpers/index';


function App() {

	

	const [properties, setProperties] = useState<any>(() => alphaSort(data));
	

	return (
		<div className="px-4 lg:container lg:mx-auto">
			<PropertyContext.Provider value={properties}>
				<Home/>
			</PropertyContext.Provider>
		</div>
	);
}

export default App;


