import React, { useState } from 'react';
import { getAvgSqft, getUnitsByType, getUnitsMinMax } from '../helpers';
import './styles.css';
type Props = { id: string; name: string; picture: string; units: { type: string; minOccupancy: number; maxOccupancy: number; sqft: number; amenities: string[]; }[]; };

// REFACTOR WOULD LOVE TO GET RID OF SOME DUPLICATE CODE HERE 
function UnitList(i: Props) {


	const noUnitsAvailable = (unitType: any) => Object.keys(getUnitsByType(i, unitType)).length === 0;
	const minOccupancy  = (unitType: string) =>` ${getUnitsMinMax(getUnitsByType(i, unitType)).minOcc}`;
	const avgSqFt  = (unitType: string) =>` ${Math.floor(getAvgSqft(getUnitsByType(i, unitType)))}`;
	const maxOccupancy  = (unitType: string) =>` ${getUnitsMinMax(getUnitsByType(i, unitType)).maxOcc}`;

	return <div>
		{noUnitsAvailable('studio') ? 'no studio units available' : <div className="unit-wrap" >
			<table>
				<tr>

					<th>Unit Type</th>
					<th>Average Square Footage</th>
					<th>Range</th>
				</tr>
				<tr>
					<td>
						<h4>Studio</h4>
					</td>
					<td>	<p>Average Square Footage
						{avgSqFt('studio')}
					</p>
					</td>
					<td><p>min
						{minOccupancy('studio')}
					</p>
					</td>
					<td><p>max
						{maxOccupancy('studio')}
					</p></td>
				</tr>

			</table>
		</div>
		}

		{noUnitsAvailable('oneBdrm') ? 'no oneBdrm units available' : <div className="unit-wrap" >
			<table>
				<tr>

					<th>Unit Type</th>
					<th>Average Square Footage</th>
					<th>Range</th>
				</tr>
				<tr>
					<td>
						<h4>One Bedroom</h4>
					</td>
					<td>	<p>Average Square Footage
						{avgSqFt('oneBdrm')}
					</p>
					</td>
					<td><p>min
						{minOccupancy('oneBdrm')}
					</p>
					</td>
					<td><p>max
						{maxOccupancy('oneBdrm')}
					</p></td>
				</tr>

			</table></div>}

		{noUnitsAvailable('twoBdrm') ? 'no twoBdrm units available' : <div className="unit-wrap">
			<table>
				<tr>

					<th>Unit Type</th>
					<th>Average Square Footage</th>
					<th>Range</th>
				</tr>
				<tr>
					<td>
						<h4>Two Bedroom</h4>
					</td>
					<td>	<p>Average Square Footage
						{avgSqFt('twoBdrm')}
					</p>
					</td>
					<td><p>min
						{minOccupancy('twoBdrm')}
					</p>
					</td>
					<td><p>max
						{maxOccupancy('twoBdrm')}
					</p></td>
				</tr>

			</table></div>}
		{noUnitsAvailable('threeBdrm') ? 'no threeBdrm units available' : <div className="unit-wrap">
			<table>
				<tr>

					<th>Unit Type</th>
					<th>Average Square Footage</th>
					<th>Range</th>
				</tr>
				<tr>
					<td>
						<h4>Three Bedroom</h4>
					</td>
					<td>	<p>Average Square Footage
						{avgSqFt('threeBdrm')}
					</p>
					</td>
					<td><p>min
						{minOccupancy('threeBdrm')}
					</p>
					</td>
					<td><p>max
						{maxOccupancy('threeBdrm')}
					</p></td>
				</tr>

			</table></div>}

		{noUnitsAvailable('fourBdrm') ? 'no fourBdrm units available' : <div className="unit-wrap">
			<table>
				<tr>

					<th>Unit Type</th>
					<th>Average Square Footage</th>
					<th>Range</th>
				</tr>
				<tr>
					<td>
						<h4>Four Bedroom</h4>
					</td>
					<td>	<p>Average Square Footage
						{avgSqFt('fourBdrm')}
					</p>
					</td>
					<td><p>min
						{minOccupancy('fourBdrm')}
					</p>
					</td>
					<td><p>max
						{maxOccupancy('fourBdrm')}
					</p></td>
				</tr>

			</table></div>}
	</div>;
}

export default UnitList;