import { FC } from 'react'
import { CustomGroupTable } from './Table.style'
import { capitalize } from 'radash'
import { IUser } from '@/modules/users/domain/user.model'
import CardItem from '../card/item/CardItem'

const { Container, Header, Body } = CustomGroupTable

interface Props {
    title: string
    itemList: IUser[]
    onClick: (value: IUser) => void
}
const Table: FC<Props> = ({ title, itemList, onClick }: Props) => {
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

export default Table
