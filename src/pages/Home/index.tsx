import React, { useContext, useEffect, useState } from 'react';
import DropDownContainer from '../../components/DropDownContainer';
import PropertyList from '../../components/PropertyList';
import { AmenityContext } from '../../context/AmenityContext/index';
import { PropertyContext } from '../../context/PropertyContext/index';

// type Props = {};

const Home = () => {
	const amenitiesList = useContext<any>(AmenityContext);
	const [amenities, setAmenities] = useState(amenitiesList);
	const propertyList = useContext<any>(PropertyContext);
	const [properties, setProperties] = useState(propertyList);
	
	const updateCheckStatus = (index: number) => {
		const amenitiesStateList = amenities;
		const changeCheckedAmenities = amenitiesStateList.map((amenity: any, currentIndex: any) => currentIndex === index ? { ...amenity, checked: !amenity.checked } : amenity
		);
		setAmenities(
			changeCheckedAmenities
		);
	};


	const applyFilters = () => {
		let updatedPropertyList = propertyList;


		const amenityChecked = amenities.filter((item: any) => item.checked).map((item: any) => item.name.toLowerCase());
		console.log(amenityChecked);


		if (amenityChecked.length !== 0) {
			// updatedPropertyList = updatedPropertyList.filter((i:any) => i);
			updatedPropertyList = updatedPropertyList.filter((item: any) => JSON.stringify(item).includes(JSON.stringify(amenityChecked)));
		}
		
		console.log(updatedPropertyList);

		setProperties(updatedPropertyList);
	};

	useEffect(() => {
		applyFilters();
	}, [amenities]);
	

	return <div>
		<DropDownContainer amenities={amenities} updateCheckStatus={updateCheckStatus} />
		<PropertyList properties={ properties} />
	</div>;
};

export default Home;
