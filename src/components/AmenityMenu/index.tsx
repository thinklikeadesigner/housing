import React from 'react';
import CheckBox from '../CheckBox';
import { IAmenityCheckbox } from '../helpers';

type amenitiesProps = {
	amenities: IAmenityCheckbox[],
	updateCheckStatus: (i: number) => void;
}



export const AmenityMenu = ({amenities, updateCheckStatus}: amenitiesProps) => {
	return<div className="p-2">
		{amenities.map((amenity: IAmenityCheckbox, index) => (
			<CheckBox
				
				key={index}
				isChecked={amenity.checked}
				checkHandler={() => updateCheckStatus(index)}
				label={amenity.name}
				index={index} />
		))}</div>;
};
