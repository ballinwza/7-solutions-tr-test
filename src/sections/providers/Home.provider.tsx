'use client'
import { FC, useEffect } from 'react'

import HomeLayout from '../components/layout/HomeLayout'

import Table from '../components/table/Table'
import { userStore } from '@/modules/users/adapter/outbound/store/user.store'
import CardList from '../components/card/list/CardList'
import { IUser } from '@/modules/users/domain/user.model'
import useCountdown from '@/shared/hooks/useCountdown'

const HomeProvider: FC = () => {
    const {
        userList,
        tableOne,
        fetchUserList,
        setUserIntoTable,
        removeUserFromTable,
    } = userStore((state) => state)
    const { remainingTime, isRunning, start, reset } = useCountdown(5)

    useEffect(() => {
        if (userList.length === 0) fetchUserList()
    }, [])

    useEffect(() => {
        if (remainingTime === 0 && tableOne.length > 0) {
            removeUserFromTable()
        }
    }, [isRunning])

    const handlerUserIntoTable = (value: IUser) => {
        console.log('item', value)
        const fillterDuplicate: IUser[] = userList.filter(
            (item) => item.id != value.id,
        )
        setUserIntoTable(fillterDuplicate, [...tableOne, value])

        if (isRunning) {
            reset()
            setTimeout(() => {
                start()
            }, 500)
        } else {
            start()
        }
    }

    const removeUser = (value: IUser) => {
        console.log('value', value)
        const findDuplicate: IUser[] = tableOne.filter(
            (item) => item.id != value.id,
        )
        setUserIntoTable([...userList, value], [...findDuplicate])
    }

    return (
        <HomeLayout>
            {remainingTime}
            <CardList
                itemList={userList}
                addItemIntoTable={handlerUserIntoTable}
            />
            <div className="flex flex-row">
                <Table title="fruit" itemList={tableOne} onClick={removeUser} />
                {/* <Table title="vegatable" itemList={tableTwo} /> */}
            </div>
        </HomeLayout>
    )
}

export default HomeProvider
