import React from 'react';


const FilterPanel = ({children}: any) => {
	return <div className="flex-col items-center justify-between w-auto pb-20 lg:flex lg:flex-row ">{children}</div>;
};

export default FilterPanel;
