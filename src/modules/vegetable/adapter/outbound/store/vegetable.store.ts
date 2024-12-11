import { create } from 'zustand'
import { IVegetable } from '@/modules/vegetable/domain/model/vegetable.model'
import { VegetableRepositoryImpl } from '../../inbound/repository/vegetable.repository'
import { GetAllVegetableUsecase } from '@/modules/vegetable/application/usecases/vegetable.usecase'
import { VegetableType } from '@/shared/types/vegetable.type'

interface vegetableState {
    defaultVegetable: IVegetable[]
    vegetableList: IVegetable[]
    fruitList: IVegetable[]
    orderVegetable: IVegetable[]
    addVegetableIntoTable: (value: IVegetable) => void
    removeVegetableFromTableByClick: (value: IVegetable) => void
    removeVegetableFromTableByTime: () => void
    fetchVegetableList: () => Promise<void>
}

export const vegetableStore = create<vegetableState>((set, get) => ({
    defaultVegetable: [],
    vegetableList: [],
    fruitList: [],
    orderVegetable: [],
    addVegetableIntoTable: (value: IVegetable) => {
        const fillterDuplicate: IVegetable[] = get().defaultVegetable.filter(
            (item) => item.id != value.id,
        )

        if (value.type === VegetableType.fruit) {
            set(() => ({
                fruitList: [...get().fruitList, value],
            }))
        } else {
            set(() => ({
                vegetableList: [...get().vegetableList, value],
            }))
        }

        set(() => ({
            defaultVegetable: fillterDuplicate,
            orderVegetable: [...get().orderVegetable, value],
        }))
    },
    removeVegetableFromTableByClick: (value: IVegetable) => {
        const filterOrder = get().orderVegetable.filter(
            (item) => item.id !== value.id,
        )

        if (value.type === VegetableType.fruit) {
            const filter = get().fruitList.filter(
                (item) => item.id !== value.id,
            )
            set(() => ({
                fruitList: filter,
            }))
        } else {
            const filter = get().vegetableList.filter(
                (item) => item.id !== value.id,
            )
            set(() => ({
                vegetableList: filter,
            }))
        }

        set(() => ({
            defaultVegetable: [...get().defaultVegetable, value],
            orderVegetable: filterOrder,
        }))
    },
    removeVegetableFromTableByTime: () => {
        const [find] = get().orderVegetable.splice(0, 1)
        get().removeVegetableFromTableByClick(find)
    },
    fetchVegetableList: async () => {
        const vegetableRepoImpl = new VegetableRepositoryImpl()
        const getAllVegetableUsecase = new GetAllVegetableUsecase(
            vegetableRepoImpl,
        )

        const result = await getAllVegetableUsecase.handle()

        set(() => ({
            defaultVegetable: result,
        }))
    },
}))
