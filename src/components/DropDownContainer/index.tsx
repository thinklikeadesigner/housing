/* eslint-disable react/jsx-key */
import React, { cloneElement, useState } from 'react';
import './styles.css';


const DropDownContainer = ({ title, children }: any) =>
	<Dropdown trigger={<button className="px-4 py-2 mr-2 text-white bg-blue-500 rounded w-max hover:bg-blue-400"> {title} </button>} menu={[children]} />;


	
const Dropdown = ({ trigger, menu }:any) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<div className="relative w-full text-lg">
			{cloneElement(trigger, {
				onClick: handleOpen,
			})}
			{open ? (
				<ul className="absolute z-20 w-56 p-0 list-none rounded bg-slate-200">
					{menu.map((menuItem: any, index: any) => (
						<li key={index} className=" menu-item">
							{cloneElement(menuItem, {
								onClick: () => {
									menuItem.props.onClick();
									setOpen(false);
								},
							})}
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
};

export default DropDownContainer;