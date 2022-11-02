
export const getAmenities = (housingdata:any) => {
	const amenitiesCheckBoxes: any = [];
	const amenitiesSet = new Set(housingdata.map((i: { units: any[]; }) => i.units.map(i => i.amenities)).flat().flat());
	amenitiesSet.forEach(item => amenitiesCheckBoxes.push({ name: `${item}`, checked: false }));
	return amenitiesCheckBoxes;
};

export const unitHasAmenities = (amenitiesArray: any, chosenAmenities: any) => chosenAmenities.every((i: any) => amenitiesArray.includes(i));
export const getUnitAmenities = (unit: any) => unit.amenities.map((i: any) => i);

// UNPLUGGED
// function getRoomTypes(property: { units: any[]; }) {
// 	const roomTypes = new Set(property.units.map(i => i.type));
// 	return roomTypes;
// }

export const iterateObj = (obj: any, key: any, value: any) => {
	for (const prop in obj) {
		if (typeof (obj[prop]) == 'object') {
			iterateObj(obj[prop], key, value);
		} else {
			if (prop == key) {
				if (obj[prop] == value) {
					return obj;
				}
			}
		}
	}
};

export const getUnitsByType = (property: any, unitType: any) => {
	return   property.units.map((i: any) => i).filter((j: { type: any; }) => j.type === unitType);
};

export const noUnitsAvailable = (units: []) => Object.keys(units).length === 0;

export const getUnitsMinMax = (units: any) => {
	const minOcc = units.map((i: { minOccupancy: any; }) => i.minOccupancy);
	const absMin = Math.min(...minOcc);

	const maxOcc = units.map((i: { maxOccupancy: any; }) => i.maxOccupancy);
	const absMax = Math.max(...maxOcc);

	return {minOcc: absMin, maxOcc: absMax};
};

export const getAvgSqft = (units: any) => {
	const sqftList = units.map((i: { sqft: any; }) => i.sqft);
	return Math.floor(sqftList.reduce((a:any, b:any) => a + b) / sqftList.length);
};


