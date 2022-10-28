import { createContext } from 'react';
import data from '../../mockData.json';
import { getAmenities } from '../../components/helpers/index';

const amenities = getAmenities(data);

export const AmenityContext = createContext(amenities);