import React from 'react';
import Property from './Property';

const PropertyList = ( { properties }: any ) => {

	if (properties.length == 0) return <h1>no results</h1>;


	

	return <div className="py-6">
		{properties.map((i: any) => (
			<Property key={i.id} id={i.id} name={i.name} picture={i.picture} units={i.units} />
		))}
	</div>;
};

export default PropertyList;
