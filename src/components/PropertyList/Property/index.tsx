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
	}[][]
}

function Property(i: Props) {
	return <div className="flex justify-center py-6" key={i.id}>
		<div className="overflow-hidden bg-white rounded">
			<div className="flex flex-col md:flex-row center">
				<div className="md:w-1/2 md:shrink-0">
					<div className="relative flex flex-col h-full">
						<div className="absolute pb-4 top-3 left-3">
							<button className="px-4 py-2 mr-2 text-black rounded bg-amber-400 hover:bg-amber-500">Listing Label</button>
							<button className="px-4 py-2 mr-2 text-black rounded bg-amber-400 hover:bg-amber-500">Listing Label</button>
						</div>
						<img className="object-cover xs:h-48 md:h-full" src={i.picture} alt="Modern building architecture" />
						<div className="p-4 text-sm font-normal leading-4 text-white bg-blue-500"><p className="self-center\">Application Deadline: April 21st, 2023</p></div>
					</div>
				</div>
				<div className="flex flex-col py-4 lg:pl-8 md:pl-4 md:w-1/2 md:py-0">
					<h2 className="mb-3 text-3xl font-semibold tracking-wide text-blue-500 uppercase">{i.name}</h2>
					<p className="mb-4 ">Street Address, Local City ST 12345</p>
					<div className="pb-4">
						<button className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-400">Listing Label</button>
						<button className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-400">Listing Label</button>
					</div>
					<div className="pt-5 pb-1 border-t border-gray-600"></div>
					<UnitList id={i.id} name={i.name} picture={i.picture} units={i.units} />
				</div>
			</div>
		</div>
			
	</div>;
}

export default Property;