import React, { useContext, useEffect, useState } from 'react';
import { AmenityMenu } from '../../components/AmenityMenu';
import DropDownContainer from '../../components/DropDownContainer';
import { Pagination } from '../../components/Paginate';
import PropertyList from '../../components/PropertyList';
import SearchBar from '../../components/SearchBar';
import { PropertyContext } from '../../context/PropertyContext/index';
import ResultsCount from '../../components/ResultsCount/index';
import FilterPanel from '../../components/FilterPanel';
import RangeInput from '../../components/RangeInput/index';
import { alphaSort, getAmenities, getOverallMinMax, getUnitAmenities, isUnitInRange, unitHasAmenities, unitRange } from '../../components/helpers';
import { useLocalStorage } from '../../hooks/useLocalStorage';




const Home = () => {
	const propertyList = useContext<any>(PropertyContext);
	const overAllMin = getOverallMinMax(propertyList)[0];
	const overAllMax = getOverallMinMax(propertyList)[1];
	const [amenities, setAmenities] = useLocalStorage('amenities', getAmenities(propertyList));
	const [properties, setProperties] = useLocalStorage('properties', propertyList); 
	const [currentPage, setCurrentPage] = useLocalStorage('currentPage', 1);
	const [propertiesPerPage, setPropertiesPerPage] = useLocalStorage('propertiesPerPage', 10);
	const [searchInput, setSearchInput] = useState('');
	const [selectedMin, setSelectedMin] = useLocalStorage('selectedMin', overAllMin);
	const [selectedMax, setSelectedMax] = useLocalStorage('selectedMax', overAllMax);
	const [isResultSelected, setIsResultSelected] = useState(false);
	const [count, setCount] = useState(0);



	const getMin = ((min: any) => {
		setSelectedMin(min);
	});
	const getMax = ((max: any) => {
		setSelectedMax(max);
	});

	const updateCheckStatus = (index: number) => {
		const amenitiesStateList = amenities;
		const changeCheckedAmenities = amenitiesStateList.map((amenity: any, currentIndex: any) => currentIndex === index ? { ...amenity, checked: !amenity.checked } : amenity
		);
		setAmenities(
			changeCheckedAmenities
		);
		const count = changeCheckedAmenities.filter((item:any) => 	item.checked === true);

		setCount(count.length);
	};

	
    
	// to calculate which properties go on each page
	const indexOfLastProperty = currentPage * propertiesPerPage;
	const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
	const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

	const checkIfEmpty = () => {
		if (currentProperties.length === 0)
		{
			setCurrentPage(1);
		}
	};


	// for text search
	const handleChangeInput = (_e: { target: { value: any } }) => setSearchInput(_e.target.value);


	// change page
	const paginate = (pageNumber: any) => {
		setCurrentPage(pageNumber);
	};

	// results per page
	const handleResultsPerPage = (num: any) => {
		setPropertiesPerPage(num);   // get current properties
		setIsResultSelected(true);
	};




	const applyFilters = () => {
		

		const unmutatedPropertyList = JSON.stringify(propertyList);
		let updatedPropertyList = JSON.parse(unmutatedPropertyList);
		
		const amenityChecked = amenities.filter((item: any) => item.checked).map((item: any) => item.name.toLowerCase());
		
		if (amenityChecked.length !== 0) {
			
			const amenityArr: any[] = [];
			updatedPropertyList.reduce((prev: any, current: any) => {
				
				const filteredUnits = current.units.filter((unit: any) => unitHasAmenities(getUnitAmenities(unit), amenityChecked));
				if (filteredUnits.length) {
					
					const filteredProperty = current.units.filter((unit: any) => unitHasAmenities(getUnitAmenities(unit), amenityChecked));
					current.units = filteredProperty;
					amenityArr.push(current);
					
				}
			}, amenityArr);

					
			updatedPropertyList = amenityArr;
		}
		const minRange = selectedMin;
		const maxRange = selectedMax;
		const rangeArr: any[] = [];

		updatedPropertyList.reduce((prev: any, current: any) => {

			const filtered = current.units.filter((unit: any) => isUnitInRange(unitRange(unit), [minRange, maxRange]));
			if (filtered.length) {
				const filteredUnits = current.units.filter((unit: any) => isUnitInRange(unitRange(unit), [minRange, maxRange]));
				current.units = filteredUnits;
				rangeArr.push(current);
			}
		}, rangeArr
		);
		updatedPropertyList = rangeArr;

		if (searchInput) {
			updatedPropertyList = updatedPropertyList.filter(
				(item:any) => item.name.toLowerCase().search(searchInput.toLowerCase().trim()) !== -1
			);
		}

		updatedPropertyList = alphaSort(updatedPropertyList);
		
		setProperties(updatedPropertyList);
	};


	useEffect(() => {
		applyFilters();
		return setIsResultSelected(false);
	}, [amenities, searchInput, selectedMin, selectedMax, isResultSelected, count]);
    

	return <div className="flex flex-col">
		<FilterPanel>
			<SearchBar value={searchInput} changeInput={handleChangeInput} />
			<div className="lg:mr-10"></div>
			<RangeInput getMin={getMin} getMax={getMax} min={overAllMin} max={overAllMax} />
			<div className="lg:mr-10"></div>
			<DropDownContainer count={count} title={'Amenities'} >
				<AmenityMenu amenities={amenities} updateCheckStatus={updateCheckStatus} />
			</DropDownContainer>
			<div className="w-30"></div>
			<DropDownContainer isResultSelected={isResultSelected} title='Results per Page' count={propertiesPerPage} >
				<ResultsCount  handleResultsPerPage={handleResultsPerPage}/>
			</DropDownContainer>
		</FilterPanel>
		<Pagination checkIfEmpty={checkIfEmpty} propertiesPerPage={propertiesPerPage} currentPage={currentPage} totalProperties={properties.length} paginate={paginate}/>
		<PropertyList properties={currentProperties} amenities={amenities} >
			<Pagination checkIfEmpty={checkIfEmpty} propertiesPerPage={propertiesPerPage} currentPage={currentPage} totalProperties={properties.length} paginate={paginate}/>
		</PropertyList>
	</div>;
};

export default Home;

