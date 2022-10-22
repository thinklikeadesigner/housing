import React from 'react';
import { data } from '../../../../constants/helpers';
import Property from './Property';

const sortedList = data.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

const PropertyList = () => {
	return <div >
		{sortedList.map((i) => (
			<div key={i.id}>
				<Property id={i.id} name={i.name} picture={i.picture} units={i.units} />
			</div>
		))}
	</div>;
};

export default PropertyList;
