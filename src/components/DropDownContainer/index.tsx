/* eslint-disable react/jsx-key */
import React, { cloneElement, useState, useEffect } from 'react';
import './styles.css';
import { useOutsideClick } from '../../hooks/useOutsideClick';

	
const DropDownContainer = ({ children, title, isResultSelected }: any) => {
	const [open, setOpen] = useState(false);
	const handleClickOutside = () => {
		setOpen(false);
	};
	
	const ref:any = useOutsideClick(handleClickOutside);


	const handleHeaderClick = (event:any) => {
		// do something

		event.stopPropagation();
	};

	const handleOpen = () => {
		setOpen(!open);
	};

	useEffect(() => {
		if (isResultSelected) {
			setOpen(false);
		}
	

	}, [isResultSelected]);
	

	return (
		<div ref={ref} onClick={handleHeaderClick} className="relative w-full py-8 text-lg">
			<button onClick={handleOpen}  className="px-4 py-2 mr-2 text-white bg-blue-500 rounded w-max hover:bg-blue-400"> {title}
	
			</button>

			{open && (
				<div className="absolute z-20 w-56 p-0 list-none rounded bg-slate-200">
					{children}
				</div>
			)}
		</div>
	);
};

export default DropDownContainer;