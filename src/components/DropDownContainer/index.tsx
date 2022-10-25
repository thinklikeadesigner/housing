import React, { useState } from 'react';
import CheckBox from '../CheckBox';
import { amenitiesList } from '../helpers';

// type Props = {};

const DropDownContainer = () => {

	const [amenities, setAmenities] = useState(amenitiesList);
  


	const updateCheckStatus = (index: number) => {
		setAmenities(
			amenities.map((amenity: any, currentIndex: any) =>
				currentIndex === index
					? { ...amenity, checked: !amenity.checked }
					: amenity
			)
		);
	};


	
	return <div>			{amenities.map((amenity: any, index: any) => (
		<CheckBox
			key={index}
			isChecked={amenity.checked}
			checkHandler={() => updateCheckStatus(index)}
			label={amenity.name}
			index={index}
		/>
	))}</div>;
};

export default DropDownContainer;
