import { IUserRepository } from '../port/user.repository.port'
import { MapDepartmentFromStringToDomainType } from '@/shared/helpers/mapDepartment.help'
import { IUser } from '../../domain/model/user.model'
import { DepartmentType } from '@/shared/types/department.type'
import { GetGroupDepartmentUsecase } from './getGroupDepartment.usecase'

jest.mock('@/shared/helpers/mapDepartment.help', () => ({
    MapDepartmentFromStringToDomainType: jest.fn(),
}))

describe('GetGroupDepartmentUsecase', () => {
    let userRepoMock: jest.Mocked<IUserRepository>
    let getGroupDepartmentUsecase: GetGroupDepartmentUsecase

    beforeEach(() => {
        userRepoMock = {
            getAllUser: jest.fn(),
        }
        getGroupDepartmentUsecase = new GetGroupDepartmentUsecase(userRepoMock)
    })

    it('should group users by department with correct attributes', async () => {
        // Arrange
        const mockUsers: IUser[] = [
            {
                id: 1,
                firstName: 'John',
                lastName: 'Doe',
                nickName: 'JD',
                gender: 'male',
                hairColor: 'black',
                department: DepartmentType.account,
                postalCode: '12345',
                age: 25,
            },
        ]

        userRepoMock.getAllUser.mockResolvedValue(mockUsers)
        ;(MapDepartmentFromStringToDomainType as jest.Mock).mockImplementation(
            (dept: string) => dept,
        )

        // Act
        const result = await getGroupDepartmentUsecase.handle()

        // Assert
        expect(result).toEqual({
            Accounting: {
                male: 1,
                hair: {
                    black: 1,
                },
                addressUser: {
                    JohnDoeJd: '12345',
                },
                ageRange: '25-25',
            },
        })
        expect(userRepoMock.getAllUser).toHaveBeenCalledTimes(1)
    })

    it('should return an empty object if no users are found', async () => {
        // Arrange
        userRepoMock.getAllUser.mockResolvedValue([])

        // Act
        const result = await getGroupDepartmentUsecase.handle()

        // Assert
        expect(result).toEqual({})
        expect(userRepoMock.getAllUser).toHaveBeenCalledTimes(1)
    })
})
