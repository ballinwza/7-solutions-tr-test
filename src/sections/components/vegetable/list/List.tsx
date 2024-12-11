import { FC } from 'react'

import { CustomVegetableList } from './List.style'

import { IVegetable } from '@/modules/vegetable/domain/model/vegetable.model'
import CardItem from '../../coreUi/card/CardItem'

const { Container } = CustomVegetableList

interface Props {
    itemList: IVegetable[]
    addItemIntoTable: (item: IVegetable) => void
}

const VegetableList: FC<Props> = ({ itemList, addItemIntoTable }: Props) => {
    return (
        <Container>
            {itemList &&
                itemList.map((item) => (
                    <CardItem
                        key={item.id}
                        onClick={() => addItemIntoTable(item)}
                    >
                        {item.name}
                    </CardItem>
                ))}
        </Container>
    )
}

export default VegetableList
