import React from 'react';

type Props = {
    index: any; 
    label: any; 
    isChecked: any;
    checkHandler: any;
};

const CheckBox = ({ isChecked, label, checkHandler, index }: Props) => {
	return (
		<div>
			<input
				type="checkbox"
				id={`checkbox-${index}`}
				checked={isChecked}
				onChange={checkHandler}
			/>
			<label className="ml-2" htmlFor={`checkbox-${index}`}>{label}</label>
		</div>
	);
};

export default CheckBox;
