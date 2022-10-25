import React, { useState } from 'react';
import CheckBox from './components/CheckBox';
import PropertyList from './components/PropertyList';
import  { amenitiesCheckBoxes, data} from './components/helpers/index';


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
			{amenities.map((amenity: any, index: any) => (
				<CheckBox
					key={index}
					isChecked={amenity.checked}
					checkHandler={() => updateCheckStatus(index)}
					label={amenity.name}
					index={index}
				/>
			))}
			<PropertyList/>
		</div>
	);
}

export default App;
