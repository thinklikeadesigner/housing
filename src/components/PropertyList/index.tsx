import React from 'react';
import Property from './Property';
import NoResults from '../NoResults/index';

const PropertyList = ( { properties, children }: any ) => {

	if (properties.length == 0) return <NoResults />;


	

	return <div className="py-6">
		{properties.map((i: any) => (
			<Property key={i.id} id={i.id} name={i.name} picture={i.picture} units={i.units} />
		))}
		{children}
	</div>;
};

export default PropertyList;
