import React from 'react';
import Property from './Property';

const PropertyList = ({properties}:any) => {

	const sortedList = properties.sort((a:any, b:any) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

	return <div >
		{/* Cannot find name 'sortedList'.ts(2304) */}
		{sortedList.map((i:any) => (
			<div key={i.id}>
				<Property id={i.id} name={i.name} picture={i.picture} units={i.units} />
			</div>
		))}
	</div>;
};

export default PropertyList;
