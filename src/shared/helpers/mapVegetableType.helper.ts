import { VegetableType } from '../types/vegetable.type'

export const mapVegetableType = (type: string): VegetableType => {
    switch (type) {
        case 'Fruit':
            return VegetableType.fruit
        default:
            return VegetableType.vegetable
    }
}
