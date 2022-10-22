import React from 'react';
import { getAvgSqft, getUnitsByType, getUnitsMinMax } from '../../../../constants/helpers';

type Props = { id: string; name: string; picture: string; units: { type: string; minOccupancy: number; maxOccupancy: number; sqft: number; amenities: string[]; }[]; };


function UnitList(i: Props) {
	return <div>	{i.units.map((j, index) => (
		<div key={index}>
			<h4>studio</h4>
			{Object.keys(getUnitsByType(i, 'studio')).length === 0 ? 'no studio units available' : <div>
				<p>min
					{`${getUnitsMinMax(getUnitsByType(i, 'studio')).minOcc}`}
				</p>
				<p>Average Square Footage
					{` ${Math.floor(getAvgSqft(getUnitsByType(i, 'studio')))}`}
				</p>
				<p>max
					{` ${getUnitsMinMax(getUnitsByType(i, 'studio')).maxOcc}`}
				</p></div>}

			<h4>one</h4>{Object.keys(getUnitsByType(i, 'oneBdrm')).length === 0 ? 'no one bedroom units available' : <div><p> Average Square Footage
				{` ${Math.floor(getAvgSqft(getUnitsByType(i, 'oneBdrm')))}`}
			</p>
			<p> min
				{` ${getUnitsMinMax(getUnitsByType(i, 'oneBdrm')).minOcc}`}</p>
			<p>max
				{` ${getUnitsMinMax(getUnitsByType(i, 'oneBdrm')).maxOcc}`}
			</p></div>}

			<h4>two</h4>
			{Object.keys(getUnitsByType(i, 'twoBdrm')).length === 0 ? 'no two bedroom units available' : <div>
				<p>Average Square Footage
					{` ${Math.floor(getAvgSqft(getUnitsByType(i, 'twoBdrm')))}`}
				</p>
				<p>min
					{` ${getUnitsMinMax(getUnitsByType(i, 'twoBdrm')).minOcc}`}
				</p>
				<p>max
					{` ${getUnitsMinMax(getUnitsByType(i, 'twoBdrm')).maxOcc}`}
				</p></div>}
			<h4>three</h4>
			{Object.keys(getUnitsByType(i, 'threeBdrm')).length === 0 ? ' no three bedroom units available' : <div>
				<p>Average Square Footage
					{` ${Math.floor(getAvgSqft(getUnitsByType(i, 'threeBdrm')))}`}
				</p>
				<p>min
					{` ${getUnitsMinMax(getUnitsByType(i, 'threeBdrm')).minOcc}`}
				</p>
				<p>max
					{` ${getUnitsMinMax(getUnitsByType(i, 'threeBdrm')).maxOcc}`}
				</p></div>}

			<h4>four</h4>
			{Object.keys(getUnitsByType(i, 'fourBdrm')).length === 0 ? ' no four bedroom units available' : <div>
				<p>Average Square Footage
					{` ${Math.floor(getAvgSqft(getUnitsByType(i, 'fourBdrm')))}`}
				</p><p>min
					{` ${getUnitsMinMax(getUnitsByType(i, 'fourBdrm')).minOcc}`}
				</p>
				<p>max
					{` ${getUnitsMinMax(getUnitsByType(i, 'fourBdrm')).maxOcc}`}
				</p></div>}

		</div>
	))}</div>;
}

export default UnitList;