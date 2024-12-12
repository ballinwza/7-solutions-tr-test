import { IGetAllVegetableUsecase } from '../../domain/port/getAllVegetable.usecase.port'
import { IVegetableRepository } from '../port/vegetable.repository.port'

export class GetAllVegetableUsecase implements IGetAllVegetableUsecase {
    constructor(private readonly repo: IVegetableRepository) {}

    async handle(): IGetAllVegetableUsecase.output {
        const result = await this.repo.getAll()

        if (result.length === 0) {
            console.log('Not have result on GetAllVegetableUsecase')
            return []
        }

        return result
    }
}
