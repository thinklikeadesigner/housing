import React, { useState, useEffect } from 'react';
import data from './mockData.json';
import { PropertyContext } from './context/PropertyContext/index';
import Home from './pages/Home';
import { alphaSort } from './components/helpers/index';
import { IProperty } from './types';


function App() {

	

	const [properties, setProperties] = useState<IProperty[]>(() => alphaSort(data));
	

	return (
		<div className="px-4 lg:container lg:mx-auto">
			<PropertyContext.Provider value={properties}>
				<Home/>
			</PropertyContext.Provider>
		</div>
	);
}

export default App;


