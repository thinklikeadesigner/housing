/* eslint-disable react/jsx-key */
import React, { cloneElement, useState } from 'react';
import CheckBox from '../CheckBox';
import './styles.css';


const DropDownContainer = ({ title, children }: any) =>
	<Dropdown trigger={<button> {title} </button>} menu={[children]} />;


	
const Dropdown = ({ trigger, menu }:any) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<div className="p-5  dropdown">
			{cloneElement(trigger, {
				onClick: handleOpen,
			})}
			{open ? (
				<ul className="menu">
					{menu.map((menuItem: any, index: any) => (
						<li key={index} className="menu-item">
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