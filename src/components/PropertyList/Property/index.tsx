import React from 'react';
import UnitList from '../../UnitList';

type Props =  { id: string; name: string; picture: string; units: { type: string; minOccupancy: number; maxOccupancy: number; sqft: number; amenities: string[]; }[]; }

function Property(i: Props) {
	return <div  key={i.id}>
		<div>
			<h1>{i.name}</h1><img src={i.picture} alt="house" />
		</div>
		<UnitList id={i.id} name={i.name} picture={i.picture} units={i.units} />
	</div>;
}

export default Property;
