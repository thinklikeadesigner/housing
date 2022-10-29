import React, { useContext, useEffect, useState } from 'react';
import DropDownContainer from '../../components/DropDownContainer';
import { Pagination } from '../../components/Paginate';
import PropertyList from '../../components/PropertyList';
import SearchBar from '../../components/SearchBar';
import { AmenityContext } from '../../context/AmenityContext/index';
import { PropertyContext } from '../../context/PropertyContext/index';

// type Props = {};

const Home = () => {
	const amenitiesList = useContext<any>(AmenityContext);
	const [amenities, setAmenities] = useState(amenitiesList);
	const propertyList = useContext<any>(PropertyContext);
	const [properties, setProperties] = useState(propertyList);

	const [currentPage, setCurrentPage] = useState(1);
	const [propertiesPerPage, setPropertiesPerPage] = useState(10); // 10 20 30 40 50 100
	const [searchInput, setSearchInput] = useState('');
	
	const handleChangeInput = (_e: { target: { value: any } }) => setSearchInput(_e.target.value);


	const updateCheckStatus = (index: number) => {
		const amenitiesStateList = amenities;
		const changeCheckedAmenities = amenitiesStateList.map((amenity: any, currentIndex: any) => currentIndex === index ? { ...amenity, checked: !amenity.checked } : amenity
		);
		setAmenities(
			changeCheckedAmenities
		);
	};
	
	const indexOfLastProperty = currentPage * propertiesPerPage;
	const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
	const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);
	
	// change page
	const paginate = (pageNumber: any) => {
		setCurrentPage(pageNumber);
		setTimeout(() => {
			console.log('This will run after 1 second!');
		}, 1000);
		console.log(pageNumber);
	};
	const handleResultsPerPage = (num: any) => {
		setPropertiesPerPage(num);	// get current properties
		console.log('num');
	};

		

	const applyFilters = () => {

		let updatedPropertyList = propertyList;
		const amenityChecked = amenities.filter((item: any) => item.checked).map((item: any) => item.name.toLowerCase());
		// IDEA filter at the unit level and if there's no unit don't show the unit. if there's no units don't show the property
		if (amenityChecked.length !== 0) {
			// updatedPropertyList = updatedPropertyList.filter((i:any) => i);
			// BUG needs to find amenities, but not in exact same order
			updatedPropertyList = updatedPropertyList.filter((item: any) => JSON.stringify(item).includes(JSON.stringify(amenityChecked)));
			// updatedPropertyList = updatedPropertyList.filter((item: any) => amenityChecked.every((e: any) => JSON.stringify(item).includes(e)));
		}

		// if (searchInput) {
		// 	updatedPropertyList = updatedPropertyList.filter(
		// 		(item:any) => item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !== -1
		// 	);
		// }

		if (searchInput) {
			console.log(searchInput);
			updatedPropertyList = updatedPropertyList.filter(
				(item:any) => item.name.toLowerCase().search(searchInput.toLowerCase().trim()) !== -1
			);
		}

		console.log(updatedPropertyList);
		updatedPropertyList = updatedPropertyList.sort((a:any, b:any) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
		setProperties(updatedPropertyList);
	};


	useEffect(() => {
		applyFilters();
	}, [amenities, searchInput]);
	

	return <div>
		<h1>{currentPage}</h1>
		<SearchBar value={searchInput} changeInput={handleChangeInput} />
		<Pagination handleResultsPerPage={handleResultsPerPage} propertiesPerPage={propertiesPerPage} totalProperties={properties.length} paginate={paginate}/>
		<DropDownContainer amenities={amenities} updateCheckStatus={updateCheckStatus} />
		<PropertyList properties={currentProperties} />
	</div>;
};

export default Home;
