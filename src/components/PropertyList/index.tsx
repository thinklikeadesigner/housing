import React from 'react';
import Property from './Property';


const PropertyList = () => {

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
