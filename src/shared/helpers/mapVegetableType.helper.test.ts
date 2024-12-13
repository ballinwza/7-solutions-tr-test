import { VegetableType } from '../types/vegetable.type'
import { mapVegetableTypeFromStringToDomain } from './mapVegetableType.helper'

describe.each([
    ['Fruit', VegetableType.fruit],
    ['Vegetable', VegetableType.vegetable],
    ['wrong vegatble', undefined],
])(
    'map vegetableType from string to domain',
    (stringValue: string, expected: VegetableType | undefined) => {
        test(`should return ${expected} when stringValue is ${stringValue}`, () => {
            const actual = mapVegetableTypeFromStringToDomain(stringValue)

            expect(actual).toStrictEqual(expected)
        })
    },
)
