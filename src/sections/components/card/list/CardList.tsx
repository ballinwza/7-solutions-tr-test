import { FC } from 'react'
import CardItem from '../item/CardItem'
import { CustomCardList } from './CardList.style'
import { IUser } from '@/modules/users/domain/user.model'

const { Container } = CustomCardList

interface Props {
    itemList: IUser[]
    addItemIntoTable: (item: IUser) => void
}

const CardList: FC<Props> = ({ itemList, addItemIntoTable }: Props) => {
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

export default CardList
