import React from 'react';
import { getAvgSqft, getUnitsByType, getUnitsMinMax, noUnitsAvailable } from '../helpers';
import './styles.css';


function UnitList(units: any) {
	const studioArr = getUnitsByType(units, 'studio');
	const oneBdrmArr = getUnitsByType(units, 'oneBdrm');
	const twoBdrmArr = getUnitsByType(units, 'twoBdrm');
	const threeBdrmArr = getUnitsByType(units, 'threeBdrm');
	const fourBdrmArr = getUnitsByType(units, 'fourBdrm');



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
				{`${getUnitsMinMax(unitArr)[0]} - ${getUnitsMinMax(unitArr)[1]}`}
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
				{tableRow(studioArr, 'Studio')}
				{tableRow(oneBdrmArr, 'One Bedroom')}
				{tableRow(twoBdrmArr, 'Two Bedroom')}
				{tableRow(threeBdrmArr, 'Three Bedroom')}
				{tableRow(fourBdrmArr, 'Four Bedroom')}
			</tbody>
		</table>
	</div>;
}

export default UnitList;
