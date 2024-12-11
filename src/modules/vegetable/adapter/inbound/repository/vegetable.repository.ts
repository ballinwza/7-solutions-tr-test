import { IVegetableRepository } from '@/modules/vegetable/application/port/vegetable.repository.port'
import vegetableData from '../data/vegetable.json'
import { VegetableMapper } from '@/modules/vegetable/application/mapper/vegetable.mapper'

export class VegetableRepositoryImpl implements IVegetableRepository {
    async getAll(): IVegetableRepository.getAllOutput {
        try {
            const response = vegetableData
            const afterMapping = response.map((item, index) =>
                VegetableMapper.toDomain(index, item),
            )

            return afterMapping
        } catch (err) {
            console.error('Error VegetableRepositoryImpl : ', err)
            return err
        }
    }
}
