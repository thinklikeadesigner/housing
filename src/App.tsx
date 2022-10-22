import React, { useState } from 'react';
import CheckBox from './components/Home/common/CheckBox';
import PropertyList from './components/Home/common/PropertyList';
import  { amenitiesCheckBoxes, data} from './constants/helpers/index';


function App() {
	const [amenities, setAmenities] = useState(amenitiesCheckBoxes);
  


	const updateCheckStatus = (index: number) => {
		setAmenities(
			amenities.map((amenity: any, currentIndex: any) =>
				currentIndex === index
					? { ...amenity, checked: !amenity.checked }
					: amenity
			)
		);
	};

	return (
		<div className="App">
			{data.map((i: { name: any; }) => i.name)}
			{amenities.map((amenity: any, index: any) => (
				<CheckBox
					key={index}
					isChecked={amenity.checked}
					checkHandler={() => updateCheckStatus(index)}
					label={amenity.name}
					index={index}
				/>
			))}
			<pre>{JSON.stringify(amenities, null, 2)}</pre>
			<PropertyList/>
		</div>
	);
}

export default App;
