import { IGroupUserByDepartment } from '@/modules/user/domain/model/user.model'
import { create } from 'zustand'
import { UserRepositoryImpl } from '../../inbound/repository/user.repository'
import { GetGroupDepartmentUsecase } from '@/modules/user/application/usecase/getGroupDepartment.usecase'

interface userState {
    userList: { [department: string]: IGroupUserByDepartment }
    fetchAllUser: () => Promise<void>
}
export const userStore = create<userState>((set) => ({
    userList: {},
    fetchAllUser: async () => {
        const userRepo = new UserRepositoryImpl()
        const getAllUserUsecase = new GetGroupDepartmentUsecase(userRepo)

        const userList = await getAllUserUsecase.handle()

        set(() => ({
            userList,
        }))
    },
}))
