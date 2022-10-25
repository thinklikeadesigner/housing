import React, { createContext, useState } from 'react';
import { PropertyContextType, IProperty, IUnit } from '../../@types/data';
import data from '../../mockData.json';
import {getAmenities} from '../../components/helpers';

export const PropertyContext = createContext<PropertyContextType | null  >(null);

const propertyList = data;
const amenities = getAmenities(data);

// IMPLEMENT https://blog.logrocket.com/how-to-use-react-context-typescript/

export const PropertyProvider: React.FC<React.ReactNode> = () => {
	const [properties, setProperties] = useState<IProperty[]>(data);
	const [selectedAmenities, setSelectedAmenities] = useState(amenities);
    
    

	const handleSelectedAmenities = (_e: { target: { value: any } }, value: any) => {
		return setSelectedAmenities((selectedAmenities: string[]) => (selectedAmenities !== selectedAmenities ? null : value));
	};
    

	const applyFilters = () => {
		let updatedProperties = propertyList;
        

		const amenitiesChecked = amenities.filter((item: any) => item.checked).map((item: any) => item.name.toLowerCase());
		if (amenities.length) {
			updatedProperties = updatedProperties.filter((item) => amenitiesChecked.includes(item.name));
		}



		updatedProperties = updatedProperties.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
		setProperties(updatedProperties);
        
	};
    
	//     Type '{ properties: IProperty[]; selectedAmenities: any; }' is not assignable to type 'PropertyContextType'.
	//   Object literal may only specify known properties, and 'selectedAmenities' does not exist in type 'PropertyContextType'.ts(2322)
	//   index.d.ts(328, 9): The expected type comes from property 'value' which is declared here on type 'IntrinsicAttributes & ProviderProps<PropertyContextType | null> '
	return <PropertyContext.Provider value={{properties, selectedAmenities}}><button onClick={applyFilters}></button></PropertyContext.Provider>;


    
};