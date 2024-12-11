import { IVegetable } from '../../domain/model/vegetable.model'

export interface IVegetableRepository {
    getAll: () => IVegetableRepository.getAllOutput
}

export namespace IVegetableRepository {
    export type getAllOutput = Promise<IVegetable[] | any>
}
