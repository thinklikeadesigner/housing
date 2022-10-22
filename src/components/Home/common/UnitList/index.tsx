import React from 'react';
import { getAvgSqft, getUnitsByType, getUnitsMinMax } from '../../../../constants/helpers';

type Props = { id: string; name: string; picture: string; units: { type: string; minOccupancy: number; maxOccupancy: number; sqft: number; amenities: string[]; }[]; };

// REFACTOR WOULD LOVE TO GET RID OF SOME DUPLICATE CODE HERE 
function UnitList(i: Props) {
	const noUnitsAvailable = (unitType: string) => Object.keys(getUnitsByType(i, unitType)).length === 0;
	const minOccupancy  = (unitType: string) =>` ${getUnitsMinMax(getUnitsByType(i, unitType)).minOcc}`;
	const avgSqFt  = (unitType: string) =>` ${Math.floor(getAvgSqft(getUnitsByType(i, unitType)))}`;
	const maxOccupancy  = (unitType: string) =>` ${getUnitsMinMax(getUnitsByType(i, unitType)).maxOcc}`;

	return <div >	{i.units.map((j, index) => (
		<div key={index}>
			{noUnitsAvailable('studio') ? 'no studio units available' : <div >
				<h4>studio</h4>
				<p>min
					{minOccupancy('fourBdrm')}
				</p>
				<p>Average Square Footage
					{avgSqFt('studio')}
				</p>
				<p>max
					{maxOccupancy('studio')}
				</p></div>}

			{noUnitsAvailable('oneBdrm') ? 'no oneBdrm units available' : <div >
				<h4>oneBdrm</h4>
				<p>min
					{minOccupancy('oneBdrm')}
				</p>
				<p>Average Square Footage
					{avgSqFt('oneBdrm')}
				</p>
				<p>max
					{maxOccupancy('oneBdrm')}
				</p></div>}

			{noUnitsAvailable('twoBdrm') ? 'no twoBdrm units available' : <div >
				<h4>twoBdrm</h4>
				<p>min
					{minOccupancy('twoBdrm')}
				</p>
				<p>Average Square Footage
					{avgSqFt('twoBdrm')}
				</p>
				<p>max
					{maxOccupancy('twoBdrm')}
				</p></div>}
			{noUnitsAvailable('threeBdrm') ? 'no threeBdrm units available' : <div >
				<h4>threeBdrm</h4>
				<p>min
					{minOccupancy('threeBdrm')}
				</p>
				<p>Average Square Footage
					{avgSqFt('threeBdrm')}
				</p>
				<p>max
					{maxOccupancy('threeBdrm')}
				</p></div>}

			{noUnitsAvailable('fourBdrm') ? 'no fourBdrm units available' : <div >
				<h4>fourBdrm</h4>
				<p>min
					{minOccupancy('fourBdrm')}
				</p>
				<p>Average Square Footage
					{avgSqFt('fourBdrm')}
				</p>
				<p>max
					{maxOccupancy('fourBdrm')}
				</p></div>}
		</div>
	))}</div>;
}

export default UnitList;