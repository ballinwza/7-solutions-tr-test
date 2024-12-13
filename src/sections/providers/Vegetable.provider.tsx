'use client'
import { FC, useEffect } from 'react'
import { vegetableStore } from '@/modules/vegetable/adapter/outbound/store/vegetable.store'
import useCountdown from '@/shared/hooks/useCountdown'
import { IVegetable } from '@/modules/vegetable/domain/model/vegetable.model'
import VegetableLayout from '../components/vegetable/layout/Layout'
import VegetableList from '../components/vegetable/list/List'
import VegetableTable from '../components/vegetable/table/Table'

const VegetableProvider: FC = () => {
    const {
        defaultVegetable,
        vegetableList,
        fruitList,
        addVegetableIntoTable,
        fetchVegetableList,
        removeVegetableFromTableByClick,
        removeVegetableFromTableByTime,
        orderVegetable,
    } = vegetableStore((state) => state)

    const { remainingTime, isRunning, start, resetThenStart, reset } =
        useCountdown(5)

    useEffect(() => {
        fetchVegetableList()
    }, [])

    useEffect(() => {
        if (remainingTime === 0 && orderVegetable.length > 0) {
            removeVegetableFromTableByTime()
            start()
        }

        if (remainingTime === 0 && orderVegetable.length === 0) {
            reset()
            stop()
        }
    }, [isRunning])

    const addByClick = (value: IVegetable) => {
        addVegetableIntoTable(value)

        if (isRunning) {
            resetThenStart()
        } else {
            start()
        }
    }

    const removeByClick = (value: IVegetable) => {
        removeVegetableFromTableByClick(value)
        resetThenStart()
    }

    return (
        <VegetableLayout>
            <VegetableList
                itemList={defaultVegetable}
                addItemIntoTable={addByClick}
            />

            <VegetableTable
                title="fruit"
                itemList={fruitList}
                onClick={removeByClick}
            />
            <VegetableTable
                title="vegatable"
                itemList={vegetableList}
                onClick={removeByClick}
            />
        </VegetableLayout>
    )
}

export default VegetableProvider
