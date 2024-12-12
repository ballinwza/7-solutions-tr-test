'use client'
import { userStore } from '@/modules/user/adapter/outbound/store/user.store'
import { FC, useEffect } from 'react'

import CardSm from '../components/department/card/CardSm'
import TitleXl from '../components/department/title/TitleXl'
import TitleLg from '../components/department/title/TitleLg'

const DepartmentProvider: FC = () => {
    const { fetchAllUser, userList } = userStore((state) => state)

    const reformDataStructure = Object.entries(userList).map(([key, value]) => {
        return {
            department: key,
            female: value.female,
            male: value.male,
            ageRange: value.ageRange,
            address: Object.entries(value.addressUser).map(([key, value]) => ({
                name: key,
                postNumber: value,
            })),
            hairColor: Object.entries(value.hair).map(([key, value]) => ({
                color: key,
                count: value,
            })),
        }
    })

    useEffect(() => {
        fetchAllUser()
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-8 pb-8">
            {reformDataStructure &&
                reformDataStructure.map((value, index) => (
                    <div
                        key={index}
                        className="bg-gray-200 rounded-xl overflow-hidden shadow-xl"
                    >
                        <TitleXl>{value.department}</TitleXl>

                        <div className="ml-4 my-2">
                            <div>Female : {value.female ?? 0} person</div>

                            <div>Male : {value.male ?? 0} person</div>

                            <div>
                                Age (Min-Max) : {value.ageRange} years old
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
                            <div>
                                <TitleLg>Hair Color</TitleLg>
                                <div className="flex flex-col gap-2">
                                    {value.hairColor.map(
                                        ({ color, count }, index) => (
                                            <CardSm
                                                key={index}
                                                bgColor="bg-blue-200"
                                                index={index}
                                            >
                                                <div
                                                    className="bg-[#ffffff78] w-fit mx-auto px-4 py-0.5 rounded-2xl"
                                                    style={{
                                                        color,
                                                    }}
                                                >
                                                    {color}
                                                </div>
                                                <div>{count} person</div>
                                            </CardSm>
                                        ),
                                    )}
                                </div>
                            </div>

                            <div>
                                <TitleLg>Address</TitleLg>
                                <div className="flex flex-col gap-2">
                                    {value.address.map(
                                        ({ name, postNumber }, index) => (
                                            <CardSm
                                                key={index}
                                                bgColor="bg-orange-100"
                                                index={index}
                                            >
                                                <div className="break-words max-w-[95%] mx-auto">
                                                    {name}
                                                </div>
                                                <div>Postal : {postNumber}</div>
                                            </CardSm>
                                        ),
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default DepartmentProvider
