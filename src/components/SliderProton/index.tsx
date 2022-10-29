import React from 'react';



type Props = { value: any; changeRange: any };

// value={value}
// onChange={changeRange}
// valueLabelDisplay="on"
// min={1000}
// max={5000}

const SliderProton = ({ value, changeRange }: Props) => {

	return (
		<div >
			<input type="text" value={value} onChange={changeRange} />
			<input type="text"  value={value} onChange={changeRange}/>
		</div>
	);
};

export default SliderProton;
