import { MapDepartmentFromStringToDomainType } from '@/shared/helpers/mapDepartment.help'
import { IGroupUserByDepartment } from '../../domain/model/user.model'
import { IGetGroupDepartmentUsecase } from '../../domain/port/getGroupDepartment.usecase.port'
import { IUserRepository } from '../port/user.repository.port'

import { capitalize } from 'radash'

export class GetGroupDepartmentUsecase implements IGetGroupDepartmentUsecase {
    constructor(private readonly repo: IUserRepository) {}

    async handle(): IGetGroupDepartmentUsecase.output {
        const result = await this.repo.getAllUser()

        const department: {
            [department: string]: IGroupUserByDepartment
        } = {}

        const ageInArray: { [department: string]: number[] } = {}

        result.forEach((user) => {
            const type = MapDepartmentFromStringToDomainType(user.department)

            if (!department[type]) {
                department[type] = {} as IGroupUserByDepartment
            }

            if (user.gender === 'female') {
                if (!department[type].female) {
                    department[type].female = 1
                } else {
                    department[type].female += 1
                }
            }

            if (user.gender === 'male') {
                if (!department[type].male) {
                    department[type].male = 1
                } else {
                    department[type].male += 1
                }
            }

            if (!department[type].hair) department[type].hair = {}
            if (!department[type].hair[user.hairColor]) {
                department[type].hair[user.hairColor] = 1
            } else {
                department[type].hair[user.hairColor] += 1
            }

            if (!department[type].addressUser) department[type].addressUser = {}
            department[type].addressUser[
                capitalize(user.firstName) +
                    capitalize(user.lastName) +
                    capitalize(user.nickName)
            ] = user.postalCode

            if (!ageInArray[type]) ageInArray[type] = []
            ageInArray[type].push(user.age)

            if (!department[type].ageRange) department[type].ageRange = ''
            department[type].ageRange =
                `${Math.min(...ageInArray[type])}-${Math.max(...ageInArray[type])}`
        })

        return department
    }
}
