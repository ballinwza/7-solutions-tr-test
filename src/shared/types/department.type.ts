import { ObjectValueType } from '../utils/type.util'

export const DepartmentType = {
    engineer: 'Engineering',
    support: 'Support',
    research: 'Research and Development',
    hr: 'Human Resources',
    pm: 'Product Management',
    marketing: 'Marketing',
    service: 'Services',
    account: 'Accounting',
    traning: 'Training',
    legal: 'Legal',
    sale: 'Sales',
    other: 'Etc',
} as const

export type DepartmentType = ObjectValueType<typeof DepartmentType>
