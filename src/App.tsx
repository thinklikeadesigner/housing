import React, { useState } from 'react';
import data from './mockData.json';
import { PropertyContext } from './context/PropertyContext/index';
import Home from './pages/Home';
import { AmenityContext } from './context/AmenityContext';
import { getAmenities } from './components/helpers/index';


function App() {


	const [properties, setProperties] = useState<any>(data);
	const amenities = getAmenities(data);
	
	

	return (
		<div className="border-2 border-red-500 lg:container lg:mx-auto">
			<PropertyContext.Provider value={properties}>
				<AmenityContext.Provider value={amenities}>
					<Home/>
				</AmenityContext.Provider>
			</PropertyContext.Provider>
		</div>
	);
}

export default App;


