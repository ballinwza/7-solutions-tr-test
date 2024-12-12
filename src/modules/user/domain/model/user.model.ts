import { DepartmentType } from '@/shared/types/department.type'

export interface IUser {
    id: number
    firstName: string
    lastName: string
    nickName: string
    gender: 'male' | 'female'
    hairColor: string
    postalCode: string
    department: DepartmentType
    age: number
}

export interface IGroupUserByDepartment {
    male: number
    female: number
    ageRange: string
    hair: {
        [color: string]: number
    }
    addressUser: {
        [name: string]: string
    }
}
