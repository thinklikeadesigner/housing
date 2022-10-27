import React, { useContext, useState } from 'react';
import CheckBox from '../CheckBox';
import { PropertyContext } from '../../context/PropertyContext';
import { getAmenities } from '../helpers';



const DropDownContainer = () => {

	const properties = useContext(PropertyContext);
	const list = getAmenities(properties);
	const [amenities, setAmenities] = useState(list);
	
  

	const updateCheckStatus = (index: number) => {
		setAmenities(
			amenities.map((amenity: any, currentIndex: any) => currentIndex === index ? { ...amenity, checked: !amenity.checked } : amenity
			)
		);
	};

	return <div>
		{amenities.map((amenity: any, index: any) => (
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
