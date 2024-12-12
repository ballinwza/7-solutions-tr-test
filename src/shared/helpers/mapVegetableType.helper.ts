import { VegetableType } from '../types/vegetable.type'

export const mapVegetableTypeFromStringToDomain = (
    type: string,
): VegetableType | undefined => {
    switch (type) {
        case 'Fruit':
            return VegetableType.fruit
        case 'Vegetable':
            return VegetableType.vegetable
    }
}
