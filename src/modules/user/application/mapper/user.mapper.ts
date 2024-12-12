import { UserEntity } from '@/modules/user/adapter/inbound/entity/user.entity'
import { IUser } from '@/modules/user/domain/model/user.model'
import { MapDepartmentFromStringToDomainType } from '@/shared/helpers/mapDepartment.help'

export class UserMapper {
    public static toDomain(user: UserEntity): IUser {
        const {
            id,
            firstName,
            lastName,
            maidenName,
            gender,
            hair,
            address,
            company,
            age,
        } = user
        return {
            id,
            firstName,
            lastName,
            nickName: maidenName,
            gender: gender === 'male' ? 'male' : 'female',
            hairColor: hair.color,
            postalCode: address.postalCode,
            department: MapDepartmentFromStringToDomainType(company.department),
            age,
        }
    }
}
