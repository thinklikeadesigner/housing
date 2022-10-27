import React from 'react';
import Property from './Property';
import data from '../../mockData.json';

const PropertyList = () => {

	const sortedList = data.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

	return <div >
		{/* Cannot find name 'sortedList'.ts(2304) */}
		{sortedList.map((i) => (
			<div key={i.id}>
				<Property id={i.id} name={i.name} picture={i.picture} units={i.units} />
			</div>
		))}
	</div>;
};

export default PropertyList;
