import React from 'react';



type Props = { value: any; changeRange: any, children: any };

// value={value}
// onChange={changeRange}
// valueLabelDisplay="on"
// min={1000}
// max={5000}

const Range = ({ children }: any) => {

	return (
		<div >
			{children}
		</div>
	);
};

export default Range;
