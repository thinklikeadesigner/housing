import React from 'react';
import Property from './Property';

const PropertyList = ({properties, }:any,) => {




	return <div >
		{/* Cannot find name 'sortedList'.ts(2304) */}
		{properties.map((i:any) => (
			<div key={i.id}>
				<Property id={i.id} name={i.name} picture={i.picture} units={i.units} />
			</div>
		))}
	</div>;
};

export default PropertyList;
