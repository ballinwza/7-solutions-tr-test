import { IGroupUserByDepartment } from '../model/user.model'

export interface IGetAllUserUsecase {
    handle: () => IGetAllUserUsecase.output
}

export namespace IGetAllUserUsecase {
    export type output = Promise<{
        [department: string]: IGroupUserByDepartment
    }>
}
