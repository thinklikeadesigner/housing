import React, { useState } from 'react';
import DropDownContainer from './components/DropDownContainer';
import PropertyList from './components/PropertyList';
import data from './mockData.json';
import { PropertyContext } from './context/PropertyContext/index';
import Home from './pages/Home';


function App() {


	const [properties, setProperties] = useState<any>(data);
	
	

	return (
		<div className="App">
			<PropertyContext.Provider value={properties}>
				<Home/>
			</PropertyContext.Provider>
		</div>
	);
}

export default App;
