import { IVegetable } from '../model/vegetable.model'

export interface IGetAllVegetableUsecase {
    handle: () => IGetAllVegetableUsecase.output
}

export namespace IGetAllVegetableUsecase {
    export type output = Promise<IVegetable[]>
}
