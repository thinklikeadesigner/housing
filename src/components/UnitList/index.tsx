import React from 'react';
import { getAvgSqft, getUnitsByType, getUnitsMinMax } from '../helpers';
import './styles.css';
type Props = { id: string; name: string; picture: string; units: { type: string; minOccupancy: number; maxOccupancy: number; sqft: number; amenities: string[]; }[]; };

// REFACTOR WOULD LOVE TO GET RID OF SOME DUPLICATE CODE HERE 
function UnitList(i: Props) {


	const noUnitsAvailable = (unitType: string) => Object.keys(getUnitsByType(i, unitType)).length === 0;
	const minOccupancy  = (unitType: string) =>` ${getUnitsMinMax(getUnitsByType(i, unitType)).minOcc}`;
	const avgSqFt  = (unitType: string) =>` ${Math.floor(getAvgSqft(getUnitsByType(i, unitType)))}`;
	const maxOccupancy  = (unitType: string) =>` ${getUnitsMinMax(getUnitsByType(i, unitType)).maxOcc}`;

	return <table>
		<thead>

			<tr>
				<th>Unit Type</th>
				<th>Average Square Footage</th>
				<th>Range</th>
			</tr>
		</thead>
		<tbody>

			{noUnitsAvailable('studio') ? null : <tr style={{backgroundColor: 'gray'}}>

				<td >
					<h4>Studio</h4>
				</td>
				<td>	<p>
					{avgSqFt('studio')}
				</p>
				</td>
				<td><p>
					{minOccupancy('studio')} -
					{maxOccupancy('studio')}
				</p>
				</td>
			</tr>

			}

			{noUnitsAvailable('oneBdrm') ? null : <tr style={{backgroundColor: 'gray'}} >
		
				<td>
					<h4>One Bedroom</h4>
				</td>
				<td>	<p>
					{avgSqFt('oneBdrm')}
				</p>
				</td>
				<td><p>
					{minOccupancy('oneBdrm')} -
					{maxOccupancy('oneBdrm')}
				</p>
				<p>
				</p></td>

			</tr>}

			{noUnitsAvailable('twoBdrm') ? null : <tr style={{backgroundColor: 'gray'}} >

				<td>
					<h4>Two Bedroom</h4>
				</td>
				<td>	<p>
					{avgSqFt('twoBdrm')}
				</p>
				</td>
				<td>
					<p>
						{minOccupancy('twoBdrm')} -
						{maxOccupancy('twoBdrm')}
					</p>
				</td>

			</tr>}
			{noUnitsAvailable('threeBdrm') ? null : <tr style={{backgroundColor: 'gray'}}>
	
				<td>
					<h4>Three Bedroom</h4>
				</td>
				<td>	<p className="unit-text">
					{avgSqFt('threeBdrm')}
				</p>
				</td>
				<td><p>
					{minOccupancy('threeBdrm')} -
					{maxOccupancy('threeBdrm')}
				</p></td>

			</tr>}

			{noUnitsAvailable('fourBdrm') ? null : <tr style={{backgroundColor: 'gray'}}>
	
				<td>
					<h4>Four Bedroom</h4>
				</td>
				<td>	<p>
					{avgSqFt('fourBdrm')}
				</p>
				</td>
				<td><p >
					{minOccupancy('fourBdrm')} - {maxOccupancy('fourBdrm')}
				</p>
				</td>
			</tr>}
		</tbody>
	</table>;
}

export default UnitList;