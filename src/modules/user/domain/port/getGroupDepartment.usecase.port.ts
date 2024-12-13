import { IGroupUserByDepartment } from '../model/user.model'

export interface IGetGroupDepartmentUsecase {
    handle: () => IGetGroupDepartmentUsecase.output
}

export namespace IGetGroupDepartmentUsecase {
    export type output = Promise<{
        [department: string]: IGroupUserByDepartment
    }>
}
