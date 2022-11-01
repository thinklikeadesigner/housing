// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import mockData from './mockData.json';
import { getUnitsByType, getUnitsMinMax, getAvgSqft } from './components/helpers';


// jest --watch --collect-coverage

const data = mockData;

test('first object', () => {
	expect(data[0].units[0].type).toBe('twoBdrm');
});


test('should be able to get all units by their type', () => {
	const studio = getUnitsByType(data[0], 'studio');
	const oneBdrm = getUnitsByType(data[0], 'oneBdrm');
	const twoBdrm = getUnitsByType(data[0], 'twoBdrm');
	const threeBdrm = getUnitsByType(data[0], 'threeBdrm');
	const fourBdrm = getUnitsByType(data[0], 'fourBdrm');
  
	const studios = getUnitsByType(data[5], 'studio');
	const oneBdrms = getUnitsByType(data[5], 'oneBdrm');
	const twoBdrms = getUnitsByType(data[5], 'twoBdrm');
	const threeBdrms = getUnitsByType(data[5], 'threeBdrm');
	const fourBdrms = getUnitsByType(data[5], 'fourBdrm');


	expect(studio[0].type).toBe('studio');
	expect(oneBdrm[0].type).toBe('oneBdrm');
	expect(twoBdrm[0].type).toBe('twoBdrm');
	expect(threeBdrm[0].type).toBe('threeBdrm');
	expect(fourBdrm[0].type).toBe('fourBdrm');

	expect(studios[5].type).toBe('studio');
	expect(oneBdrms[5].type).toBe('oneBdrm');
	expect(twoBdrms[5].type).toBe('twoBdrm');
	expect(threeBdrms[5].type).toBe('threeBdrm');
	expect(fourBdrms[5].type).toBe('fourBdrm');
});


test('for range of occupants', () => {

	const studio = getUnitsByType(data[0], 'studio');
	const studioMin = getUnitsMinMax(studio).minOcc;
	const studioMax = getUnitsMinMax(studio).maxOcc;

	const oneBdrm = getUnitsByType(data[0], 'oneBdrm');

	const  oneBdrmMin = getUnitsMinMax(oneBdrm).minOcc;
	const oneBdrmMax = getUnitsMinMax(oneBdrm).maxOcc;

	const twoBdrm = getUnitsByType(data[0], 'twoBdrm');

	
	const twoBdrmMin = getUnitsMinMax(twoBdrm).minOcc;
	const twoBdrmMax = getUnitsMinMax(twoBdrm).maxOcc;

	const threeBdrm = getUnitsByType(data[0], 'threeBdrm');

	
	const threeBdrmMin = getUnitsMinMax(threeBdrm).minOcc;
	const threeBdrmMax = getUnitsMinMax(threeBdrm).maxOcc;
	

	const fourBdrm = getUnitsByType(data[0], 'fourBdrm');

	const fourBdrmMin = getUnitsMinMax(fourBdrm).minOcc;
	const  fourBdrmMax = getUnitsMinMax(fourBdrm).maxOcc;

	expect(studioMin).toBe(1);
	expect(studioMax).toBe(3);
	expect(studioMin).toBeLessThan(studioMax);

	expect(oneBdrmMin).toBe(1);
	expect(oneBdrmMax).toBe(5);
	expect(oneBdrmMin).toBeLessThan(oneBdrmMax);

	expect(twoBdrmMin).toBe(1);
	expect(twoBdrmMax).toBe(8);
	expect(twoBdrmMin).toBeLessThan(twoBdrmMax);

	expect(threeBdrmMin).toBe(2);
	expect(threeBdrmMax).toBe(11);
	expect(threeBdrmMin).toBeLessThan(threeBdrmMax);

	expect(fourBdrmMin).toBe(4);
	expect(fourBdrmMax).toBe(12);
	expect(fourBdrmMin).toBeLessThan(fourBdrmMax);
});	


test('to get avg sq ft', () => {
	const studio = getUnitsByType(data[0], 'studio');
	const studioSqFt = getAvgSqft(studio);

	const oneBdrm = getUnitsByType(data[0], 'oneBdrm');
	const  oneBdrmSqFt = getAvgSqft(oneBdrm);
	
	const twoBdrm = getUnitsByType(data[0], 'twoBdrm');
	const twoBdrmSqFt = getAvgSqft(twoBdrm);
	
	const threeBdrm = getUnitsByType(data[0], 'threeBdrm');
	const threeBdrmSqFt = getAvgSqft(threeBdrm);
	
	const fourBdrm = getUnitsByType(data[0], 'fourBdrm');
	const fourBdrmSqFt = getAvgSqft(fourBdrm);


	expect(studioSqFt).toBe(2580);
	expect(oneBdrmSqFt).toBe(3891);
	expect(twoBdrmSqFt).toBe(2768);
	expect(threeBdrmSqFt).toBe(2167);
	expect(fourBdrmSqFt).toBe(3022);
});