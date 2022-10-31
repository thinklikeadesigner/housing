import React from 'react';
import { getAvgSqft, getUnitsByType, getUnitsMinMax } from '../helpers';
import './styles.css';

type Props = {
	id: string;
	name: string;
	picture: string;
	units: {
		type: string;
		minOccupancy: number;
		maxOccupancy: number;
		sqft: number;
		amenities: string[];
	}[][]
}

// BUG min and max calculations are off
function UnitList(i: Props) {

	const noUnitsAvailable = (unitType: string) => Object.keys(getUnitsByType(i, unitType)).length === 0;
	const minOccupancy  = (unitType: string) =>` ${getUnitsMinMax(getUnitsByType(i, unitType)).minOcc}`;
	const avgSqFt  = (unitType: string) =>` ${Math.floor(getAvgSqft(getUnitsByType(i, unitType)))}`;
	const maxOccupancy  = (unitType: string) =>` ${getUnitsMinMax(getUnitsByType(i, unitType)).maxOcc}`;
	
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
				{noUnitsAvailable('studio') ? null : <tr className="h-10 even:bg-gray-100 odd:bg-white"   >
					<td className="text-sm font-normal leading-5 text-center md:py-2">
						<h4 >Studio</h4>
					</td>
					<td className="text-sm font-normal leading-5 text-center md:py-2">	<p>
						{avgSqFt('studio')}
					</p>
					</td>
					<td className="text-sm font-normal leading-5 text-center md:py-2"><p>
						{minOccupancy('studio')} -
						{maxOccupancy('studio')}
					</p>
					</td>
				</tr>
				}
				{noUnitsAvailable('oneBdrm') ? null : <tr className="h-10 even:bg-gray-100 odd:bg-white"  >
					<td className="text-sm font-normal leading-5 text-center md:py-2">
						<h4>One Bedroom</h4>
					</td>
					<td className="text-sm font-normal leading-5 text-center md:py-2">
						<p>
							{avgSqFt('oneBdrm')}
						</p>
					</td>
					<td className="text-sm font-normal leading-5 text-center md:py-2">
						<p>
							{minOccupancy('oneBdrm')} -
							{maxOccupancy('oneBdrm')}
						</p>
						<p>
						</p>
					</td>
				</tr>}
				{noUnitsAvailable('twoBdrm') ? null : <tr className="h-10 even:bg-gray-100 odd:bg-white"  >
					<td className="text-sm font-normal leading-5 text-center md:py-2">
						<h4>Two Bedroom</h4>
					</td>
					<td className="text-sm font-normal leading-5 text-center md:py-2">	<p>
						{avgSqFt('twoBdrm')}
					</p>
					</td>
					<td className="text-sm font-normal leading-5 text-center md:py-2">
						<p>
							{minOccupancy('twoBdrm')} -
							{maxOccupancy('twoBdrm')}
						</p>
					</td>
				</tr>}
				{noUnitsAvailable('threeBdrm') ? null : <tr className="h-10 even:bg-gray-100 odd:bg-white" >
					<td className="text-sm font-normal leading-5 text-center md:py-2">
						<h4>Three Bedroom</h4>
					</td>
					<td className="text-sm font-normal leading-5 text-center md:py-2">	<p>
						{avgSqFt('threeBdrm')}
					</p>
					</td>
					<td className="text-sm font-normal leading-5 text-center md:py-2"><p>
						{minOccupancy('threeBdrm')} -
						{maxOccupancy('threeBdrm')}
					</p>
					</td>
				</tr>}
				{noUnitsAvailable('fourBdrm') ? null : <tr className="h-10 even:bg-gray-100 odd:bg-white" >
					<td className="text-sm font-normal leading-5 text-center md:py-2">
						<h4>Four Bedroom</h4>
					</td>
					<td className="text-sm font-normal leading-5 text-center md:py-2">	<p>
						{avgSqFt('fourBdrm')}
					</p>
					</td>
					<td className="text-sm font-normal leading-5 text-center md:py-2"><p >
						{minOccupancy('fourBdrm')} - {maxOccupancy('fourBdrm')}
					</p>
					</td>
				</tr>}
			</tbody>
		</table>
	</div>;
}

export default UnitList;