export interface IProperty {
	id: string
	name: string
	picture: string
	units: UnitState[]
}

export interface IUnit {
	type: string
	minOccupancy: number
	maxOccupancy: number
	sqft: number
	amenities: string[]
}


//     REFACTOR
export type PropertyContextType = {
    properties: IProperty[],
    saveProperties: (properties: IProperties) => void
    updateProperties: (id: number) => void
}

export default { IUnit, IProperty, PropertyContextType };