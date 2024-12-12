import { DepartmentType } from '../types/department.type'
import { MapDepartmentFromStringToDomainType } from './mapDepartment.help'

describe.each([
    [DepartmentType.account, 'Accounting'],
    [DepartmentType.engineer, 'Engineering'],
    [DepartmentType.hr, 'Human Resources'],
    [DepartmentType.legal, 'Legal'],
    [DepartmentType.marketing, 'Marketing'],
    [DepartmentType.pm, 'Product Management'],
    [DepartmentType.research, 'Research and Development'],
    [DepartmentType.sale, 'Sales'],
    [DepartmentType.service, 'Services'],
    [DepartmentType.support, 'Support'],
    [DepartmentType.traning, 'Training'],
    [DepartmentType.other, 'Etc'],
    [DepartmentType.other, 'nothing'],
])(
    'map departmentType from string to domain',
    (expected: DepartmentType, departmentType: string) => {
        test(`should return ${expected} when departmentType is ${departmentType}`, () => {
            const actual = MapDepartmentFromStringToDomainType(departmentType)

            expect(actual).toStrictEqual(expected)
        })
    },
)
