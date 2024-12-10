import { IUser } from '@/modules/users/domain/user.model'
import { create } from 'zustand'
import itemList from '@/shared/data/vegetable.json'
interface userState {
    userList: IUser[]
    tableOne: IUser[]
    setUserIntoTable: (userList: IUser[], dataInTable: IUser[]) => void
    removeUserFromTable: () => void
    fetchUserList: () => Promise<void>
}

export const userStore = create<userState>((set, get) => ({
    userList: [],
    tableOne: [],
    setUserIntoTable: (userList: IUser[], dataInTable: IUser[]) => {
        set(() => ({
            userList: userList,
            tableOne: dataInTable,
        }))
    },
    removeUserFromTable: () => {
        const t: IUser[] = get().tableOne.splice(1)
        set(() => ({
            userList: [...get().userList, get().tableOne[0]],
            tableOne: t,
        }))
    },
    fetchUserList: async () => {
        set(() => ({
            userList: itemList,
        }))
    },
}))
