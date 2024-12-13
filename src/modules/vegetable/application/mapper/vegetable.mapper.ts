import { IVegetable } from '../../domain/model/vegetable.model'
import { mapVegetableTypeFromStringToDomain } from '@/shared/helpers/mapVegetableType.helper'

export class VegetableMapper {
    public static toDomain(
        index: number,
        res: {
            type: string
            name: string
        },
    ): IVegetable {
        return {
            id: index,
            type: mapVegetableTypeFromStringToDomain(res.type) ?? 'Vegetable',
            name: res.name,
        }
    }
}
