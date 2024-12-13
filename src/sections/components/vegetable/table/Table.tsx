import { FC } from 'react'
import { CustomVegetableTable } from './Table.style'
import { capitalize } from 'radash'

import { IVegetable } from '@/modules/vegetable/domain/model/vegetable.model'
import CardItem from '../../coreUi/card/CardItem'

const { Container, Header, Body } = CustomVegetableTable

interface Props {
    title: string
    itemList: IVegetable[]
    onClick: (value: IVegetable) => void
}
const VegetableTable: FC<Props> = ({ title, itemList, onClick }: Props) => {
    return (
        <Container>
            <Header>{capitalize(title)}</Header>
            <Body>
                {itemList &&
                    itemList.map((item) => (
                        <CardItem key={item.id} onClick={() => onClick(item)}>
                            {item.name}
                        </CardItem>
                    ))}
            </Body>
        </Container>
    )
}

export default VegetableTable
