import React from 'react';
import UnitList from '../../UnitList';

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
	}[];
}

function Property(i: Props) {
	return <div className="flex justify-center py-6 "  key={i.id}>
		<div className="overflow-hidden bg-white shadow-md rounded-xl">
			<div className=" md:flex">
				<div className="md:shrink-0">
					<img className="object-cover w-full xs:h-48 md:h-full" src={i.picture} alt="Modern building architecture" />
				</div>
				<div className="flex flex-col justify-center py-8 lg:p-8">
					<div className="text-sm font-semibold tracking-wide text-center text-indigo-500 uppercase">{i.name}</div>
					<UnitList id={i.id} name={i.name} picture={i.picture} units={i.units} />
				</div>
			</div>
		</div>
			
	</div>;
}

export default Property;