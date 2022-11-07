/* eslint-disable react/jsx-key */
import React, { cloneElement, useState } from 'react';
import './styles.css';


const DropDownContainer = ({ title, children, handleOpen }: any) => {


	return (<Dropdown trigger={<button className="px-4 py-2 mr-2 text-white bg-blue-500 rounded w-max hover:bg-blue-400"> {title} </button>} handleOpen={handleOpen} menu={[children]} />);

};
	
const Dropdown = ({ trigger, menu }: any) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		console.log('open');
		setOpen(!open);
	};

	return (
		<div className="relative w-full text-lg">
			{cloneElement(trigger, {
				onClick: handleOpen,
			})}
			{open && (
				<div className="absolute z-20 w-56 p-0 list-none rounded bg-slate-200">
					{menu}
				</div>
			)}
		</div>
	);
};

export default DropDownContainer;