import { IGroupUserByDepartment } from '@/modules/user/domain/model/user.model'
import { create } from 'zustand'
import { UserRepositoryImpl } from '../../inbound/repository/user.repository'
import { GetAllUserUsecase } from '@/modules/user/application/usecase/getAllUser.usecase'

interface userState {
    userList: { [department: string]: IGroupUserByDepartment }
    fetchAllUser: () => Promise<void>
}
export const userStore = create<userState>((set) => ({
    userList: {},
    fetchAllUser: async () => {
        const userRepo = new UserRepositoryImpl()
        const getAllUserUsecase = new GetAllUserUsecase(userRepo)

        const userList = await getAllUserUsecase.handle()

        set(() => ({
            userList,
        }))
    },
}))
