import React from 'react';
import CheckBox from '../CheckBox';


export const AmenityMenu = ({amenities, updateCheckStatus}: any) => {
	return<div className="p-2">
		{amenities.map((amenity: any, index: any) => (
			<CheckBox
				
				key={index}
				isChecked={amenity.checked}
				checkHandler={() => updateCheckStatus(index)}
				label={amenity.name}
				index={index} />
		))}</div>;
};
