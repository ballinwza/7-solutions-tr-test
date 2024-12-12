import { UserMapper } from '@/modules/user/application/mapper/user.mapper'
import { IUserRepository } from '@/modules/user/application/port/user.repository.port'
import axios from 'axios'
import { UserEntity } from '../entity/user.entity'
export class UserRepositoryImpl implements IUserRepository {
    async getAllUser(): IUserRepository.allUserOutput {
        try {
            const response = await axios.get('https://dummyjson.com/users')

            const afterMapping = response.data.users.map((item: UserEntity) =>
                UserMapper.toDomain(item),
            )

            return afterMapping
        } catch (error) {
            console.error('Error UserRepositoryImpl')
            throw error
        }
    }
}
