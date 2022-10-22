import React from 'react';
import { data } from '../../../../constants/helpers';
import Property from './Property';


const PropertyList = () => {
	return <div>
		{data.map((i) => (
			<div key={i.id}>
				<Property id={i.id} name={i.name} picture={i.picture} units={i.units} />
			</div>
		))}
	</div>;
};

export default PropertyList;
