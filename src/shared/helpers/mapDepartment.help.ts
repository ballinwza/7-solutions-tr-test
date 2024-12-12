import { DepartmentType } from '../types/department.type'

export const MapDepartmentFromStringToDomainType = (
    department: string,
): DepartmentType => {
    switch (department) {
        case 'Engineering':
            return DepartmentType.engineer
        case 'Support':
            return DepartmentType.support
        case 'Research and Development':
            return DepartmentType.research
        case 'Human Resources':
            return DepartmentType.hr
        case 'Product Management':
            return DepartmentType.pm
        case 'Marketing':
            return DepartmentType.marketing
        case 'Services':
            return DepartmentType.service
        case 'Accounting':
            return DepartmentType.account
        case 'Training':
            return DepartmentType.traning
        case 'Legal':
            return DepartmentType.legal
        case 'Sales':
            return DepartmentType.sale
        default:
            return DepartmentType.other
    }
}
