import React, { useContext, useState } from 'react';
import CheckBox from '../CheckBox';
import { PropertyContext } from '../../context/PropertyContext';
import { getAmenities } from '../helpers';
import { AmenityContext } from '../../context/AmenityContext';



const DropDownContainer = ({amenities, updateCheckStatus}: any) => {


	
  



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
