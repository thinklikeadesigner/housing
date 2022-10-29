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
	return <div className="flex justify-center py-6 border-2 border-red-500"  key={i.id}>
		<div className="overflow-hidden bg-white border-2 border-red-500 shadow-md rounded-xl">
			<div className="border-2 border-red-500 md:flex">
				<div className="md:shrink-0">
					<img className="object-cover w-full xs:h-48 md:h-full" src={i.picture} alt="Modern building architecture" />
				</div>
				<div className="flex flex-col justify-center py-8 border-2 border-red-500 lg:p-8">
					<div className="text-sm font-semibold tracking-wide text-center text-indigo-500 uppercase border-2 border-blue-500">{i.name}</div>
					<UnitList id={i.id} name={i.name} picture={i.picture} units={i.units} />
				</div>
			</div>
		</div>
			
	</div>;
}

export default Property;