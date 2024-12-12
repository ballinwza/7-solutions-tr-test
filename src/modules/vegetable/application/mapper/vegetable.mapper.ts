import { IVegetable } from '../../domain/model/vegetable.model'
import { mapVegetableType } from '@/shared/helpers/mapVegetableType.helper'

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
            type: mapVegetableType(res.type),
            name: res.name,
        }
    }
}
