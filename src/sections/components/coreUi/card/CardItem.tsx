import { FC, ReactNode } from 'react'
import { CustomCardItem } from './CardItem.style'

interface Props {
    children: ReactNode
    onClick?: () => void
}

const { Container } = CustomCardItem

const CardItem: FC<Props> = ({ children, onClick }: Props) => {
    return <Container onClick={onClick}>{children}</Container>
}

export default CardItem
