import { IUser } from '@/modules/user/domain/model/user.model'

export interface IUserRepository {
    getAllUser: () => IUserRepository.allUserOutput
}

export namespace IUserRepository {
    export type allUserOutput = Promise<IUser[]>
}
