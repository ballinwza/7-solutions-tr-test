import { IVegetableRepository } from '../port/vegetable.repository.port'
import { GetAllVegetableUsecase } from './vegetable.usecase'

describe('test GetAllVegetableUsecase', () => {
    let vegetableRepoMock: jest.Mocked<IVegetableRepository>
    let getAllVegetableUsecase: GetAllVegetableUsecase

    beforeEach(() => {
        vegetableRepoMock = {
            getAll: jest.fn(),
        }

        getAllVegetableUsecase = new GetAllVegetableUsecase(vegetableRepoMock)
    })

    it('should return a list of vegetables when repo returns data', async () => {
        const mockVegetables = [
            { id: 1, name: 'Carrot' },
            { id: 2, name: 'Cucumber' },
        ]
        vegetableRepoMock.getAll.mockResolvedValue(mockVegetables)

        const result = await getAllVegetableUsecase.handle()

        expect(result).toEqual(mockVegetables)
        expect(vegetableRepoMock.getAll).toHaveBeenCalledTimes(1)
    })

    it('should return an empty array when repo returns no data', async () => {
        vegetableRepoMock.getAll.mockResolvedValue([])

        const result = await getAllVegetableUsecase.handle()

        expect(result).toEqual([])
        expect(vegetableRepoMock.getAll).toHaveBeenCalledTimes(1)
    })

    it('should log a message when no data is found', async () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation()
        vegetableRepoMock.getAll.mockResolvedValue([])

        await getAllVegetableUsecase.handle()

        expect(logSpy).toHaveBeenCalledWith(
            'Not have result on GetAllVegetableUsecase',
        )

        logSpy.mockRestore()
    })
})
