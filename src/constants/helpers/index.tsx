import data from '../../mockData.json';


const getAmenities = (housingdata:any) => {
	const amenitiesCheckBoxes: any = [];
	const amenitiesSet = new Set(housingdata.map((i: { units: any[]; }) => i.units.map(i => i.amenities)).flat().flat());
	amenitiesSet.forEach(item => amenitiesCheckBoxes.push({ name: `${item}`, checked: false }));
	return amenitiesCheckBoxes;
};

function getRoomTypes(property: { units: any[]; }) {
	const roomTypes = new Set(property.units.map(i => i.type));
	return roomTypes;
}


const sampleProperties = data;
const singleProperty = sampleProperties[0];


const getUnitsByType = (property: any, unitType: any) => {
	return   property.units.map((i: any) => i).filter((j: { type: any; }) => j.type === unitType);
};

const getUnitsMinMax = (units: any) => {

	const minOcc = units.map((i: { minOccupancy: any; }) => i.minOccupancy);
	const absMin = Math.max(...minOcc);
	
	const maxOcc = units.map((i: { maxOccupancy: any; }) => i.maxOccupancy);
	const absMax = Math.max(...maxOcc);
	


	return {minOcc: absMin, maxOcc: absMax};
};

const getAvgSqft = (units: any) => {
	const sqftList = units.map((i: { sqft: any; }) => i.sqft);
	return sqftList.reduce((a:any, b:any) => a + b) / sqftList.length;
};




console.log(getUnitsMinMax(getUnitsByType(singleProperty, 'twoBdrm')));
console.log(getAvgSqft(getUnitsByType(singleProperty, 'twoBdrm')));

const amenitiesCheckBoxes = getAmenities(data);









export { amenitiesCheckBoxes, data, getUnitsByType, getUnitsMinMax, getAvgSqft, getRoomTypes};