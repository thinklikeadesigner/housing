// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import mockData from './mockData.json';
import { getUnitsByType, getUnitsMinMax, getAvgSqft } from './components/helpers';


// jest --watch --collect-coverage

const data = mockData;

describe('should be able to get all units by their type', () => {
	test('studio', () => {
		const studio = getUnitsByType(data[0], 'studio');
		const studios = getUnitsByType(data[5], 'studio');
		expect(studio[0].type).toBe('studio');
		expect(studios[5].type).toBe('studio');
	});
	
	test('oneBdrm', () => {
		const oneBdrm = getUnitsByType(data[0], 'oneBdrm');
		const oneBdrms = getUnitsByType(data[5], 'oneBdrm');
		expect(oneBdrm[0].type).toBe('oneBdrm');
		expect(oneBdrms[5].type).toBe('oneBdrm');
	});

	test('twoBdrm', () => {
		const twoBdrm = getUnitsByType(data[0], 'twoBdrm');
		const twoBdrms = getUnitsByType(data[5], 'twoBdrm');
		expect(twoBdrm[0].type).toBe('twoBdrm');
		expect(twoBdrms[5].type).toBe('twoBdrm');
	});

	test('threeBdrm', () => {
		const threeBdrm = getUnitsByType(data[0], 'threeBdrm');
		const threeBdrms = getUnitsByType(data[5], 'threeBdrm');
		expect(threeBdrm[0].type).toBe('threeBdrm');
		expect(threeBdrms[5].type).toBe('threeBdrm');
	});

	test('fourBdrm', () => {
		const fourBdrm = getUnitsByType(data[0], 'fourBdrm');
		const fourBdrms = getUnitsByType(data[5], 'fourBdrm');
		expect(fourBdrm[0].type).toBe('fourBdrm');
		expect(fourBdrms[5].type).toBe('fourBdrm');
	});
});
	
describe('for range of occupants', () => {
	test('studio', () => { 
		const studio = getUnitsByType(data[0], 'studio');
		const studioMin = getUnitsMinMax(studio).minOcc;
		const studioMax = getUnitsMinMax(studio).maxOcc;
		expect(studioMin).toBe(1);
		expect(studioMax).toBe(3);
		expect(studioMin).toBeLessThan(studioMax);
	});
	test('oneBdrm', () => { 
		const oneBdrm = getUnitsByType(data[0], 'oneBdrm');
		const oneBdrmMin = getUnitsMinMax(oneBdrm).minOcc;
		const oneBdrmMax = getUnitsMinMax(oneBdrm).maxOcc;
		expect(oneBdrmMin).toBe(1);
		expect(oneBdrmMax).toBe(5);
		expect(oneBdrmMin).toBeLessThan(oneBdrmMax);
	});
	test('twoBdrm', () => { 
		const twoBdrm = getUnitsByType(data[0], 'twoBdrm');
		const twoBdrmMin = getUnitsMinMax(twoBdrm).minOcc;
		const twoBdrmMax = getUnitsMinMax(twoBdrm).maxOcc;
		expect(twoBdrmMin).toBe(1);
		expect(twoBdrmMax).toBe(8);
		expect(twoBdrmMin).toBeLessThan(twoBdrmMax);
	});
	test('threeBdrm', () => { 
		const threeBdrm = getUnitsByType(data[0], 'threeBdrm');
		const threeBdrmMin = getUnitsMinMax(threeBdrm).minOcc;
		const threeBdrmMax = getUnitsMinMax(threeBdrm).maxOcc;
		expect(threeBdrmMin).toBe(2);
		expect(threeBdrmMax).toBe(11);
		expect(threeBdrmMin).toBeLessThan(threeBdrmMax);
	});
	test('fourBdrm', () => { 
		const fourBdrm = getUnitsByType(data[0], 'fourBdrm');
		const fourBdrmMin = getUnitsMinMax(fourBdrm).minOcc;
		const  fourBdrmMax = getUnitsMinMax(fourBdrm).maxOcc;
		expect(fourBdrmMin).toBe(4);
		expect(fourBdrmMax).toBe(12);
		expect(fourBdrmMin).toBeLessThan(fourBdrmMax);
	});
});


describe('to get avg sq ft', () => {
	test('to get avg sq ft', () => {

		const studio = getUnitsByType(data[0], 'studio');
		const studioSqFt = getAvgSqft(studio);
		expect(studioSqFt).toBe(2580);
	});
	test('to get avg sq ft', () => {
	
		const oneBdrm = getUnitsByType(data[0], 'oneBdrm');
		const  oneBdrmSqFt = getAvgSqft(oneBdrm);
		expect(oneBdrmSqFt).toBe(3891);
	});
	test('to get avg sq ft', () => {

		const twoBdrm = getUnitsByType(data[0], 'twoBdrm');
		const twoBdrmSqFt = getAvgSqft(twoBdrm);
		expect(twoBdrmSqFt).toBe(2768);
	});
	test('to get avg sq ft', () => {

		const threeBdrm = getUnitsByType(data[0], 'threeBdrm');
		const threeBdrmSqFt = getAvgSqft(threeBdrm);
		expect(threeBdrmSqFt).toBe(2167);
	});
	test('to get avg sq ft', () => {
		const fourBdrm = getUnitsByType(data[0], 'fourBdrm');
		const fourBdrmSqFt = getAvgSqft(fourBdrm);
		expect(fourBdrmSqFt).toBe(3022);
	});
});