import React, { useContext, useEffect, useState } from 'react';
import { AmenityMenu } from '../../components/AmenityMenu';
import DropDownContainer from '../../components/DropDownContainer';
import { Pagination } from '../../components/Paginate';
import PropertyList from '../../components/PropertyList';
import SearchBar from '../../components/SearchBar';
import Range from '../../components/Range';
// import { AmenityContext } from '../../context/AmenityContext/index';
import { PropertyContext } from '../../context/PropertyContext/index';
import ResultsCount from '../../components/ResultsCount/index';
import FilterPanel from '../../components/FilterPanel';
import RangeInput from '../../components/RangeInput/index';
import { alphaSort, getAmenities, getUnitAmenities, unitHasAmenities } from '../../components/helpers';
import { useLocalStorage } from '../../hooks/useLocalStorage';



// type Props = {};

const Home = () => {
	const [open, setOpen] = useState(false);
	const propertyList = useContext<any>(PropertyContext);
	const [amenities, setAmenities] = useLocalStorage('amenities', getAmenities(propertyList));
	const [properties, setProperties] = useLocalStorage('properties', propertyList);
	
	const [currentPage, setCurrentPage] = useLocalStorage('currentPage', 1);
	const [propertiesPerPage, setPropertiesPerPage] = useLocalStorage('propertiesPerPage', 10);
	const [searchInput, setSearchInput] = useState('');
	const [selectedRange, setSelectedRange] = useState([1000, 5000]);
	const [amenitiesArray, setAmenitiesArray] = useState([]);


	const updateCheckStatus = (index: number) => {
		const amenitiesStateList = amenities;
		const changeCheckedAmenities = amenitiesStateList.map((amenity: any, currentIndex: any) => currentIndex === index ? { ...amenity, checked: !amenity.checked } : amenity
		);

		const newAmenitiesArray = changeCheckedAmenities.filter((amenity: any) => amenity.checked).map((i:any) => i.name);


		setAmenities(
			changeCheckedAmenities
		);
		// setAmenitiesArray(newAmenitiesArray);
        
	};
    
	// to calculate which properties go on each page
	const indexOfLastProperty = currentPage * propertiesPerPage;
	const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
	const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

	const handleChangeRange = (_e: { target: { value: any } }, value: any) => setSelectedRange(value);
    
	// for text search
	const handleChangeInput = (_e: { target: { value: any } }) => setSearchInput(_e.target.value);


	// change page
	const paginate = (pageNumber: any) => {
		setCurrentPage(pageNumber);
	};

	// results per page
	const handleResultsPerPage = (num: any) => {
		setPropertiesPerPage(num);   // get current properties
	};


	const handleOpen = () => {
		setOpen(() => !open);
	};


	const applyFilters = () => {

		let updatedPropertyList = propertyList;

		const amenityChecked = amenities.filter((item: any) => item.checked).map((item: any) => item.name.toLowerCase());

		if (amenityChecked.length !== 0) {

			const reduceArr: any[] = [];
			updatedPropertyList.reduce((prev: any, current: any) => {

				const filteredUnits = current.units.filter((unit: any) => unitHasAmenities(getUnitAmenities(unit), amenityChecked));
				if (filteredUnits.length) {

					const filteredProperty = current.units.filter((unit: any) => unitHasAmenities(getUnitAmenities(unit), amenityChecked));
					current.units = filteredProperty;
					reduceArr.push(current);
					const h = reduceArr.length;
					console.log({reduceArr});
				}
			}, reduceArr);

			// reduceArr.reduce((prev: any, current: any) => {
			//  if (current.length !== 0) {
                    
			//      deleteEmpties.push(current);
			//  }
			// },deleteEmpties);
            
			updatedPropertyList = reduceArr;
		}
		// const minRange = selectedRange[0];
		// const maxRange = selectedRange[1];
		// updatedPropertyList = updatedPropertyList.filter((item: any) => item.range >= minRange && item.Range <= maxRange);

		if (searchInput) {
			updatedPropertyList = updatedPropertyList.filter(
				(item:any) => item.name.toLowerCase().search(searchInput.toLowerCase().trim()) !== -1
			);
		}

		updatedPropertyList = alphaSort(updatedPropertyList);
		console.log({updatedPropertyList});
		
		setProperties(updatedPropertyList);
	};

	useEffect(() => {
		applyFilters();
	}, [amenities, searchInput]);
    

	return <div className="flex flex-col">
		<FilterPanel>
			<SearchBar value={searchInput} changeInput={handleChangeInput} />
			<div className="mr-10"></div>
			<RangeInput min={0} max={40} onChange={() => console.log('hi')} />
			<div className="mr-10"></div>
			<DropDownContainer open={open} handleOpen={handleOpen} title={'Amenities'} >
				<AmenityMenu amenities={amenities} updateCheckStatus={updateCheckStatus} />
			</DropDownContainer>
			<div className="w-30"></div>
			<DropDownContainer open={open} handleOpen={handleOpen}  title={'Results per Page'} >
				<ResultsCount handleResultsPerPage={handleResultsPerPage}/>
			</DropDownContainer>
		</FilterPanel>
		<PropertyList properties={currentProperties} amenities={amenities} >
			<Pagination propertiesPerPage={propertiesPerPage} currentPage={currentPage} totalProperties={properties.length} paginate={paginate}/>
		</PropertyList>
	</div>;
};

export default Home;

