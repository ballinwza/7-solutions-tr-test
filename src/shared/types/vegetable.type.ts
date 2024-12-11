import { ObjectValueType } from '@/shared/utils/type.util'

export const VegetableType = {
    fruit: 'Fruit',
    vegetable: 'Vegetable',
} as const

export type VegetableType = ObjectValueType<typeof VegetableType>
