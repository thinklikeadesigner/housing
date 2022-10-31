// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import mockData from './mockData.json';
// jest --watch --collect-coverage

const data = mockData;

test('first object', () => {
	const d = data;
	expect(d[0].units[0].type).toBe('twoBdrm');
});

