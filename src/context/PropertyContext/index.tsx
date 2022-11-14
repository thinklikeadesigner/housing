import { createContext } from 'react';
import { IProperty } from '../../components/helpers';



export const PropertyContext = createContext<IProperty[]>([]);