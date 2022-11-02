import React, {useContext, useEffect, useState} from 'react';
import { AmenityContext } from '../../context/AmenityContext';
import { getAvgSqft, getUnitAmenities, getUnitsByType, getUnitsMinMax, noUnitsAvailable, unitHasAmenities } from '../helpers';
import './styles.css';
import ListItem from '../List/ListItem/index';



// IMPLEMENT amenities filter here
// IMPLEMENT range filter here

function UnitList(units: any, amenities: any) {
	// const studioArr = ;
	// const oneBdrmArr = getUnitsByType(i, 'oneBdrm');
	// const twoBdrmArr = getUnitsByType(i, 'twoBdrm');
	// const threeBdrmArr = getUnitsByType(i, 'threeBdrm');
	// const fourBdrmArr = getUnitsByType(i, 'fourBdrm');
	const [studios, setStudios] = useState(getUnitsByType(units, 'studio'));
	const [oneBdrms, setOneBdrms] = useState(getUnitsByType(units, 'oneBdrm'));
	const [twoBdrms, setTwoBdrms] = useState(getUnitsByType(units, 'twoBdrm'));
	const [threeBdrms, setThreeBdrms] = useState(getUnitsByType(units, 'threeBdrm'));
	const [FourBdrms, setFourBdrms] = useState(getUnitsByType(units, 'fourBdrm'));


	useEffect(() => {
		if (amenities.length)
		{
			setStudios(() => studios.filter((studio: any) => {
				unitHasAmenities(getUnitAmenities(studio), amenities);
			}));
		}
	

	}, [studios]);
	
	// IDEA create arrays dynamically for unit types
	// const unitType: any = ['studio', 'oneBdrm', 'twoBdrm', 'threeBdrm', 'fourBdrm'].map((type: any) => {return {[type]: getUnitsByType(i, type)};			
	// });


	function tableRow(unitArr: [], type: string): React.ReactNode {
		return noUnitsAvailable(unitArr) ? null : <tr className="h-10 even:bg-gray-100 odd:bg-white">
			<td className="text-sm font-normal leading-5 text-center md:py-2">
				<h4>{type}</h4>
			</td>
			<td className="text-sm font-normal leading-5 text-center md:py-2">  <p>
				{getAvgSqft(unitArr)}
			</p>
			</td>
			<td className="text-sm font-normal leading-5 text-center md:py-2"><p>
				{`${getUnitsMinMax(unitArr).minOcc} - ${getUnitsMinMax(unitArr).maxOcc}`}
			</p>
			</td>
		</tr>;
	}

	return <div className="overflow-x-hidden">
		<table className="w-full text-black table-auto" >
			<thead >
				<tr className="h-8 bg-gray-200 mb-9">
					<th className="text-xs font-semibold leading-4 w-28">Unit Type</th>
					<th className="w-48 text-xs font-semibold leading-4">Average Square Footage</th>
					<th className="text-xs font-semibold leading-4 w-44">Range</th>
				</tr>
			</thead>
			<tbody  >
				{tableRow(studios, 'Studio')}
				{tableRow(oneBdrms, 'One Bedroom')}
				{tableRow(twoBdrms, 'Two Bedroom')}
				{tableRow(threeBdrms, 'Three Bedroom')}
				{tableRow(FourBdrms, 'Four Bedroom')}
			</tbody>
		</table>
	</div>;
}

export default UnitList;
